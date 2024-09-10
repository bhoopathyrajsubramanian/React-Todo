import React from "react";
import { DisplayForModifyTodo } from "../../constant";
import { useEffect, useRef, useState } from "react";
import CheckMarkIcon from "../../assets/images/checkmark-circle.svg";
import StarIcon from "../../assets/images/star.svg";
import AddICon from "../../assets/images/add.svg";
import "./ModifyTodo.scss";
import DeleteIcon from "../../assets/images/delete.svg";
import ExitIcon from "../../assets/images/exit.svg";

const ModifyTodo = ({ handleChange }) => {
  const subTodoName = useRef("");
  const [subTodoList, setSubTodoList] = useState([]);
  const [subTodo, setSubTodo] = useState({});

  const handleKeyPress = (value) => {
    if (value.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (subTodoName.current.value !== "") {
      setSubTodo({
        name: subTodoName.current.value,
        id: subTodoList?.length,
        completed: false,
      });
    }
    subTodoName.current.value = "";
  };

  useEffect(() => {
    console.log(subTodo);
    if (subTodo?.name?.length > 0) {
      setSubTodoList((prev) => [subTodo, ...prev]);
    }
  }, [subTodo]);
  return (
    <div className="modify-todo-page">
      <div className="todo-body">
        <div className="todo-header-title">
          <img
            src={CheckMarkIcon}
            alt="click to complete the todo"
            className="todo-icon"
          />
          <button className="todo-name"></button>
          <img
            src={StarIcon}
            alt="click to mark its important"
            className="todo-icon"
          />
        </div>
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
        {subTodoList.map((value, key) => {
          return (
            <div className="todo-body-options" key={key}>
              <img
                src={CheckMarkIcon}
                alt={CheckMarkIcon}
                className="options-image"
              />
              <p className="options-name">{value.name}</p>
            </div>
          );
        })}

        {DisplayForModifyTodo.map((displayContent, key) => {
          return (
            <div className="todo-body-options" key={key}>
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
          onClick={handleChange}
        />
        <img
          src={DeleteIcon}
          alt="click to complete the todo"
          className="todo-icon"
        />
      </div>
    </div>
  );
};

export default ModifyTodo;
