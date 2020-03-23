import React, { useState, useContext } from 'react';
import InputItem from '../InputItem/InputItem';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../useAuth';



const SignUp = (props) => {
 
  const auth = useContext(UserContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // input field handler
  const onchangeHandler = e => {
    const {name, value} = e.target;
    if(name==='name') {
      setName(value)
    }    
    if(name==='email') {
      setEmail(value)
    }    
    if(name==='password') {
      setPassword(value)
    }    
    if(name==='confirmPassword') {
      setConfirmPassword(value)
    }    
  }

  // form submit handler

  const registerUser = e => {
    e.preventDefault()

    if(password === confirmPassword) {
      auth.registerUserWithEmailPassword(email, password, name)
      .then(res => {
        if(res) {
          props.history.push('/')
        }
      })
    } else {
      alert('Password should be match')
    }



  }

  


  return (
    <section className="sign-up">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-3 m-auto">
          <div className="sign-up-aria-logo py-5 m-auto">
            <img className="w-50 d-block m-auto" src="https://i.ibb.co/Snjf3fp/logo2.png" alt=""/>
          </div>
          <form onSubmit={registerUser}>
            <InputItem name="name" type="text" placeholder="Name" onchangeHandler={onchangeHandler} value={name} />
            <InputItem name="email" type="email" placeholder="Email" onchangeHandler={onchangeHandler} value={email} />
            <InputItem name="password" type="password" placeholder="Password" onchangeHandler={onchangeHandler} value={password} />
            <InputItem name="confirmPassword" type="password" placeholder="Confirm Password" onchangeHandler={onchangeHandler} value={confirmPassword} />
            <button type="submit" className="btn sign-up-btn w-100">Submit</button>
          </form>
          <p className="text-center py-2 has-account"><Link to="/login">Already have an account</Link></p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default SignUp;