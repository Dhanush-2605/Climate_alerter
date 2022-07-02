import React from "react";
// import classes from "./login.module.css";
import classes from "./register.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const Register = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1>Register</h1>
        </div>

        <div className={classes.content}>
          <label>
            <PersonOutlineIcon style={{ fontSize: "35px",margin:"0px 30px" }} />
          </label>
          <input size="30" type="text"  autoFocus />
        </div>
        <div className={classes.content}>
          <label>
            <EmailIcon style={{ fontSize: "35px",margin:"0px 30px"  }} e />
          </label>
          <input size="30" type="password"  />
        </div>
        <div className={classes.content}>
          <label>
            <KeyIcon style={{ fontSize: "35px",margin:"0px 30px"  }} e />
          </label>
          <input size="30" type="password"  />
        </div>
        <div className={classes.content}>
          <label>
            <PhoneAndroidIcon style={{ fontSize: "35px",margin:"0px 30px"  }} e />
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

export default Register;