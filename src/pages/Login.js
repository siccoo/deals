import React, { useState } from "react";
// import almost from "../assets/img/almost.svg";
import Arrows from "../assets/img/arrows.svg";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import showpass from "../assets/img/showpass.svg";
import hidepass from "../assets/img/hidepass.svg";
import "../assets/css/login.css";
import AppHeader from "../components/navbar.js";
import { useHistory } from "react-router";
// import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css";
import { AppFooter } from "../components/footer.js";
import {useForm} from "../hooks/useForm";
import Loader from "../components/Loader";
import makeAPICall from "../utils/powerDealsApi";
import { setAuth } from "../utils/constant";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { values, handleChange, setValues } = useForm(initialValues);
  const history = useHistory();

  const loginButton = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    const data = {
      email: values.email,
      password: values.password,
    };
    return makeAPICall({
      path: "user/login",
      payload: data,
      method: "POST",
    })
      .then((res) => {
        console.log(res);
        setIsButtonLoading(false);
        const authInfo = {
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          agent_id: res.data.agent_id,
          user_type: res.data.user_type,
          token: res.data.token,
        };
        setAuth(authInfo);
        // history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.message)
        setIsButtonLoading(false);
      });
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
            <div className="banner-form-div">
              <div className="banner-form-div-header">Hello</div>
              <div className="banner-form-div-header">Please Login</div>
              <br />
              <form>
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
                </div>
                <div className="form-group right">
                  <a href="/forgot_password" className="link-text">
                    {" "}
                    Forgot Password?
                  </a>
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
                      onClick={loginButton}
                    >
                      {isButtonLoading ? <Loader dark={false} /> : "Login"}
                    </button>
                  </Link>
                </div>
                <div className="form-group text-right">
                  Is it your first time here?
                  <a href="/register">
                    {" "}
                    Register
                  </a>
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

export default Login;
