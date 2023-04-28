import './search-panel.css';

const SearchPanel = ({term, setTerm}) => {

    return (
        <input 
            className="form-controll search-input" 
            type="text"
            placeholder="Пошук по записам"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
         />
    )
        
}
export { SearchPanel };