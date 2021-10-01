import React from 'react'

export default function Form(props){
    return (
       <>
             <div className="content-form-div">
        <div>
          <form >
            <div className="i-power-form-rol">
              <div className="i-power-form-col">
                <div className="form-col-label">What is your <span className="form-col-spotlight">Meter Number</span> ? <span className="form-col-required">*</span></div><input type="text" className="i-power-form-textfield w-input" maxlength="256" name="field" data-name="Field" placeholder="Example Text" id="field" required=""/>
              </div>
              <div className="i-power-form-col _2"><label className="w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" value="Radio" className="w-form-formradioinput i-power-radio w-radio-input"/><span className="form-col-radio-text w-form-label">Add this Meter</span></label>
                <div className="i-power-some-text">This is some text inside of a div block.</div>
              </div>
            </div>
            <div className="i-power-form-rol">
              <div className="i-power-form-col">
                <div className="form-col-label">Select your <span className="form-col-spotlight">Service Disco </span> <span className="form-col-required">*</span></div><input type="text" className="i-power-form-textfield w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""/>
              </div>
              <div className="i-power-form-col _2"></div>
            </div>
            <div className="i-power-form-rol">
              <div className="i-power-form-col">
                <div className="form-col-label">What is your preferred <span className="form-col-spotlight">Phone Number</span> ? <span className="form-col-required">*</span></div><input type="text" className="i-power-form-textfield w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""/>
              </div>
              <div className="i-power-form-col _2"></div>
            </div>
            <div className="i-power-form-rol">
              <div className="i-power-form-col">
                <div className="form-col-label"><span className="form-col-spotlight">Amount</span> you are willing to charge<span className="form-col-required">*</span></div><input type="text" className="i-power-form-textfield w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""/>
                <div className="i-power-some-text">(Min amount N1000)</div>
              </div>
              <div className="i-power-form-col _2"></div>
            </div>
            <div className="i-power-form-rol">
              <div className="i-power-form-col i-btn">
                <div onClick={props.switchToSummary} className="i-power-button">Buy Unit</div>
                <div className="i-power-ouline-btn">Use Point</div>
              </div>
              <div className="i-power-form-col _2"></div>
            </div>
          </form>

        </div>
      </div>
       </>
    )
}
