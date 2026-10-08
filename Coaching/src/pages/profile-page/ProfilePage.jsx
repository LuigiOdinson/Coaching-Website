import {useContext} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserAccount from './UserAccount.jsx'
import "./ProfilePage.css"

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <title>My Profile</title>

      <Header />
      <UserAccount />
      <Footer />
    </div>
  )
}
