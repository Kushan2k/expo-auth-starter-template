import { onAuthStateChanged } from "firebase/auth"
import { useContext, createContext, useState, useEffect } from "react"
import { auth } from "../utils/firebaseConfig"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setAuthenticated] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setAuthenticated(true)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setAuthenticated,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext)

  if (!value) {
    throw new Error("Must be called with in a component")
  }

  return value
}
