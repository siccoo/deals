import React from "react";
import "../assets/css/home.css";
// import { useState } from "react";
// import { css } from "@emotion/react";
// import CircleLoader from "react-spinners/ClipLoader";
import Landing from "./Landing";
import Contactus from "../components/Contactus";
import Why from "../components/Why";
// import almost from "../assets/img/almost.svg";
// import ServiceCard from "../components/ServiceCard";

// @ts-ignore
//import { Fade } from "react-reveal/Fade";
import AppHeader from '../components/navbar.js';
import { AppFooter } from "../components/footer.js";
const Home = () => {
  //     const override = css`
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `;
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");
  
 


  return (
    <div>
        <AppHeader></AppHeader>
      <section className="landing">
        {/* <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader color={color} loading={loading} css={override} size={15} />
    </div> */}
    <Landing/>
        <div id="section10" className="demo is-hidden-mobile">
          <a href="#about">
            <span>
              {/* <small>Scroll Down</small> */}
            </span>
          </a>
        </div>
      </section>
      <Why />
      <Contactus />
      <AppFooter></AppFooter>
    </div>
  );
};

export default Home;
