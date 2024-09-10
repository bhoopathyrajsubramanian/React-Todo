import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import TodoBody from "./Components/TodoBody/TodoBody";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
function App() {
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState(false);

  const [pageName, setPageName] = useState([
    {
      id: 0,
      name: "My Day",
      completedTodo: [],
      inCompletedTodo: [],
    },
    {
      id: 1,
      name: "Important",
      completedTodo: [],
      inCompletedTodo: [],
    },
    {
      id: 2,
      name: "Planned",
      completedTodo: [],
      inCompletedTodo: [],
    },
    {
      id: 3,
      name: "Assigned to me",
      completedTodo: [],
      inCompletedTodo: [],
    },
    {
      id: 4,
      name: "Flagged email",
      completedTodo: [],
      inCompletedTodo: [],
    },
    {
      id: 5,
      name: "Tasks",
      completedTodo: [],
      inCompletedTodo: [],
    },
  ]);

  const handleCreatePage = (todo) => {
    setPageName((prev) => [
      ...prev,
      {
        id: pageName.length,
        name: todo.name,
        completedTodo: [],
        inCompletedTodo: [],
      },
    ]);
  };

  useEffect(() => {
    console.log(pageName);
  }, [pageName]);

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleDo = () => {
    console.log(change);
    setChange(!change);
  };
  return (
    <div className="todo-page">
      <Header />
      <div className="todo-body-section">
        <Navbar
          handleChange={handleChange}
          toggle={toggle}
          handleCreatePage={handleCreatePage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <TodoBody
                toggle={toggle}
                change={change}
                handleDo={handleDo}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <TodoBody
                toggle={toggle}
                change={change}
                handleDo={handleDo}
                handleChange={handleChange}
              />
            }
          />
          <Route
            path="*"
            element={<h1 style={{width:"100vh",placeSelf:"center"}}>the page is not found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
