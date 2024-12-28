import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
//import { Header, Footer } from './components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  //console.log(import.meta.env.VITE_APPWRITE_URL)

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    
    authService.getCurrentUser()
    .then( (userData) => {
      
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }

    })
    .catch((error) => {
      console.log('App :: useEffect :: error ', error)
    })
    .finally( () => {
      setLoading(false);
    })
  
  }, [])

  return !loading ? (
    
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    
    </div>

  ) : null

  // if (loading) {
  //    return (
  //     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    
  //       <div className='w-full block'>
  //         <Header />
  //         <main>
  //           TODO {/* <Outlet /> */}
  //         </main>
  //         <Footer />
  //      </div>
  
  //     </div>)
  // } else {
  //   return null
  // }

}

export default App
