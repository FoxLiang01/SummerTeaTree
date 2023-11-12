"use client"

import './loginOrRegister.css'
import { useState } from 'react';

export default function LoginOrRegister({ onIsOnChange }){
    const [isOn, setIsOn] = useState(true);

    const handleLoginStatus = (status) =>{
        setIsOn(status);
        onIsOnChange(status)
    }

    return(
        <div style={{textAlign:'center',marginTop:"1rem"}}>
            <div className="switch-conatiner">
                <p className={`switch-text ${isOn? 'on' : ''}`} onClick={() => handleLoginStatus(true)}>
                    Login
                </p>
                <p className={`switch-text ${isOn? '' : 'on'}`} onClick={() => handleLoginStatus(false)}>
                    Register
                </p>
                <div className={`switch ${isOn? '' : 'on'}`}></div>
            </div>
            
        </div>
    );
}