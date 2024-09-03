import { navbarContent } from "../../constant.js"
import { useEffect, useState } from "react"
import MenuIcon from "../../Assets/menu-nav.svg"
import CalendarIcon from "../../Assets/todo-calender.svg"
import MailIcon from '../../Assets/email.svg'
import AddFileIcon from '../../Assets/addfile.svg'
import TwoUserIcon from '../../Assets/two-user.svg'
import TodoIcon from '../../Assets/checkmark.svg'
import PageIcon from '../../Assets/page.svg'
import AddIcon from "../../Assets/add.svg"
import ListIcon from "../../Assets/list.svg"
import { useNavigate } from "react-router-dom"
import './Navbar.scss'

const Navbar = ({ handleChange, toggle }) => {
  const [active, setActive] = useState("");
  const handleChangeClass = (className) => {
    setActive(className)
  }
  const [input, setInput] = useState("");
  const [group, setGroup] = useState([]);
  const [listName, setListName] = useState({});
  const navigate = useNavigate();

  const handleKeyPress = (value) => {
    if (value.key === "Enter") {
      handleClick();
    }
  }

  const handleClick = () => {
    if (input !== "") {
      setListName({
        name: input,
        id: listName?.length,
        todolist: []
      })
    }
  }

  useEffect(() => {
    if (listName.name?.length > 0)
      setGroup((prev) => [listName, ...prev]);
  }, [listName])

  return (
    <>
      {toggle ? <div className="navbar">
        <button className="navbar-header" onClick={handleChange}>
          <img src={MenuIcon} className="navbar-toggle-icon" alt="Menu" />
        </button>
        <div className="navbar-content">
          {navbarContent.map(buttons => {
            return (
              <button className={`button-container ${active == buttons.value ? "active" : ''}`} onClick={() => {
                handleChangeClass(buttons.value)
                navigate(`/:${buttons.value}`)
              }}>
                <img src={buttons?.Image} alt={buttons?.value} className="navbar-toggle-icon" />
                <div className="button-values">{buttons?.value}</div>
              </button>
            )
          })}
        </div>
        <div className="navbar-divider"></div>
        <div className="navbar-list">
          {group.map((value) => {
            return (
              <button className={`button-container ${active == value ? "active" : ''}`} onClick={() => {
                handleChangeClass(value)
                navigate(`/:${value}`)
              }}>
                <img src={ListIcon} alt="group-list" className="navbar-toggle-icon" />
                <div className="button-values">{value?.name}</div>
              </button>
            )
          })}
          <div className="navbar-add-list">
            <div className="input-list-container">
              <img src={AddIcon} alt="add" className="add-icon" />
              <input type='text' value={input} className="navbar-list-input" onChange={(input) => setInput(input.target.value)} onKeyUp={(keyValue) => handleKeyPress(keyValue)} />
            </div>
            <button className="navbar-list-add">
              <img src={PageIcon} alt="mailicon" className="navbar-toggle-icon" />
            </button>
          </div>
        </div>
        <div className="navbar-footer">
          <button className="navbar-footer-button">
            <img src={MailIcon} alt="mailicon" className="navbar-toggle-icon" />
          </button>
          <button className="navbar-footer-button">
            <img src={CalendarIcon} alt="calendericon" className="navbar-toggle-icon" />
          </button>
          <button className="navbar-footer-button">
            <img src={TwoUserIcon} alt="twousericon" className="navbar-toggle-icon" />
          </button>
          <button className="navbar-footer-button">
            <img src={AddFileIcon} alt="addfileicon" className="navbar-toggle-icon" />
          </button>
          <button className="navbar-footer-button">
            <img src={TodoIcon} alt="todoicon" className="navbar-toggle-icon" />
          </button>
        </div>
      </div> : <div> </div>}
    </>
  )
}

export default Navbar;