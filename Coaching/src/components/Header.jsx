import {useState, useContext} from 'react'
import { NavLink } from "react-router";
import { UserContext } from '../providers/UserContext.js';
import "./Header.css"

export default function Header() {
  const [toggleOn, setToggleOn] = useState(false);
  const {user} = useContext(UserContext);

  const toggleButtonClicked = () => {
    setToggleOn(!toggleOn)
  }

  return (
    <div className="header">

      <div className="left-side">
        {user
          ? <NavLink to={"/profile"} className="header-profile">
              <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="9" r="3.5" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
              </svg>
              <div className="header-username">
                <span>{user.firstName} </span>
                <span>{user.lastName}</span>
              </div>
            </NavLink> 

          : <button className="button log-in-button">ورود به حساب</button>
        }
        
      </div>

      <div className={`header-nav ${toggleOn ? 'toggleOn' : ''}`}>
        <NavLink to={"/"} className="header-link">
          <p>دوره‌های برگزار شده</p>
        </NavLink>

        <NavLink to={"/"} className="header-link">
          <p>درباره من</p>
        </NavLink>

        <NavLink to={"/services"} className="header-link">
          <p>سرویس‌ها</p>
        </NavLink>

        <NavLink to={"/"} className="header-link">
          <p>خانه</p>
        </NavLink>
      </div>

      <button className="hamburger-menu-icon" onClick={toggleButtonClicked}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}
