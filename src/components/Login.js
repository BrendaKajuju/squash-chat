import React from 'react'
import { GoogleOutlined, FacebookOutlined} from "@ant-design/icons"
import "firebase/app";

import { auth } from '../firebase';

const Login = () => {
  return (
    <div id="login-page">
       <div id="login-card">
          <h2>Welcome To Squash-Chat!</h2>
              
          <div
           className="login-button google"
          >
            <GoogleOutlined /> Sign In with Google
          </div>

          <br /> <br />

          <div className="login-button facebook"
          >
            <FacebookOutlined /> Sign In with FaceBook
          </div>
       </div>
    </div>
  );
}
