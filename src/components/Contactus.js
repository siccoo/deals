import React, { useState } from "react";
import "../assets/css/home.css";
import showpass from "../assets/img/showpass.svg";
import hidepass from "../assets/img/hidepass.svg";
const Contactus = () => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <section style={{padding: "0"}} id="contact-section">
      <div className="banner center">
        <div className="banner-img-cover">
          <h1 style={{color:'white'}}>Register To Get FREE Units</h1>
        </div>
      </div>
      <div className="contactus container mt-4" style={{ paddingBottom: "30px"}}>
        <div className="center">
          <form className="col-lg-4 ">
            <p
              className=" black-text center"
              style={{ fontSize: "var(--smaller-font-size)" }}
            >
              Please fill in Details to get started
            </p>
            <div className="form-group mt-3">
              <label
                className="formlabel black-text"
              
              >
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder=""
              />
            </div>
            <div className="form-group mt-3">
              <label
                className="formlabel black-text"
               
              >
                PhoneNo
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder=""
              />
            </div>{" "}
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
              <p
                className="black-text"
                style={{ fontSize: "8px", textAlign: "left" }}
              >
                Password should be a minimum of 8 characters
              </p>
            </div>
            <div className="center mt-5">
              <button
                className="btn-home btn-join bold-text"
                style={{ padding: "10px 100px" }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
