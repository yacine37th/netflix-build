import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "./firebase";
import "./g.css";
import "./Log.css";
import "./singin.css";

function SignIng() {

  const emailref = useRef(null);
  const passwordref = useRef(null);

  const register = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth , emailref.current.value, passwordref.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error.message)
        // ..
      });
      emailref.current.value ="";
      passwordref.current.value ="";
  };

  return (
    <div className="signin">
      <div className="container">
        <div className="body_contents">
          <div>
            <form>
              <input
                ref={emailref}
                className="email"
                type="email"
                placeholder="Enter your e-mail"
              />
              <input
                ref={passwordref}
                className="email"
                type="password"
                placeholder="Enter your password"
              />
              <button className="sign" type="submit" onClick={register}>
                Sing In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIng;
