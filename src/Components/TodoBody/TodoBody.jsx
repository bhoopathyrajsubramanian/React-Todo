import { useEffect, useState } from "react"
import { displayOptions, displayType } from "../../constant"
import Menu from "../../Assets/menu-nav.svg"
import ThreeDots from "../../Assets/three-dots.svg"
import IdeaIcon from "../../Assets/bulb.svg"
import AddIcon from "../../Assets/add.svg"
import TodoIcon from "../../Assets/calender.svg"
import RepeatIcon from "../../Assets/repeat.svg"
import NotificationIcon from "../../Assets/notification.svg"
import StarIcon from "../../Assets/star.svg"
import "./TodoBody.scss"
import ModifyTodo from "../../ModifyTodo/ModifyTodo"
import { useLocation } from "react-router-dom"


const TodoBody = ({ handleChange, toggle, handleDo, change }) => {

  let dayArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
  let fullDate = new Date();
  let day = fullDate.getDay();
  let month = fullDate.getMonth();
  let date = fullDate.getDate();
  const [todo, setTodo] = useState();
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);

  let location = useLocation();
  let data = location.pathname 
  console.log(data)
  data = data.replace("%20"," ");
  data = data.replace("%20"," ");
  data = data.split(":").splice(1,1);
  console.log(data);

  const handleComplete = (id) => {

    setTodoList(todoList.map(todo =>  
      todo?.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo

    ))

    todoList.map((todo) => {
      if (todo?.isCompleted) {
        setCompletedTodo((prev) => [...prev, todo]);
      }
    })
  }

  const handleSubmit = () => {
    if (input?.length > 0) {
      setTodo({
        id: todoList.length,
        input,
        isCompleted: false,
        isImportant: false
      })
    }
    setInput("")
  }

  const handleKeyEnter = (e) => {
    console.log(e.code)
    if (e.code === "Enter") {
      handleSubmit();
    }
  }

  useEffect(() => {
    if (todo?.input?.length > 0) {
      setTodoList([...todoList, todo])
    }

  }, [todo])

  console.log(day, month, date);
  return (
    <>
      <div className={`todo-body ${change ? "content" : ""}`} >
        <div className="todo-body-header">
          <div className={toggle ? `todo-display-content-others` : "todo-display-content"}>
            <button className="button-menu" onClick={handleChange}><img src={Menu} alt="menu icon" className="menu-icon" /></button>
            <p className="todo-display-name">{data? data: "My Day"}</p>
            <button className="button-menu"><img className="menu-icon" src={ThreeDots} alt="threedots" />
            </button>
            {displayType.map((button) => {
              return (<button className="button-menu-order"><img className="menu-icon" src={button.image} alt={button.value} />
                <p className="todo-display-text">{button.value}</p>
              </button>
              )
            })}
          </div>
          <div className={toggle ? "todo-display-others" : "todo-display-options"}>
            {displayOptions.map((options) => {
              return (
                <button className="button-menu-options"><img className="menu-icon" src={options.image} alt="sort" />
                  {!change ? <p className="options-name">{options.value}</p> : <></>}
                </button>
              )
            })}
          </div>
        </div>
        <div className="add-todo-container">
          <button className="add-todo-button">
            <img src={AddIcon} alt="add" className="add-icon" />
          </button>
          <input type="text" className="add-todo-input" placeholder="Add a todo" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => handleKeyEnter(e)} />
        </div>
        <div className="add-todo-options">
          <button className="add-todo-button">
            <img src={TodoIcon} alt="todo" className="add-icon" />
          </button>
          <button className="add-todo-button">
            <img src={NotificationIcon} alt="notification" className="add-icon" />
          </button>
          <button className="add-todo-button">
            <img src={RepeatIcon} alt="repeat" className="add-icon" />
          </button>
          <button className="add-todo-button-other" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <div className="todos-display-container">
          {todoList.map((value) => {
            return (
              !value.isCompleted ?
                <div className="todo-display-container">
                  <button className="add-todo-button"><img className="add-icon" src={IdeaIcon} onClick={() => handleComplete(value.id)} /></button>
                  <div className="todo-name" onClick={handleDo}>{value?.input}</div>
                  <button className="add-todo-button"><img src={StarIcon} alt={"star"} className="add-icon" /></button>
                </div> : <div></div>
            )
          })}
          <div className="add-todo-container completed-container">
            <button className="add-todo-button">
              <img src={AddIcon} alt="add" className="add-icon" />
            </button>
            <p className="completed">Completed</p>
          </div>
          {todoList.map((value) => {
            return (
              value.isCompleted ?
                <div className="todo-display-container">
                  <button className="add-todo-button"><img className="add-icon" src={IdeaIcon} onClick={() => handleComplete(value.id)} /></button>
                  <div className="todo-name completed-todo" onClick={handleDo}>{value?.input}</div>
                  <button className="add-todo-button"><img src={StarIcon} alt={"star"} className="add-icon" /></button>
                </div> : <div></div>
            )
          })}

        </div>

      </div>
      {change ? <ModifyTodo /> : <div></div>}
    </>
  )
}
export default TodoBody;