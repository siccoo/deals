import React from "react";
import { Link } from "react-router-dom";
// import Socials from "./socials";
// import alert from "../assets/img/alert.png";
export const AppFooter = () => {
  return (
    <footer className="bg-dark">
      <div className="">
        <div
          className="space-top-2 space-bottom-1 space-bottom-lg-2 secondary-color"
          style={{ padding: "0 10px" }}
        >
          <div className="row justify-content-lg-between">
            <div className="col-md-">
              
            </div>
            <div className="col-md-3">
              <div className="mb-4">
                <h2 className="white-text">Contact Us</h2>
                <p className="white-text mt-4">
                  Lorem ipsum dolor sit amet, Aenean vel purus ligula
                </p>
              </div>
              {/* <!-- End Logo -->
            <!-- Nav Link --> */}
              <ul className="nav nav-sm nav-x-0 nav-white center">
                <li className="nav-item">
                  <a className="nav-link media" href=".">
                    <span className="media">
                      <span className="fas fa-location-arrow mt-1 mr-2 white-text"></span>
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link media" href="tel:1-062-109-9222">
                    <span className="media">
                      <span className="fas fa-phone-alt mt-1 mr-2 white-text"></span>
                    </span>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link media"
                    href="mailto:contactus@edulearn.com"
                  >
                    <span className="media">
                      <span className="fas fa-envelope-open mt-1 mr-2 white-text"></span>
                    </span>
                  </a>
                </li>
              </ul>
              {/* <Socials></Socials> */}
              <br />
              <br />
            </div>

            <div className="col-md-3">
              <h6 className="white-text">API</h6>

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item white-text">
                  <a className="nav-link  white-text" href=".">
                    IOS
                  </a>
                </li>
                <li className="nav-item white-text">
                  <a className="nav-link  white-text" href=".">
                    Android
                  </a>
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div className="col-md-3 ">
              <h6 className="white-text">Legal</h6>

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item white-text">
                  <Link className="nav-link  " to="/about">
                    Terms of Use
                  </Link>
                </li>
                <li className="nav-item white-text">
                  <Link className="nav-link " to="/faq">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <br />
              <br />
            </div>

            <div className="col-md-3 ">
              <h6 className="white-text">Get Help</h6>

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item white-text">
                  <a className="nav-link  " href=".">
                    Support
                  </a>
                </li>
              </ul>
              <br />
              <br />
            </div>
          </div>
        </div>

        <hr className="opacity-xs my-0 white-bkg " />
        <div className="secondary-color">
          <p
            className="d-none d-lg-block white-text"
            style={{ padding: "1rem 0" }}
          >
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <p className="d-lg-none white-text" style={{ padding: "1rem 0" }}>
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
