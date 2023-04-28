import { useState } from "react";
import { AppHeader } from "../app-header/app-header";
import { PostAddForm } from "../post-add-form/post-add-form";
import { PostList } from "../post-list/post-list";
import { PostStatusFilter } from "../post-status-filter/post-status-filter";
import { SearchPanel } from "../search-panel/search-panel";
import { v4 } from "uuid";
import "./app.css";
import { useLocalStorage } from "../../hooks/usedLocalStorage";



function App() {
    const defaultValue = [
        { label: 'Going to learn React', important: true, like: true, id: 1 },
        { label: 'That is so good', important: false, like: false, id: 2 },
        { label: 'I need a break...', important: false, like: true, id: 3 },
    ]

    

    const [data, setData] = useLocalStorage('data', defaultValue );

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    

    

    const searchPost = (items, term) =>{
        if(term.length === 0) return items;

        return items.filter(item =>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })

    }
    const filterPost = (items, filter) => {
        if(filter === 'like'){
            return items.filter(item => item.like); 
        }
        else if(filter === 'all'){
            return items;
        }
        else if(filter === 'important'){
            return items.filter(item => item.important); 
        }
        return items
    }

    const onDelete = (id) => {
        const index = data.findIndex(post => post.id === id);

        const before = data.splice(0, index);
        const after = data.splice(index + 1);

        const newData = [...before, ...after];
        setData(newData);
    }

    const onImportant = (id) => {
        const newData = data.map(post =>{
            if(post.id === id){
                post.important = !post.important
            }
            return post

        });

        setData(newData)

    }

    const onLike = (id) =>{
        const newData = data.map(post =>{
            if(post.id === id){
                post.like = !post.like
            }
            return post

        });

        setData(newData)
    }

    const onAdd = (body) =>{
        if(!body) return;
        const newPost = {
            label: body,
            important: false,
            like: false,
            id: v4()
        };
        
            
        const newData = [newPost, ...data ];
        setData(newData);
    };

    const postCount = data.length;
    const likesCount = data.filter(post => post.like).length;
    const visiblePosts = filterPost(searchPost(data, term), filter);

    return (
        <div className="App">
            <AppHeader postCount={postCount} likesCount={likesCount}/>
            <div className="search-panel d-flex">
                <SearchPanel term={term} setTerm={setTerm}/>
                <PostStatusFilter setFilter={setFilter} filter={filter} />
            </div>
            <PostList onDelete={onDelete} posts={visiblePosts} onImportant={onImportant} onLike={onLike} />
            <PostAddForm onAdd={onAdd} />

        </div>
    );
}

export default App;
