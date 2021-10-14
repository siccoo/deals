import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const initialValues = {
  meterNumber: "",
};

const Landing = () => {
  const { values, handleChange, setValues } = useForm(initialValues);

  const enterMeterNumber = (e) => {
    e.preventDefault();

  }

  return (
    <div className="meter-heading">
      <h1 className="landing-heading">
        Get More Units,
        <br />
        Pay Less!
      </h1>
      <p className="landing-text mt-3">
        Let’s help you get more on every purchase with just a little amount
      </p>

      <div className="meter-row">
        <div className="meter-col-1">
          <input
            type="text"
            className="landing-input"
            placeholder="Input Meter Number"
            value={values.meterNumber}
            onChange={handleChange}
          />
        </div>
        <div className="meter-col-2">
          <Link role="button" to="/bills">
            <div className="landing-btn" onClick={enterMeterNumber}>Enter</div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
