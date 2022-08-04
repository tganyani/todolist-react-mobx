import { useContext} from 'react'
import { observer } from 'mobx-react-lite';
import {TodoContext} from '../context/todoContext'
import {Link} from 'react-router-dom'

import '../styles/bottomNav.scss'

function BottomNav() {
    const { Todo } = useContext(TodoContext)
    return (
        <div className='bottom-nav'>
            <Link className='link' to='/'>All:{Todo.todos.length}</Link>
            <Link style={{backgroundColor:'orange'}} className='link' to='/active'>Active:{Todo.todos.filter(todo=>todo.completed === false).length}</Link>
            <Link style={{backgroundColor:'yellowgreen'}} className='link' to='/completed'>Completed:{Todo.todos.filter(todo=>todo.completed === true).length}</Link>
            <div style={{backgroundColor:'red'}} className='link' onClick={()=>Todo.handleClearAllCompleted()}> del completed</div>
        </div>
    )
}

export default observer(BottomNav)
