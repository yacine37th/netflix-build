import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handlShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`Nav ${show && "navColor"}`}>
      <div className="container">
        <img
          className="logo_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDpjrJdy6ABk3MIP_qjVF7xDT8YDAAFcZvAdyiLUe&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
