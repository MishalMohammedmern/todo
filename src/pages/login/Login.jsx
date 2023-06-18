import React, { useEffect, useState } from 'react'
import Logo from '../../components/Logo'
import "./login.css"
import { auth,provider } from '../../components/config'
import {signInWithPopup} from 'firebase/auth'
import Home from '../home/Home'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState('')
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate('/home')
        })
    }
    useEffect(() => {
      setValue(localStorage.getItem('email'))
      
    }, [])
    
  return (
    
    
    <div className='main'>
        <div className="left">
            <div className='logo'>
            <Logo/>
            </div>
            <div className='content'>
                <div className='head'>
                    <h3>Login</h3>
                </div>
                <div className='para'>
                    <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. </p>
                </div>
                <div className='button'>
                    

                    <button onClick={handleClick} className='button1'>
                        <div className='but'>
                        <div className='google_img'>
                        <img className='google_img1' src="/images/google.png" alt="" />
                        </div>
                        <div className='but_text'>
                        Sign in using google</div>
                        </div></button>

                </div>
            </div>
            
        </div>
        <div className="right">
            <img className='right_img' src="/images/left_img.png" alt=""  />
        </div>
      
    </div>

    
  )
}

export default Login
