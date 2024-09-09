import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import './App.scss'
import TodoBody from './Components/TodoBody/TodoBody';
import { useState } from 'react';
import ModifyTodo from './Components/ModifyTodo/ModifyTodo';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [toggle, setToggle] = useState(false)
  const [change, setChange] = useState(false)

  const handleChange = () => {
    setToggle(!toggle);
  }

  const handleDo = () => {
    console.log(change)
    setChange(!change);
  }
  return (

    <div className="todo-page">
      <Header />
      <div className="todo-body-section">
        <Navbar handleChange={handleChange} toggle={toggle} />
        <Routes>
          <Route path="/"
            element={
              <TodoBody toggle={toggle} change={change} handleDo={handleDo} handleChange={handleChange} />
            }
          />
          <Route path="/:id"
            element={
              <TodoBody toggle={toggle} change={change} handleDo={handleDo} handleChange={handleChange} />
            }
          />
        </Routes>
      </div>
    </div>

  )
}

export default App;
