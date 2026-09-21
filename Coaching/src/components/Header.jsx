import {useState} from 'react'
import { NavLink } from "react-router";
import "./Header.css"

export default function Header() {
  const [toggleOn, setToggleOn] = useState(false);

  const toggleButtonClicked = () => {
    setToggleOn(!toggleOn)
  }

  return (
    <div className="header">

      <div className="left-side">
        <button className="log-in-button">
          <p>ورود به حساب</p>
        </button>
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
