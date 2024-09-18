import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import TodoBody from "./Components/TodoBody/TodoBody";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addList } from "./redux/actions/todoActions";
import { useLocation } from "react-router-dom";

import "./App.scss";
const App = () => {
  const todoLists = useSelector((state) => state);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const [change, setChange] = useState(false);
  let location = useLocation();
  let data = location.pathname;
  data = data.replaceAll("%20", " ");
  data = data.split(":").splice(1, 1);
  const list = todoLists.find((item) => item.name === data[0]);

  /**
   * @name handleCreatePage
   * @description Handles the creation of a new list by dispatching an action to add it to the Redux store.
   *
   * This function takes a `todo` object and dispatches the `addList` action with it.
   *
   * @param {Object} todo - The todo object representing the new list to be added.
   * @returns {void}
   */
  const handleCreatePage = (todo) => {
    try{
    dispatch(addList(todo));
    }
    catch(error)
    {

      console.log(error)
    }
  };

  /**
   * @name handleChange
   * @description Toggles the boolean state variable `toggle` between `true` and `false`.
   *
   * This function updates the `toggle` state by flipping its current value.
   *
   * @returns {void}
   */
  const handleChange = () => {
    try{
    setToggle((prevToggle) => !prevToggle);
    }
    catch(error)
    {
      console.log(error)
    }
  };

  /**
   * @name handleDo
   * @description Logs the current state of `toggle` and updates the `change` state with the provided `toggle` value.
   *
   * This function logs the `toggle` value to the console and sets the `change` state to this value.
   *
   * @param {boolean} toggle - The current state of the toggle.
   * @returns {void}
   */
  const handleDo = (toggle) => {
    try{
     console.log(toggle);
    setChange(toggle);
    }
    catch(error)
    {
      console.log(error)
    }
  };
  return (
    <div className="todo-page">
      <Header />
      <div className="todo-body-section">
        <Navbar
          handleChange={handleChange}
          toggle={toggle}
          handleCreatePage={handleCreatePage}
          handleDo={handleDo}
        />
        <Routes>
          <Route path="/" />
          <Route
            path="/todo/:id"
            element={
              <TodoBody
                toggle={toggle}
                change={change}
                handleDo={handleDo}
                handleChange={handleChange}
                list={list}
                data={data}
              />
            }
          />
          <Route
            path="*"
            element={
              <h1 style={{ width: "100vh", placeSelf: "center" }}>
                the page is not found
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
