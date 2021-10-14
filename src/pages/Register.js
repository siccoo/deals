import React, { useState } from "react";
// import almost from "../assets/img/almost.svg";
import Arrows from "../assets/img/arrows.svg";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import showpass from "../assets/img/showpass.svg";
import hidepass from "../assets/img/hidepass.svg";
import "../assets/css/login.css";
import AppHeader from "../components/navbar.js";
// import { useHistory } from "react-router";
// import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css";
import { AppFooter } from "../components/footer.js";
import { useForm } from "../hooks/useForm";
import Loader from "../components/Loader";
import makeAPICall from "../utils/powerDealsApi";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  pin: "",
  pinConfirmation: "",
};

const Register = () => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { values, handleChange, setValues } = useForm(initialValues);

  const registerButton = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    const data = {
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
      phone_number: values.phoneNumber,
      password: values.password,
      password_confirmation: values.passwordConfirmation,
      pin: values.pin,
      pin_confirmation: values.pinConfirmation,
    };
    console.log(data);
    return makeAPICall({
      path: "user/create",
      payload: data,
      method: "POST",
    })
      .then((res) => {
        console.log(res);
        setIsButtonLoading(false);
      })
      .catch((err) => {
        setIsButtonLoading(false);
        // console.log(err.message)
      });

    // setValues({
    //   email: "",
    //   first_name: "",
    //   last_name: "",
    //   phone_number: "",
    //   password: "",
    //   password_confirmation: "",
    //   pin: "",
    //   pin_confirmation: "",
    // });
  };

  return (
    <div>
      <AppHeader></AppHeader>
      <div className="banner-picture">
        <div className="banner-cover">
          <div className="banner-writeup">
            <div className="banner-heading">
              <div className="banner-header">Hey There, Glad you are back</div>
              <div className="banner-sub">
                Lorem ipsum dolor sit amet,Aenean vel purus ligula,Lorem ipsum
                dolor sit amet,Aenean vel purus ligula
              </div>
            </div>
            <div className="banner-illustration">
              <img src={Arrows} alt="" className="banner-illus" />
            </div>
          </div>
          <div className="banner-form">
            <div className="banner-form-div-register">
              <div className="banner-form-div-header">Welcome,</div>
              <div className="banner-form-div-header">
                Please Fill This Form
              </div>
              <br />
              <form>
                <div className="form-group mt-3">
                  <label className="formlabel black-text">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    value={values.fullName}
                    onChange={handleChange}
                  />
                </div>{" "}
                <div className="form-group mt-3">
                  <label className="formlabel black-text">Phone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                </div>{" "}
                <div className="form-group mt-3">
                  <label className="formlabel black-text">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>{" "}
                <div className="form-group pwd-container mt-3">
                  <label className="formlabel black-text">Password</label>
                  <input
                    className="form-control"
                    name="pwd"
                    placeholder=""
                    type={isRevealPwd ? "text" : "password"}
                    value={pwd && values.password}
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
                    style={{ fontSize: "9px", textAlign: "right" }}
                  >
                    Password should be a minimum of 8 characters
                  </p>
                </div>
                <div className="center mt-5">
                  <Link to="dashboard/overview">
                    <button
                      className="btn-home btn-join bold-text"
                      style={{
                        background: "#DE7949",
                        border: "none",
                        color: "white !important",
                        width: "100%",
                        padding: "10px 100px",
                      }}
                      onClick={registerButton}
                    >
                      {isButtonLoading ? <Loader dark={false} /> : "Register"}
                    </button>
                  </Link>
                </div>
                <div className="form-group text-right">
                  Already registered?
                  <a href="/login"> Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  );
};

export default Register;
