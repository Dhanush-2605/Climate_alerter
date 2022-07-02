import React from "react";
import classes from "./login.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1>Login</h1>
        </div>

        <div className={classes.content}>
          <label>
            <PersonOutlineIcon style={{ fontSize: "35px" }} />
          </label>
          <input size="30" type="text"  autoFocus />
        </div>
        <div className={classes.content}>
          <label>
            <KeyIcon style={{ fontSize: "35px" }} e />
          </label>
          <input size="30" type="password"  />
        </div>
        <div className={classes.button}>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
