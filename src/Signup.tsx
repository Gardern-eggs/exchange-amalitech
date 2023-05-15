import './signup.css';
import React from 'react'
import { Link } from 'react-router-dom';
import signin  from "./images/signin.png";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function Signup() {
 return (
    <div className="signUp">
        <div className='imageContainer'>
            <img alt='background' className='amalitech'src={signin}/>
            <div className='logoSign'>
            <Link to='/' className='link'>
                <label className='logonameSiginup'>AMALIT<div className='signupLogo'></div>CH</label>
                <p className='logotext'>Currency Converter</p>
            </Link>
            </div>
        </div>
        <div className='signUp_Details'>
            <div className='signUpDetails'>
                <label className='labels'>Name</label>
                <input type="text" placeholder='John Doe'></input><br/>
                <label className='labels'>Email</label><br/>
                <input type="text" placeholder='johndoe@jnkmail.com'></input><br/>
                <label className='labels'>Password</label><br/>
                <input placeholder='● ● ● ● ● ● ●'></input>
                <p>Forgot <Link to='/Reset' className='link'> <span>password?</span> </Link></p>
            </div>
            {/* <Link to='/' className='link'>  */}
             <button className='sign_up'>Sign up</button>
             {/* </Link> */}
            <div className='signupOption'>
                <p>Already have an account? <Link to='/' className='link'><span>Sign in</span></Link><br/><p>or sign up with:</p><br/><FcGoogle className='icon'/><FaFacebook className='icon faceBook'/></p>
            </div>
        </div>
    </div> 
 );
}

export default Signup;