import './post-status-filter.css';

const PostStatusFilter = ({ setFilter, filter }) => {
    const buttonInfo = [
        { name: 'all', label: 'Все' },
        { name: 'like', label: 'Сподобалось' },
        { name: 'important', label: 'Важливi' }
    ];

    const buttons = buttonInfo.map(({name, label}) => {

        const isActive = filter === name;
        const activityClass = isActive  ? 'btn-info' : 'btn-outline-secondary';

        return (
            <button type="button"
                className={`btn ${activityClass}`}
                onClick={() => setFilter(name)}
            >{label}</button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}
export { PostStatusFilter };