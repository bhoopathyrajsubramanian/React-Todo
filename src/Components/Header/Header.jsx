import Menu from "../../assets/images/menu.svg";
import Search from "../../assets/images/search.svg";
import Question from "../../assets/images/question.svg";
import Trumpet from "../../assets/images/trumpet.svg";
import Settings from "../../assets/images/settings.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <div className="header-menu">
          <button className="button-header">
            <img src={Menu} alt="Menu" className="header-icon" />
          </button>
        </div>
        <div className="header-menu">
          <a href="#" className="header-todo-link">
            To Do
          </a>
        </div>
      </div>
      <div className="header-search">
        <div className="input-field">
          <img src={Search} alt="search-icon" className="search-icon" />
          <input type="text" className="header-input" />
        </div>
      </div>
      <div className="header-others">
        <button className="button-header-others">
          <img src={Settings} className="header-icon" />
        </button>
        <button className="button-header-others">
          <img src={Question} className="header-icon" />
        </button>
        <button className="button-header-others">
          <img src={Trumpet} className="header-icon settings" />
        </button>
        <div className="header-user">
          <button className="button-header-user">B</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
