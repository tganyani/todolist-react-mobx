import { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { observer } from 'mobx-react-lite';
import {TodoContext} from '../context/todoContext'
import '../styles/searchBar.scss'


function SearchBar(){
    const { Todo } = useContext(TodoContext)

    return(
        <div className="search-bar">
            <input placeholder='search todo' value={Todo.searchTerm} onChange={(e)=>Todo.setSearchTerm(e.target.value)}/>
            <SearchIcon className="search-icon"/>
        </div>
    )
}

export default observer(SearchBar)


