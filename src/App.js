import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TodoContext } from './context/todoContext';
import './App.scss';
import AllTodos from './components/allTodos';
import InputTodo from './components/inputTodo';
import BottomNav from './components/bottomNav';
import ActiveTodos from './components/activeTodos';
import CompletedTodos from './components/completedTodos';
import SearchBar from './components/searchBar';
import Header from './components/header';
import Todos from './store/todos';

const Todo = new Todos()

function App() {
  return (
    <TodoContext.Provider value={{ Todo }} >
      <div className="App">
        <div className='sub-app'>
          <Header/>
          <SearchBar/>
          <Router>
            <Routes>
              <Route path='/' element={<AllTodos />} />
              <Route path='/active' element={<ActiveTodos />} />
              <Route path='/completed' element={<CompletedTodos />} />
            </Routes>
            <InputTodo />
            <BottomNav />
          </Router>
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default observer(App)
