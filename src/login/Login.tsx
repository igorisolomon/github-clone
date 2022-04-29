import React from 'react';
import logo from "../assets/img/logo.svg";
import { Bttn } from '../common/button/Button';

import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="Login-container">
        <img src={logo} alt="logo" />
        <h1>Sign into GitHub</h1>
        <Bttn title="Signin with GitHub" />
      </div>
    </div>
  )
}

export default Login