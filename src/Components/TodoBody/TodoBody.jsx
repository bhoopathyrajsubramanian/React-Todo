import { useEffect, useState } from "react";
import { useRef } from "react";
import { displayOptions, displayType } from "../../constant";
import { useReducer } from "react";
import Menu from "../../assets/images/menu-nav.svg";
import ThreeDots from "../../assets/images/three-dots.svg";
import AddIcon from "../../assets/images/add.svg";
import TodoIcon from "../../assets/images/calender.svg";
import RepeatIcon from "../../assets/images/repeat.svg";
import NotificationIcon from "../../assets/images/notification.svg";
import StarIcon from "../../assets/images/star.svg";
import CircleIcon from "../../assets/images/circle-oval.svg";
import CheckMarkIcon from "../../assets/images/checkmarkadd.svg";
import "./TodoBody.scss";
import ModifyTodo from "../ModifyTodo/ModifyTodo";
import { useLocation } from "react-router-dom";

const TodoBody = ({ handleChange, toggle, handleDo, change }) => {
  let dayArray = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];
  let fullDate = new Date();
  let day = fullDate.getDay();
  let month = fullDate.getMonth();
  let date = fullDate.getDate();
  const [todo, setTodo] = useState();
  const taskName = useRef("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);

  let location = useLocation();
  let data = location.pathname;
  console.log(data);
  data = data.replace("%20", " ");
  data = data.replace("%20", " ");
  data = data.split(":").splice(1, 1);
  console.log(data);

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo?.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

    todoList.map((todo) => {
      if (todo?.isCompleted) {
        setCompletedTodo((prev) => [...prev, todo]);
      }
    });
  };

  const handleChangeImportant = (id) => {
    console.log("fdfds");
    setTodoList(
      todoList.map((todo) =>
        todo?.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
      )
    );
  };

  const handleSubmit = () => {
    if (taskName?.current?.value?.length > 0) {
      setTodo({
        id: todoList.length,
        task: taskName.current.value,
        isCompleted: false,
        isImportant: false,
      });
    }
    taskName.current.value = "";
  };

  const handleKeyEnter = (e) => {
    console.log(e.code);
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (todo?.task?.length > 0) {
      setTodoList([...todoList, todo]);
    }
  }, [todo]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <>
      <div className={`todo-body ${change ? "content" : ""}`}>
        <div className="todo-body-header">
          <div className="todo-display-content">
            <button className="button-menu" onClick={handleChange}>
              <img src={Menu} alt="menu icon" className="menu-icon" />
            </button>
            <p className="todo-display-name">{data ? data : "My Day"}</p>
            <button className="button-menu">
              <img className="menu-icon" src={ThreeDots} alt="threedots" />
            </button>
            {displayType.map((button, key) => {
              return (
                <button className="button-menu-order" key={key}>
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
            onKeyUp={(value) => handleKeyEnter(value)}
          />
        </div>
        <div className="add-todo-options">
          <button className="add-todo-button">
            <img src={TodoIcon} alt="todo" className="add-icon" />
          </button>
          <button className="add-todo-button">
            <img
              src={NotificationIcon}
              alt="notification"
              className="add-icon"
            />
          </button>
          <button className="add-todo-button">
            <img src={RepeatIcon} alt="repeat" className="add-icon" />
          </button>
          <button className="add-todo-button-other" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <div className="todos-display-container">
          {todoList.map((value, key) => {
            return (
              !value.isCompleted && (
                <div className="todo-display-container" key={key}>
                  <button className="add-todo-button">
                    <img
                      className="add-icon"
                      src={CircleIcon}
                      alt="circleicon"
                      onClick={() => handleComplete(value.id)}
                    />
                  </button>
                  <div className="todo-name" onClick={handleDo}>
                    {value?.task}
                  </div>
                  <button className="add-todo-button">
                    <img
                      src={StarIcon}
                      alt={"star"}
                      className="add-icon"
                      onClick={() => handleChangeImportant(value.id)}
                    />
                  </button>
                </div>
              )
            );
          })}
          <div className="add-todo-container completed-container">
            <button className="add-todo-button">
              <img src={AddIcon} alt="add" className="add-icon" />
            </button>
            <p className="completed">Completed</p>
          </div>
          {todoList.map((value, key) => {
            return (
              value.isCompleted && (
                <div className="todo-display-container" key={key}>
                  <button className="add-todo-button">
                    <img
                      className="add-icon"
                      src={CheckMarkIcon}
                      alt='checkmarkicon'
                      onClick={() => handleComplete(value.id)}
                    />
                  </button>
                  <div className="todo-name completed-todo" onClick={handleDo}>
                    {value?.task}
                  </div>
                  <button className="add-todo-button">
                    <img
                      src={StarIcon}
                      alt={"star"}
                      className="add-icon"
                      onClick={() => handleChangeImportant(value.id)}
                    />
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
      {change && <ModifyTodo />}
    </>
  );
};
export default TodoBody;
