import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext.js'

export default function UserAccount() {
  const {user} = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="user-account">
      <h1 className="section-title">حساب کاربری من</h1>

      <div className="user-card">

        <div className="user-card-header">
          <div className="user-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="12" cy="9" r="3.5" />
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
          </div>

          <div className="user-name">
            {user.firstName} {user.lastName}
          </div>
        </div>

        <div className="user-card-details">
          <div className="user-detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>ali.mohammadi@gmail.com</span>
          </div>
          <div className="user-detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h18v14H3z" />
              <path d="M3 5l9 7 9-7" />
            </svg>
            <span>{user.phoneNumber}</span>
          </div>
        </div>

      </div>
    </div>
  )
}
