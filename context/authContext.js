import { useContext, createContext, useState } from "react"
import { auth } from "../utils/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native"
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setAuthenticated] = useState(undefined)

  const login = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredentials.user
      setUser(user)
      setAuthenticated(true)
    } catch (error) {
      throw new Error(error)
    }
  }

  const logout = async () => {
    try {
    } catch (error) {}
  }

  const register = async (email, password) => {
    try {
    } catch (error) {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
        register,
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
