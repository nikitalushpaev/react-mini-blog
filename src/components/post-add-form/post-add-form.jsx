import { useState } from 'react';
import './post-add-form.css';


const PostAddForm = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onAdd(text);
        setText('');
    }
    
    return (
        <form className="bottom-panel d-flex" onSubmit={onSubmit}>
            <input
                type="text" 
                placeholder="Про що ви думаете зараз"
                className="form-control new-post-label"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button 
            type="submit"
            className="btn btn-outline-secondary" >
                Додати</button>
        </form>
    )
}
export { PostAddForm };