'use client'
 
import { createContext } from 'react'
import { useState, useCallback } from 'react';

export const authContext = createContext({
    idLoggedin:false,
    login: () =>{

    },
    logout: () =>{

    }
})

export default function AuthProvider({ children }) {
    const [isLoggedIn,setIsLoggedIn] =useState(false);
    const login = useCallback(()=>{
      setIsLoggedIn(true);
    },[])
    const logout = useCallback(()=>{
      setIsLoggedIn(false);
    },[])

    return (
        <authContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout: logout}}>
            {children}
        </authContext.Provider>
    )
   
  }