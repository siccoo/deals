import React from "react";
import almost from "../assets/img/almost.svg";
// import Arrows from "../assets/img/arrows.svg";
import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css";
// import showpass from "../assets/img/showpass.svg";
// import hidepass from "../assets/img/hidepass.svg";
import  "../assets/css/bills.css";
// import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css"
import AppHeader from '../components/navbar.js';
import { AppFooter } from "../components/footer.js";

const Login = () => {

  // const [pwd, setPwd] = useState("");
  // const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div>
        <AppHeader></AppHeader>
      <div className="banner-picture-bills">
        <div className="banner-cover">
          <div className="banner-writeup">
            <div className="banner-heading">
              <div className="banner-header">Looking for a great value of electricity</div>
              <div className="banner-sub">Get value for your electricity purchases at all times, with no boundaries. </div>
            </div>
            <div className="banner-illustration">
              <img src={almost} alt="" className="banner-illus-bills"/>
            </div>
          </div>
          <div className="banner-form-bills">
          <ServiceCard />
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  )
}

export default Login
