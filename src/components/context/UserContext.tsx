import { createContext, useState } from "react";

export type AuthUser = {
    name: string;
    email: string;
}
export type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContexPovider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}