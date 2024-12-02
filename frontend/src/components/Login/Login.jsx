import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    //current state
    const [currState,setCurrState] = useState('Login')
  return (
    <div className='login'>
        <form  className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

            </div>

            <div className="login-inputs">
                {currState==="Login"?<></> : <input type="text" placeholder='Your Name' required />}

                {/*currState === "Login"
                    If true: Render an empty fragment <></> (nothing will be displayed).
                    If false (currState === "Sign Up"): Render an <input> element for the "Name". */}


                <input type="text" placeholder='Your Email' required />
                <input type="text" placeholder='Password' required />

            </div>

            <button>{currState==="Sign Up" ? "Create a account" : "Login"} </button>  
            
            {/* currState === "Sign Up":
                If true: The button displays "Create a account".
                If false: The button displays "Login"*/ }


            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing I agree to the terms of use & Privacy Policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account  <span onClick={()=>setCurrState ("Sign Up")} > Click here</span></p>
            :<p>Already have an account ? <span onClick={()=>setCurrState("Login")} >Login here</span></p>
            }
            


        </form>

    </div>
  )
}

export default Login