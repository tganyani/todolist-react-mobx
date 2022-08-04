import { makeObservable, observable, action,} from "mobx";

class Todos {
    todos= [
        {
            id:1,
            title:"reading",
            completed:false
        },
        {
            id:2,
            title:"cooking",
            completed:false
        },
        {
            id:3,
            title:"programming with javascript",
            completed:true
        },
        {
            id:4,
            title:"programming with python",
            completed:false
        },
        {
            id:5,
            title:"programming with c++",
            completed:false
        },
        {
            id:6,
            title:"programming with typescript",
            completed:true
        }
    ]
    title = ''
    searchTerm = ''
    isInEditMode = false
    todoToEdit = {}
    constructor(){
        makeObservable(this,{
            todos:observable,
            title:observable,
            isInEditMode: observable,
            todoToEdit:observable,
            searchTerm: observable,
            addTodo:action,
            deleteTodo: action,
            setTodoTitle: action,
            setSearchTerm:action,
            handleCheckBoxClick: action,
            handleOpenEditTodo: action,
            handleCloseEditTodo: action,
            handleEditTodo: action,
            handleClearAllCompleted: action,
        })
    }

    addTodo(todo){
        this.todos.push(todo)
        this.title = ''
    }
    deleteTodo(id){
        const filteredTodos= this.todos.filter(todo=> String(todo.id) !== id)
        this.todos = filteredTodos
    }
    setTodoTitle(title){
        this.title = title
    }
    setSearchTerm(term){
        this.searchTerm = term
    }
    handleCheckBoxClick(id){
        const updatedTodos= this.todos.map(todo=> {
            if(String(todo.id) === id){
                return {
                    ...todo, completed: !todo.completed
                }
            }
            else{
                return todo
            }
        })
        this.todos = updatedTodos
    }
    handleOpenEditTodo(id){
        this.isInEditMode = true
        this.todoToEdit = this.todos.find(todo=> String(todo.id) === id)
        this.setTodoTitle(this.todoToEdit.title)
    }
    handleCloseEditTodo(){
        this.isInEditMode = false
    }

    handleEditTodo(todoToEdit){
       const updatedTodos = this.todos.map(todo=>{
            if(todo.id === todoToEdit.id){
                return {
                    ...todo, title: todoToEdit.title
                }
            }
            else{
                return todo
            }
        })
        this.todos = updatedTodos
        this.isInEditMode = false
        this.title = ''
    }
    handleClearAllCompleted(){
        const updatedTodos = this.todos.filter(todo=> todo.completed === false)
        this.todos = updatedTodos
    }
}

export default Todos