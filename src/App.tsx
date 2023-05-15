import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import './App.css';
import signin  from "./images/signin.png";
import { Link } from 'react-router-dom';

function App() {
    const [email , setEmail]=useState("johndoe@jnkmail.com");
    const [password , setPassword]=useState("● ● ● ● ● ● ●");

    const login=(event:any)=>{
      event.preventDefault();
    }

  return (
 
        <div className="signIn">
      <div className='signIn_details'>
        <header>
          <h3 className='welcome'>Welcome back</h3>
          <p className='p'>Please enter your details</p>
        </header>
        <div className='loginDetails'>
          <label className='labels'>Email</label>
          <input placeholder={email}  onChange={(e)=>setEmail(e.target.value)}></input>
          <label className='labels'>Password</label>
          <input type='password'placeholder={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <p>Forgot   
            {/* <Link to='/Reset' className='link'> */}
              <span> password</span>
              {/* </Link> */}
              </p>
        </div>
        <Link to='/Rate' className='link'>
           <button type="submit" /*onClick={login}*/ className='sign_in'>Sign in</button>
        </Link>
        <div className='signupOption'>
         <p>Don't have an account?  
          <Link to='/Signup' className='link'><span>Sign up</span></Link>
          <br/><br/><p>or sign in with:</p><br></br>
          <FcGoogle className='icon'/><FaFacebook className='icon faceBook'/>
          </p>
        </div>
      </div>
      <div className='imageContainer' id='imageCont'>
        <img alt='background' className='amalitech'src={signin}/>
        <div className='logoSign'>
                <label className='logoname'>AMALIT<div className='signupLogo'></div>CH</label>
                <p className='logotext'>Currency Converter</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
