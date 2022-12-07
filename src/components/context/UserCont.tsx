import { useState, useContext } from "react"
import { UserContext } from "./UserContext";

type AuthUser = {
    name: string;
    email: string;
}

const UserCont = () => {
  const userContext = useContext(UserContext)
    const handleLogin = () => {
      if (userContext) {
        userContext.setUser({
            name: "Harry",
            email: "hogwarts@mail.com"
        }) 
      }
    }
    const handleLogout = () => {
      if (userContext) {
        userContext.setUser(null) 
      }
    }
  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleLogout} >Logout</button>
        <div>User name is {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>

    </div>
  )
}

export default UserCont
