import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite';

import {TodoContext} from '../context/todoContext'
import '../styles/inputTodo.scss'

function InputTodo() {
    const { Todo } = useContext(TodoContext)

    return (
        <div className='input-div'>
            <input placeholder='type todo' value={Todo.title} onChange={(e) => Todo.setTodoTitle(e.target.value)} />
            <button onClick={() => Todo.addTodo({ id: uuidv4(), title: Todo.title, completed: false })}>Add Todo</button>
        </div>
    )
}

export default observer(InputTodo)
