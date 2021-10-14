import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Loader from "../components/Loader";
import makeAPICall from "../utils/powerDealsApi";

const initialValues = {
  meterNumber: "",
};

const Landing = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { values, handleChange, setValues } = useForm(initialValues);

  const enterMeterNumber = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);
    const data = {
      account: values.meterNumber,
    }

    return makeAPICall({
      path: "electricity/validation",
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
            <div className="landing-btn" 
              onClick={enterMeterNumber}
            >
              {isButtonLoading ? <Loader dark={false} /> : "Enter"}
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
