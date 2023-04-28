import './app-header.css';

const AppHeader = ({postCount, likesCount}) => {
    return (
        <div className="app-header d-flex">
            <h1>Nikita</h1>
            <h2>{postCount} записей, з них сподобалось {likesCount}</h2>
        </div>
    )
}
export { AppHeader };