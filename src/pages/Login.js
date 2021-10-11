import React, { useState } from "react";
// import almost from "../assets/img/almost.svg";
import Arrows from "../assets/img/arrows.svg";
import { Link } from 'react-router-dom'
import "../assets/css/home.css";
import showpass from "../assets/img/showpass.svg";
import hidepass from "../assets/img/hidepass.svg";
import  "../assets/css/login.css";
import AppHeader from '../components/navbar.js';
// import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css"
import { AppFooter } from "../components/footer.js";
const Login = () => {

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div>
        <AppHeader></AppHeader>
      <div className="banner-picture">
        <div className="banner-cover">
          <div className="banner-writeup">
            <div className="banner-heading">
              <div className="banner-header">Hey There, Glad you are back</div>
              <div className="banner-sub">Lorem ipsum dolor sit amet,Aenean vel purus ligula,Lorem ipsum dolor sit amet,Aenean vel purus ligula</div>
            </div>
            <div className="banner-illustration">
              <img src={Arrows} alt="" className="banner-illus"/>
            </div>
          </div>
          <div className="banner-form">
            <div className="banner-form-div">
              <div className="banner-form-div-header">Hello</div>
              <div className="banner-form-div-header">Please Login</div>
              <br />
              <form>

                <div className="form-group mt-3">
                  <label
                    className="formlabel black-text"

                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                  />
                </div>{" "}
                <div className="form-group pwd-container mt-3">
                  <label
                    className="formlabel black-text"

                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    name="pwd"
                    placeholder=""
                    type={isRevealPwd ? "text" : "password"}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  <img
                    alt=""
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? hidepass : showpass}
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  />
                </div>
                
                <div className="center mt-5">
                  <Link to="dashboard/overview">
                 
                  <button
                    className="btn-home btn-join bold-text"
                    style={{ background:'#DE7949',border:'none', color:'white', width:'100%', padding: "10px 100px" }}
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  )
}

export default Login
