import { Fragment } from "react";
import Signup from "../Signup";
import "./Login.css";

const Login = () => {
  return (
    <Fragment>
      <div className="login">
        <div className="boxes">
          <div className="titleBox">
            <h1 className="logo">facebook</h1>
            <p className="title">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="loginBox">
            <div className="loginBox2">
              <input type="text" placeholder="Email address or phone number" />
              <input type="password" placeholder="Password" />
              <button className="btnLogin">
                <strong>Log in</strong>
              </button>
              <a href="/" className="forget">
                Forgotten password?
              </a>
              <hr />
              <Signup />
            </div>
            <p className="createPage">
              <a href="/">
                <strong>Create a Page </strong>
              </a>
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
