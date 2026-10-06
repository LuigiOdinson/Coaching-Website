import { useState } from 'react'
import { UserContext } from './UserContext'

const fakeUser = {
  id: 101,
  firstName: "علی",
  lastName: "محمدی",
  phoneNumber: "09121234567",
  // for front-end testing
  hasBoughtService: true
};

export default function UserProvider({ children }) {

  const [user, setUser] = useState(fakeUser);
  const [loading, setLoading] = useState(false);

  // when using real async function with backend
  // const login = async (email, password) => {
  //   const res = await axios.post(
  //     '/api/auth/login',
  //     { email, password },
  //     { withCredentials: true }
  //   );
  //   setUser(res.data.user);
  //   return res.data.user;      // so the caller can react if needed
  // };

  const login = () => {setUser(fakeUser)};
  const logout = () => {setUser(null)};

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
