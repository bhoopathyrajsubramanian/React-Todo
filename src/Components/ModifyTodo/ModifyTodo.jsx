import React from "react";
import { DisplayForModifyTodo } from "../../constant";
import CheckMarkIcon from "../../assets/images/checkmark-circle.svg";
import StarIcon from "../../assets/images/star.svg";
import AddICon from "../../assets/images/add.svg";
import "./ModifyTodo.scss";

const ModifyTodo = () => {
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
          <input type="text" classname="add-sub-todo" placeholder="Add Steps" />
        </div>
        <div className="sub-todo-lists"></div>
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
          <input type="text" className="add-notes-field" />
        </div>
      </div>
      <div className="todo-footer"></div>
    </div>
  );
};

export default ModifyTodo;
