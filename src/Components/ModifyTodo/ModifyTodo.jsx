import React from "react";
import { DisplayForModifyTodo } from "../../constant";
import { useEffect, useRef, useState } from "react";
import {
  addSubTodo,
  addTodo,
  changeSubTodoStatus,
  changeTodoImportant,
  changeTodoStatus,
  removeSubTodo,
  removeTodo,
} from "../../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

import CheckMarkIcon from "../../assets/images/checkmark-circle.svg";
import DeleteSubTodoIcon from "../../assets/images/delete-subtodo.svg";
import StarIcon from "../../assets/images/star.svg";
import AddICon from "../../assets/images/add.svg";
import DeleteIcon from "../../assets/images/delete.svg";
import ExitIcon from "../../assets/images/exit.svg";
import CheckMarkCompletedIcon from "../../assets/images/checkmarkadd.svg";
import starFilled from "../../assets/images/star-filled.svg";

import "./ModifyTodo.scss";

const ModifyTodo = ({
  handleChange,
  list,
  modifiedTodo,
  handleChangeImportant,
}) => {
  const dispatch = useDispatch();
  const subTodoName = useRef("");
  const [todos, setTodos] = useState();
  const lists = useSelector(state => state)

  useEffect(() => {
    try {
      setTodos(list.todo.find((todo) => todo.id === modifiedTodo.id));
    } catch (error) {
      console.log(error);
    }
  });

  /**
   * @name handleKeyPress
   * @description Handles a key press event. If the key pressed is "Enter", it triggers
   *               the `handleClick` function. This function is typically used to perform
   *               an action when the user presses the "Enter" key.
   *
   * @param {KeyboardEvent} value - The key press event object. This contains information
   *                                 about the key that was pressed.
   * @returns {void} This function does not return a value.
   * @author [Bhoopathy Raj]
   */
  const handleKeyPress = (value) => {
    try {
      if (value.key === "Enter") {
        handleClick();
      }
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @name handleChangeStatus
   * @description Dispatches an action to change the status of a sub-todo item.
   *               This function updates the status of a specified sub-todo in the Redux store.
   *
   * @param {number} subTodoId - The ID of the sub-todo whose status is to be changed.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleChangeStatus = (subTodoId) => {
    try {
      dispatch(changeSubTodoStatus(subTodoId, modifiedTodo.id, list.id));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleClick
   * @description Handles the click event to add a new sub-todo item. It creates a new sub-todo
   *               object if the input field is not empty, dispatches an action to add it to the store,
   *               and then clears the input field.
   *
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleClick = () => {
    try {
      if (subTodoName.current.value !== "") {
        let todo = {
          id: todos.subTodo.length,
          name: subTodoName.current.value,
          isCompleted: false,
        };
        dispatch(addSubTodo(todo, list.id, modifiedTodo.id));
      }
      subTodoName.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleDeleteSubTodo
   * @description Dispatches an action to remove a sub-todo item. This function deletes
   *               the specified sub-todo from the Redux store.
   *
   * @param {number} subTodoId - The ID of the sub-todo to be removed.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleDeleteSubTodo = (subTodoId) => {
    try {
      dispatch(removeSubTodo(subTodoId, modifiedTodo.id, list.id));
    } catch (error) {
      console.log(error, "there is a  error in removesubTodo");
    }
  };

  /**
   * @name handleCompleteTodo
   * @description Dispatches an action to mark a todo item as complete. This function updates
   *               the completion status of a specified todo in the Redux store.
   *
   * @param {number} id - The ID of the todo item to be marked as complete.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleCompleteTodo = (id) => {
    try {
      dispatch(changeTodoStatus(list.id, id));
    } catch (error) {
      console.log(error, "error in handleCompleteTodo");
    }
  };

  /**
   * @name handleDeleteTodo
   * @description Dispatches an action to remove a todo item and updates the state to reflect
   *               that the todo has been deleted. This function removes the specified todo from
   *               the Redux store and then updates the UI state.
   *
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleDeleteTodo = () => {
    try {
      dispatch(removeTodo(list.id, modifiedTodo.id));
      handleChange(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleChangeTodoStatus
   * @description Dispatches an action to change the importance status of a todo item. This function
   *               updates whether the todo item is marked as important in the Redux store.
   *
   * @param {number} id - The ID of the todo item whose importance status is to be changed.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleChangeTodoStatus = (id) => {
    try {
      dispatch(changeTodoImportant(id, list.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateMyDay = (value) => {
    let todo = {...value,
    id : lists[0]?.todo?.length}
    if (list.id !== 0) {
      dispatch(addTodo(todo, 0));
    }
  };

  return (
    <div className="modify-todo-page">
      <div className="todo-body">
        {todos?.isCompleted ? (
          <div className="todo-header-title">
            <img
              src={CheckMarkCompletedIcon}
              alt="click to complete the todo"
              className="todo-icon"
              onClick={() => handleCompleteTodo(todos.id)}
            />
            <button className="todo-name finished">{todos?.task}</button>

            <img
              src={todos?.isImportant ? starFilled : StarIcon}
              alt="click to mark its important"
              className="todo-icon"
              onClick={() => handleChangeTodoStatus(todos.id)}
            />
          </div>
        ) : (
          <div className="todo-header-title">
            <img
              src={CheckMarkIcon}
              alt="click to complete the todo"
              className="todo-icon"
              onClick={() => handleCompleteTodo(todos.id)}
            />
            <button className="todo-name">{todos?.task}</button>
            <img
              src={todos?.isImportant ? starFilled : StarIcon}
              alt="click to mark its important"
              className="todo-icon"
              onClick={() => handleChangeImportant(todos.id)}
            />
          </div>
        )}

        <div className="sub-todo-list">
          <img src={AddICon} alt="sub-todo-icon" />
          <input
            type="text"
            ref={subTodoName}
            classname="add-sub-todo"
            placeholder="Add Steps"
            onKeyUp={(value) => handleKeyPress(value)}
          />
        </div>
        {todos?.subTodo?.map((value, key) => {
          return (
            <div
              className={
                value.isCompleted ? "todo-completed" : "todo-body-options"
              }
              key={key}
            >
              <img
                src={value.isCompleted ? CheckMarkCompletedIcon : CheckMarkIcon}
                alt={CheckMarkIcon}
                className="options-image"
                onClick={() => handleChangeStatus(value.id)}
              />
              <p className="options-name">{value.name}</p>
              <button className="delete-sub-todo">
                <img
                  src={DeleteSubTodoIcon}
                  alt={DeleteSubTodoIcon}
                  className="options-image delete-sub-todo-icon"
                  onClick={() => handleDeleteSubTodo(value.id)}
                />
              </button>
            </div>
          );
        })}

        {DisplayForModifyTodo.map((displayContent, key) => {
          return (
            <div
              className="todo-body-options"
              key={key}
              onClick={() => key === 0 && handleUpdateMyDay(todos)}
            >
              <img
                src={displayContent.image}
                alt={displayContent.value}
                className="options-image"
              />
              <p className="options-name">{displayContent.value}</p>
            </div>
          );
        })}
        <div className="todo-option-notes">
          <textarea className="add-notes-field" placeholder="Add a note" />
        </div>
      </div>
      <div className="todo-footer">
        <img
          src={ExitIcon}
          alt="click to complete the todo"
          className="todo-icon"
          onClick={() => handleChange(false)}
        />
        <img
          src={DeleteIcon}
          alt="click to complete the todo"
          className="todo-icon"
          onClick={handleDeleteTodo}
        />
      </div>
    </div>
  );
};

export default ModifyTodo;
