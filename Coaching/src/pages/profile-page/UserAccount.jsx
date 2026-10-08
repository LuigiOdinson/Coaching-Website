import {useContext} from 'react'
import { UserContext } from '../../providers/UserContext.js'

export default function UserAccount() {
  const {user} = useContext(UserContext);

  return (
    <div className="user-account">
        <h1 class="section-title">حساب کاربری من</h1>

        <div class="user-row">

          <div class="user-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="12" cy="9" r="3.5" />
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
          </div>

          <div className="user-info">
            <div className="user-name">
              <span>{user.firstName} </span>
              <span>{user.lastName}</span>
            </div>
            <div class="user-contact">
              <span>sara.ahmadi@gmail.com</span>
              <span>{user.phoneNumber}</span>
            </div>
          </div>

        </div>

      </div>
  )
}
