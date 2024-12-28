import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// ------------ Mechanism of protect the rout and pages -----------------------------
export default function Protected({children, authentication = true}) {
    // Navigate work like Redirect the user in this function
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    // Check user login or not ask in store
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        
        //TODO: make it more easy to understand

        // if (authStatus === true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        // true && false !=== true The result is true = true
        if(authentication && authStatus !== authentication) {
            navigate('/login')
        // ( !true = false ) && true !=== true The result is false = false
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }

        setLoader(false)

    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{ children }</>
}


