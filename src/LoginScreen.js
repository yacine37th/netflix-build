import React, { useState } from "react";
import SignIng from "./SignIng";
import "./g.css";
import "./Log.css";

function LoginScreen() {
  const [signing, setSignin] = useState(false);

  return (
    <div className="login">
      <div className="container">
        <div className="header">
          <div className="contents">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDpjrJdy6ABk3MIP_qjVF7xDT8YDAAFcZvAdyiLUe&s"
              alt=""
            />

            <button className="sign" onClick={()=>{setSignin(true)}}>Sign In</button>
          </div>
        </div>
        <div className="body">
          {signing ? (
          <SignIng />
         ): (
          <>
          <div className="body_contents">
            <h1>Unlimited films</h1>
            <div>
              <form>
                <input
                  className="email"
                  type="email"
                  placeholder="Enter your e-mail"
                />
                <button onClick={() => setSignin(true)}>GET STARTED</button>
              </form>
            </div>
          </div>
        </>
  )

         }
        
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
