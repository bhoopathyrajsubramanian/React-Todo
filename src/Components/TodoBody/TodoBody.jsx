import { useEffect, useState } from "react";
import { useRef } from "react";
import { displayOptions, displayType, displaySettings } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  changeTodoImportant,
  changeTodoStatus,
  countTodo,
  setDueDate,
} from "../../redux/actions/todoActions";
import { motion } from "framer-motion";
import { navbarContent } from "../../constant";
import DatePicker from "react-datepicker";
import Menu from "../../assets/images/menu-nav.svg";
import ThreeDots from "../../assets/images/three-dots.svg";
import AddIcon from "../../assets/images/add.svg";
import StarIcon from "../../assets/images/star.svg";
import CircleIcon from "../../assets/images/circle-oval.svg";
import CheckMarkIcon from "../../assets/images/checkmarkadd.svg";
import ModifyTodo from "../ModifyTodo/ModifyTodo";
import StarFilled from "../../assets/images/star-filled.svg";
import UpArrow from "../../assets/images/up-arrow.svg";
import DownArrow from "../../assets/images/down-arrow.svg";
import "./TodoBody.scss";
import "react-datepicker/dist/react-datepicker.css";
import "simplebar-react/dist/simplebar.min.css";
const TodoBody = ({ handleChange, toggle, handleDo,list, change,  data }) => {
  const taskName = useRef("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodo, setCompletedTodo] = useState(
    list?.todo?.filter((todo) => todo?.isCompleted === true)
  );
  const [inCompletedTodo, setInCompletedTodo] = useState(
    list?.todo?.filter((todo) => todo?.isCompleted === false)
  );
  const [displayList, setDisplayList] = useState("");

  const [showCompletedTodo, setshowCompletedTodo] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState();
  useEffect(() => {
    try {
      setDisplayList(navbarContent.find((item) => item.value === list.name));
    } catch (error) {
      console.log(error);
    }
  }, [list]);
  useEffect(() => {
    try {
      setInCompletedTodo(
        list?.todo?.filter((todo) => todo?.isCompleted === false)
      );
      setCompletedTodo(
        list?.todo?.filter((todo) => todo?.isCompleted === true)
      );
    } catch (error) {
      console.log(error);
    }
  }, [list?.todo]);

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(countTodo(list.id, inCompletedTodo?.length));
    } catch (error) {
      console.log(error);
    }
  }, [inCompletedTodo?.length]);

  const handleShow = () => {
    try {
      setShowOptions(true);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @name handleComplete
   * @description Dispatches an action to change the status of a todo item and updates the
   *               list of completed todos. This function marks a specified todo as complete
   *               and updates the state to reflect all completed todos.
   *
   * @param {number} id - The ID of the todo item to be marked as completed.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleComplete = (id) => {
    try {
      dispatch(changeTodoStatus(list?.id, id));
      todoList.forEach((todo) => {
        if (todo?.isCompleted) {
          setCompletedTodo((prev) => [...prev, todo]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handlePass
   * @description Updates the state with the provided modified todo item. This function
   *               is used to set the `modifiedTodo` state to the given `modifiedTodo` object.
   *
   * @param {object} modifiedTodo - The todo item to be set as the modified todo.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handlePass = (modifiedTodo) => {
    try {
      setModifiedTodo(modifiedTodo);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleChangeImportant
   * @description Toggles the importance status of a todo item and dispatches an action
   *               to update this status in the Redux store. This function also updates
   *               the local state to reflect the change in importance.
   *
   * @param {number} id - The ID of the todo item whose importance status is to be toggled.
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleChangeImportant = (id) => {
    try {
      setTodoList(
        todoList.map((todo) =>
          todo?.id === id ? { ...todo, isImportant: !todo?.isImportant } : todo
        )
      );
      console.log(id, list.id);
      dispatch(changeTodoImportant(id, list.id));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleSubmit
   * @description Handles the submission of a new todo item. If the task name input field
   *               is not empty, it creates a new todo object, dispatches an action to add
   *               it to the Redux store, and then clears the input field.
   *
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */

  const handleSubmit = () => {
    try {
      if (taskName?.current?.value?.length > 0) {
        let todo = {
          id: list?.todo?.length,
          task: taskName.current.value,
          isCompleted: false,
          isImportant: false,
          dueDate: new Date(),
          subTodo: [],
        };
        dispatch(addTodo(todo, list.id));
      }
      taskName.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @name handleKeyEnter
   * @description Handles key events and triggers form submission when the Enter key is pressed.
   *
   * This function is designed to be used as an event handler for keyboard events. It checks if the key pressed is the Enter key and, if so, calls the `handleSubmit` function.
   *
   * @param {KeyboardEvent} event - The keyboard event object associated with the key press.
   * @returns {void} - This function does not return anything.
   * @author Bhoopathy Raj
   */
  const handleKeyEnter = (e) => {
    try {
      if (e.code === "Enter") {
        handleSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * @name handleToggleCompletedTodo
   * @description this function used  to toggle the value  of the showCompletedTodo
   * @param {void} this function does not have params
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */
  const handleToggleCompletedTodo = () => {
    try {
      setshowCompletedTodo(!showCompletedTodo);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @name handleTodoDate
   * @description this dispatcher function update duedate of the todo
   * @param {todoId} todoId this todoId is in the todolist
   *  @param {date} date the dueDate that has to be added
   * @returns {void} This function does not return a value.
   * @author Bhoopathy Raj
   */

  const handleTodoDate = (date, todoId) => {
    try {
      dispatch(setDueDate(todoId, list.id, date));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(new Date());

  return (
    <>
      <div className={`todo-body ${change ? "content" : ""}`}>
        <div className="todo-body-header">
          <div className="todo-display-content">
            <button className="button-menu" onClick={handleChange}>
              <img
                src={
                  (toggle && displayList?.Image && displayList?.Image) || Menu
                }
                alt="menu icon"
                className="menu-icon"
              />
            </button>
            <p className="todo-display-name">
              {displayList?.value ? displayList?.value : data}
            </p>
            <button className="button-menu">
              <img className="menu-icon" src={ThreeDots} alt="threedots" />
            </button>
            {displayType.map((button, key) => {
              return (
                <button
                  className={
                    button.value === "Grid"
                      ? "button-menu-order grid"
                      : "button-menu-order"
                  }
                  key={key}
                >
                  <img
                    className="menu-icon"
                    src={button.image}
                    alt={button.value}
                  />
                  {!change && (
                    <p className="todo-display-text">{button.value}</p>
                  )}
                </button>
              );
            })}
          </div>
          <div
            className={toggle ? "todo-display-others" : "todo-display-options"}
          >
            {displayOptions.map((options, key) => {
              return (
                <button className="button-menu-options" key={key}>
                  <img className="menu-icon" src={options.image} alt="sort" />
                  {!change && <p className="options-name">{options.value}</p>}
                </button>
              );
            })}
          </div>
        </div>
        <div className="add-todo-container">
          <button className="add-todo-button">
            <img src={AddIcon} alt="add" className="add-icon" />
          </button>
          <input
            type="text"
            className="add-todo-input"
            placeholder="Add a todo"
            ref={taskName}
            onFocus={handleShow}
            onKeyUp={(value) => handleKeyEnter(value)}
          />
        </div>
        {showOptions && (
          <div className="add-todo-options">
            <div className="todo-settings">
              {displaySettings.map((value, key) => {
                return (
                  <button className="add-todo-button">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="add-icon"
                    />
                  </button>
                );
              })}
            </div>
            <button className="add-todo-button-other" onClick={handleSubmit}>
              Add
            </button>
          </div>
        )}
        <div className="todos-display-container">
          {inCompletedTodo?.map((value, key) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="todo-display-container" key={key}>
                  <button className="add-todo-button">
                    <img
                      className="add-icon"
                      src={CircleIcon}
                      alt="circleicon"
                      onClick={() => handleComplete(value.id)}
                    />
                  </button>
                  <div
                    className="todo-name"
                    onClick={() => {
                      handleDo(true);
                      handlePass(value);
                    }}
                  >
                    {value?.task}
                  </div>
                  <button className="todo-display-container-duedate">
                    <DatePicker
                      selected={value?.dueDate}
                      className="duedate-field"
                      onChange={(date) => handleTodoDate(date, value.id)}
                    />
                  </button>
                  <button className="add-todo-button">
                    <img
                      src={value.isImportant ? StarFilled : StarIcon}
                      alt={"star"}
                      className="add-icon"
                      onClick={() => handleChangeImportant(value.id)}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
          {completedTodo?.length ? (
            <div className="add-todo-container completed-container">
              <button className="add-todo-button">
                <img
                  src={(showCompletedTodo && DownArrow) || UpArrow}
                  alt="add"
                  className="add-icon"
                  onClick={handleToggleCompletedTodo}
                />
              </button>
              <p className="completed">Completed</p>
              <div className="todos-count">{completedTodo?.length}</div>
            </div>
          ) : (
            <></>
          )}
          {completedTodo?.map((value, key) => {
            return (
              showCompletedTodo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="todo-display-container" key={key}>
                    <button className="add-todo-button">
                      <img
                        className="add-icon"
                        src={CheckMarkIcon}
                        alt="checkmarkicon"
                        onClick={() => handleComplete(value?.id)}
                      />
                    </button>
                    <div
                      className="todo-name completed-todo"
                      onClick={() => {
                        handleDo(true);
                        handlePass(value);
                      }}
                    >
                      {value?.task}
                    </div>
                    <button className="todo-display-container-duedate">
                      <DatePicker
                        selected={value?.dueDate}
                        className="duedate-field"
                        onChange={(date) => handleTodoDate(date, value.id)}
                      />
                    </button>
                    <button className="add-todo-button">
                      <img
                        src={value.isImportant ? StarFilled : StarIcon}
                        alt={"star"}
                        className="add-icon"
                        onClick={() => handleChangeImportant(value.id)}
                      />
                    </button>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </div>
      {change && (
        <ModifyTodo
          change={change}
          handleChange={handleDo}
          list={list}
          modifiedTodo={modifiedTodo}
          handleChangeImportant={handleChangeImportant}
        />
      )}
    </>
  );
};
export default TodoBody;
