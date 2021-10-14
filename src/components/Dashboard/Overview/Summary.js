import React from "react";
import card from "../../../assets/img/card.svg";
import ussd from "../../../assets/img/ussd.svg";
import bank from "../../../assets/img/bank.svg";
import ibedc from "../../../assets/img/IBEDC.png";
import "../../../assets/css/summary.css";
export default function Summary() {
  return (
    <>
      <div className="content-form-div">
        <div>
          <form>
            <div className="i-power-form-rol">
              <div className="i-power-form-col">
                <div className="bills-2-info">
                  <div className="summary-heading">
                    <img src={ibedc} alt="" className="form-paybills-2" />
                    Ibadan Electric
                  </div>
                  <br />
                  <div className="confirm-details-row">
                    <div className="confirm-details-col border-right-style">
                      <div className="bills-2-info-block">
                        <div className="bills-2-info-label">Email Address</div>
                        <div className="bills-2-info-value">john@gmail.com</div>
                      </div>
                    </div>
                    <div className="confirm-details-col  padding-style">
                      <div className="bills-2-info-block">
                        <div className="bills-2-info-label">Unit</div>
                        <div className="bills-2-info-value">2.0</div>
                      </div>
                    </div>
                  </div>
                  <div className="bills-2-info-block">
                    <div className="bills-2-info-label">Metric Number</div>
                    <div className="bills-2-info-value">2u384722878248748</div>
                  </div>
                  <div className="bills-2-info-block">
                    <div className="bills-2-info-label">Address</div>
                    <div className="bills-2-info-value">Lagos, Nigeria</div>
                  </div>
                  <div className="bills-2-info-block">
                    <div className="bills-2-info-label">Phone Number</div>
                    <div className="bills-2-info-value">08082079883</div>
                  </div>
                </div>

                <div
                  style={{ color: "grey", marginTop: "20px" }}
                  className="rand-header-2"
                >
                  Please choose the preferred payment option
                </div>

                <div className="confirm-button-2-row">
                  <div className="confirm-button-2-col">
                    <div className="confirm-button-2">
                      <div>
                        {" "}
                        <img
                          src={card}
                          alt=""
                          className="confirm-button-2-image"
                        />
                      </div>
                      <div>Card</div>
                    </div>
                  </div>
                  <div className="confirm-button-2-col">
                    <div className="confirm-button-2">
                      <div>
                        {" "}
                        <img
                          src={ussd}
                          alt=""
                          className="confirm-button-2-image"
                        />
                      </div>
                      <div>Ussd</div>
                    </div>
                  </div>
                  <div className="confirm-button-2-col">
                    <div className="confirm-button-2">
                      <div>
                        {" "}
                        <img
                          src={bank}
                          alt=""
                          className="confirm-button-2-image"
                        />
                      </div>
                      <div>Bank</div>
                    </div>
                  </div>
                  <div className="confirm-button-2-col">
                    <div className="confirm-button-2">
                      <div>Use Point</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="i-power-form-col _2">
                <label className="w-radio">
                  <input
                    type="radio"
                    data-name="Radio"
                    id="radio"
                    name="radio"
                    value="Radio"
                    className="w-form-formradioinput i-power-radio w-radio-input"
                  />
                  <span className="form-col-radio-text w-form-label">
                    Add this Meter
                  </span>
                </label>
                <div className="i-power-some-text">
                  This is some text inside of a div block.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
