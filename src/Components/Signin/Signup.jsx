import React from 'react'
import './Signin.css'
import sign from '../../assets/sign.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='main-container'>
     <div className='container'>
        <div className="title"><h2>Sign Up</h2></div>
        <div className="signin-form">
            <form>
            <span className='f-fata'>
                   <label for='username'>Username</label> 
                   <input type='text' placeholder='Enter your username'/>
                </span>
                <span className='f-fata'>
                   <label for='email'>Email</label> 
                   <input type='email' placeholder='Enter your email'/>
                </span>
                <span className='f-fata'>
                   <label for='Password'>Password</label> 
                   <input type='password' placeholder='Enter your password'/>
                </span>
               
                <button>SignUp</button>
            </form>
        </div>
        <div className="mooving-signup">
            <p>Allready you have account <Link to='/signin'>  <span>Signin</span></Link></p>
        </div>
    </div>
    <div className='page-imge'>
       <img src={sign} alt='s'/>
    </div>
   </div>
  )
}

export default Signup