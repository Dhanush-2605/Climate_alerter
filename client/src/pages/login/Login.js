import React from "react";
import classes from "./login.module.css";
const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <div className={classes.title}>
      <h1>Login</h1>

      </div>
        
        
          <div className={classes.content}>
            <label>username :</label>
            <input  type="text" placeholder="username" autoFocus/>
          </div>
          <div className={classes.content}>
            <label>password :</label>
            <input type="password" placeholder="password" />
          </div>
          <div className={classes.button}>
            <button>Sign in</button>
          </div>
    
      </div>
    </div>
  );
};

export default Login;
