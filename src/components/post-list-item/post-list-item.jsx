import './post-list-item.css';

const PostListItem = ({label, important, like, onDeleteClick, onImportantClick, onLikeClick}) => {
    let className = "app-list-item d-flex justify-content-between";
    if(important) className += ' important';
    if(like) className += ' like';
    return (
        <div className={className}>
            <span className="app-list-item-label" onClick={onLikeClick} >{label}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm" onClick={onImportantClick}>
                    <i className='fa fa-star'></i>
                </button>
                <button className="btn-trash btn-sm" onClick={onDeleteClick}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart" onClick={onLikeClick} ></i>
            </div>

        </div>
    )
}
export { PostListItem };