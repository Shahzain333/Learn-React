import './App.css'
import { Login } from './Components/Login'
import { AuthContextProvider, ThemeProvider, useAuth } from './Context/context'
import { Dashboard } from './Components/Dashboard'
import ThemeBtn from './Components/themeBtn'
import { useState, useEffect } from 'react'

function App() {
 
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actual Change in a theme

  useEffect(() => {
     
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

    <AuthContextProvider>
      
      <div className="flex flex-wrap min-h-screen items-center">
        
        <div className="w-full">
          
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Login />
            <Dashboard />
          </div>

        </div>
        
      </div>
      
      </AuthContextProvider>

      </ThemeProvider>

    
  )
}

export default App
