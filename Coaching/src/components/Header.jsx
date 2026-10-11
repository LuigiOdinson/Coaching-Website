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
              <svg className="user-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <title>profile</title><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"/></g>
              </svg>
              <div>
                <span>{user.firstName} </span>
                <span>{user.lastName}</span>
              </div>
            </NavLink> 

          : <button className="log-in-button">ورود به حساب</button>
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
