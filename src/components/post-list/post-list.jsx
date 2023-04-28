import { PostListItem } from "../post-list-item/post-list-item";
import './post-list.css';


const PostList = ({ posts, onDelete, onImportant, onLike }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem onDeleteClick={() => onDelete(id)}
                 onImportantClick={() => onImportant(id)}
                  onLikeClick={() => onLike(id)}
                   {...itemProps} />
            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export { PostList };