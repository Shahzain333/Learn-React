import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    username: 'Guest',
    login: () => {},
    logout: () => {},
})


export const AuthContextProvider = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState('Guest')

    function login(username,password) {
        
        if(username && password) {
            setUsername({username,password})
            setIsAuth(true)
        }else {
            console.log('wrong credentails!')
        }
        
    }

    function logout() {
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{username, isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
} 

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}



