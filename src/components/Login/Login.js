import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";
import AboutHeader from "../About/AboutHeader";
import Footer from "../Layout/Footer";
import LoginContext from "../Context/LoginContext";

const Login = () => {
    const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  

  const loginCtx = useContext(LoginContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsLoading(true);
    let url;
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOcMkH-PILj4U16f59QHsgBQOhjs8Ao1Y';
    }else{
     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOcMkH-PILj4U16f59QHsgBQOhjs8Ao1Y';
    }
    
      fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
            return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            throw new Error(errorMessage)
          });
        }
      }).then((data)=>{

       loginCtx.login(data.idToken)
       navigate('/store')
      })
      .catch((err)=>{
       console.error('Error during authentication:', err);
        alert(err.message)
      })
    
  };

  return (
    <>
      <AboutHeader />
      <section className={classes.login}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required ref={passwordRef} />
          </div>
          <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login":"Create account"}</button>}
          {isLoading && <p style={{color:"white"}}>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};
export default Login;
