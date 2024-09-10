import { navbarContent } from "../../constant.js";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "../../assets/images/menu-nav.svg";
import CalendarIcon from "../../assets/images/todo-calender.svg";
import MailIcon from "../../assets/images/email.svg";
import AddFileIcon from "../../assets/images/addfile.svg";
import TwoUserIcon from "../../assets/images/two-user.svg";
import TodoIcon from "../../assets/images/checkmarkp.svg";
import PageIcon from "../../assets/images/page.svg";
import AddIcon from "../../assets/images/add.svg";
import ListIcon from "../../assets/images/queue.svg";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ handleChange, toggle, handleCreatePage }) => {
  const [active, setActive] = useState("");
  const handleChangeClass = (className) => {
    setActive(className);
  };
  const todoName = useRef("");
  const [groupName, setGroupName] = useState([]);
  const [listName, setListName] = useState({});
  const navigate = useNavigate();

  const handleKeyPress = (value) => {
    if (value.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (todoName.current.value !== "") {
      setListName({
        id: groupName.length,
        name: todoName.current.value,
        completedTodo: [],
        inCompletedTodo: [],
      });
    }
    todoName.current.value = "";
  };

  useEffect(() => {
    if (listName.name?.length > 0) {
      setGroupName((prev) => [listName, ...prev]);
      handleCreatePage(listName);
      navigate(`/:${listName.name}`);
    }
  }, [listName]);

  return (
    <>
      {toggle && (
        <div className="navbar">
          <button className="navbar-header" onClick={handleChange}>
            <img src={MenuIcon} className="navbar-toggle-icon" alt="Menu" />
          </button>
          <div className="navbar-content">
            {navbarContent.map((buttons, key) => {
              return (
                <button
                  className={`button-container ${
                    active === buttons.value ? "active" : ""
                  }`}
                  onClick={() => {
                    handleChangeClass(buttons.value);
                    navigate(`/:${buttons.value}`);
                  }}
                  key={key}
                >
                  <img
                    src={buttons?.Image}
                    alt={buttons?.value}
                    className="navbar-toggle-icon"
                  />
                  <div className="button-values">{buttons?.value}</div>
                </button>
              );
            })}
          </div>
          <div className="navbar-divider"></div>
          <div className="navbar-list">
            {groupName.map((value, key) => {
              return (
                <button
                  className={`button-container ${
                    active === value.name ? "active" : ""
                  }`}
                  onClick={() => {
                    handleChangeClass(value.name);
                    navigate(`/:${value.name}`);
                  }}
                  key={key}
                >
                  <img
                    src={ListIcon}
                    alt="group-list"
                    className="navbar-toggle-icon"
                  />
                  <div className="button-values">{value?.name}</div>
                </button>
              );
            })}
            <div className="navbar-add-list">
              <div className="input-list-container">
                <img src={AddIcon} alt="add" />
                <input
                  type="text"
                  ref={todoName}
                  className="navbar-list-input"
                  onKeyUp={(keyValue) => handleKeyPress(keyValue)}
                />
              </div>
              <button className="navbar-list-add">
                <img
                  src={PageIcon}
                  alt="mailicon"
                  className="navbar-toggle-icon"
                />
              </button>
            </div>
          </div>
          <div className="navbar-footer">
            <button className="navbar-footer-button">
              <img
                src={MailIcon}
                alt="mailicon"
                className="navbar-toggle-mail"
              />
            </button>
            <button className="navbar-footer-button">
              <img
                src={CalendarIcon}
                alt="calendericon"
                className="navbar-toggle-icon"
              />
            </button>
            <button className="navbar-footer-button">
              <img
                src={TwoUserIcon}
                alt="twousericon"
                className="navbar-toggle-icon"
              />
            </button>
            <button className="navbar-footer-button">
              <img
                src={AddFileIcon}
                alt="addfileicon"
                className="navbar-toggle-icon"
              />
            </button>
            <button className="navbar-footer-button">
              <img
                src={TodoIcon}
                alt="todoicon"
                className="navbar-toggle-icon"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
