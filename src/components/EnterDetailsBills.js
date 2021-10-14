import React from "react";
import { Link } from "react-router-dom";
const EnterDetailsBills = (props) => {
  return (
    <>
      <div className="bills-row">
        <div className="bills-col">
          <img src={props.providerImage} alt="" className="form-paybills" />
          <div style={{ color: "#5B6E89" }}>Ibadan Electric</div>
        </div>
        <div className="bills-col">
          <Link to="/bills">
            {" "}
            <div
              style={{
                fontSize: "13px",
                display: "inline-block",
                borderBottom: "2px solid #DE7949",
              }}
            >
              Back
            </div>
          </Link>
        </div>
      </div>

      <div className="bills-divider"></div>

      <div className="bills-row">
        <div className="bills-col">
          <div className="rand-header">John Doe</div>
          <div className="rand-sub">Prepaid Meter</div>
        </div>
        <div className="bills-col">
          <div className="rand-sub">Previous unit sold</div>
          <div className="rand-header">1.27</div>
        </div>
      </div>

      <div className="bills-info">
        <div className="bills-info-block">
          <div className="bills-info-label">Metric Number</div>
          <div className="bills-info-value">2u384722878248748</div>
        </div>
        <div className="bills-info-block">
          <div className="bills-info-label">Address</div>
          <div className="bills-info-value">Lagos, Nigeria</div>
        </div>
      </div>

      <div className="bills-form-block">
        <div className="input-block-col">
          <div className="bills-info-label">Email</div>
          <input
            className="bills-input"
            style={{ width: "100%" }}
            type="text"
            placeholder="Type here"
          />
        </div>

        <div className="input-block-col-2">
          <div className="input-block-2">
            <div className="bills-info-label">Phone Number</div>
            <input
              className="bills-input"
              style={{ width: "100%" }}
              type="text"
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="input-block-col-3">
          <div className="input-block-3">
            <div className="bills-info-label">Amount</div>
            <input
              className="bills-input"
              style={{ width: "100%" }}
              type="text"
              placeholder="Type here"
            />
          </div>
          <div className="input-block-4">
            <div className="bills-info-label">Amount</div>
            <input
              className="bills-input-2"
              style={{ width: "100%" }}
              type="text"
              placeholder="Type here"
            />
          </div>
          <p
            className="black-text"
            style={{ fontSize: "8px", textAlign: "left" }}
          >
            Min of 1000
          </p>
        </div>
      </div>

      <div className="center mt-3">
        <button
          onClick={props.goToConfirmScreen}
          className="btn-home btn-join bold-text"
          style={{
            background: "#DE7949",
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px 100px",
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default EnterDetailsBills;
