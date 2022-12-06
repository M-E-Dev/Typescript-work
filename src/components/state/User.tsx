import { useState } from "react"

type AuthUser = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)     // logout yok ise tek tip belirleriz. user? gerek kalmaz

    const handleLogin = () => {
        setUser({
            name: "Harry",
            email: "hogwarts@mail.com"
        }) 
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleLogout} >Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>

    </div>
  )
}

export default User