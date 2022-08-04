import { useContext } from 'react'
import {FormControlLabel,FormGroup,Checkbox} from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import {TodoContext} from '../context/todoContext'
import { observer } from 'mobx-react-lite';
import '../styles/todos.scss'


function CompletedTodos() {
    const { Todo } = useContext(TodoContext)
    return (
        <div className='todos'>
            {
                Todo.todos.filter(todo => todo.completed === true).filter(todo=>todo.title.toLowerCase().includes(Todo.searchTerm)).map(todo => (
                    <div key={todo.id}>
                        <FormGroup >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id={String(todo.id)}
                                        checked={todo.completed}
                                        onChange={(e) => Todo.handleCheckBoxClick(e.target.id)}
                                    />
                                }
                                label={todo.title}
                            />
                        </FormGroup>
                        <EditIcon  className='edit-icon' id={String(todo.id)} onClick={(e) => Todo.handleOpenEditTodo(e.currentTarget.id)} />
                        <RemoveCircleOutlineIcon className='delete-icon' id={String(todo.id)} onClick={(e) => Todo.deleteTodo(e.currentTarget.id)} />
                    </div>
                ))
            }
            <Dialog
                open={Todo.isInEditMode}
                onClose={() => Todo.handleCloseEditTodo()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure you want to edit edit todo?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <input defaultValue={Todo.todoToEdit.title} onChange={(e) => Todo.setTodoTitle(e.target.value)} style={{width:'95%'}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => Todo.handleCloseEditTodo()}>cancel</Button>
                    <Button onClick={() => Todo.handleEditTodo({ ...Todo.todoToEdit, title: Todo.title })} autoFocus>
                        edit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default observer(CompletedTodos)