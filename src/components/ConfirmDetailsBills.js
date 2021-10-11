import React from 'react'
import card from "../assets/img/card.svg"
import ussd from "../assets/img/ussd.svg"
import bank from "../assets/img/bank.svg"

const ConfrimDetailsBills = (props) => {
    return (
      <>
                         <div className="bills-row">
               <div className="bills-col">
               <img src={props.providerImage} alt="" className="form-paybills"/>
               <div style={{color:"#5B6E89"}}>Ibadan Electric</div>
               </div>
               <div className="bills-col">
                <div onClick={props.goToFormScreen} style={{cursor:'pointer',fontSize:'13px',display:'inline-block',borderBottom:'2px solid #DE7949'}}>Back</div> 
                 </div>

              </div>

              <div className="bills-divider"></div>

              <div className="bills-row">
               <div className="bills-col">
               <div className="rand-header">John Doe</div>
               <div className="rand-sub">Prepaid Meter</div>
               </div>
              
                
               <div className="bills-col">
               <div className="rand-sub">Previous unit sold
               </div ><div className="rand-header">1.27</div>
               
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
              <div className="bills-info-block">
                   <div className="bills-info-label">Phone Number</div>
              <div className="bills-info-value">08082079883</div>
              </div>

              <div className="confirm-details-row">
               <div className="confirm-details-col border-right-style">
               <div className="bills-info-block">
                   <div className="bills-info-label">Email Address</div>
              <div className="bills-info-value">john@gmail.com</div>
              </div>
              </div>
              <div className="confirm-details-col border-right-style padding-style">
               <div className="bills-info-block">
                   <div className="bills-info-label">Amount</div>
              <div className="bills-info-value">20,000</div>
              </div>
              </div>
              <div className="confirm-details-col padding-style">
               <div className="bills-info-block">
                   <div className="bills-info-label">Units</div>
              <div className="bills-info-value">124.4</div>
              </div>
              </div>
              </div>
              </div>

              <div style={{color:'grey', marginTop:"20px"}} className="rand-header">Complete payment with</div>
                
                <div className="confirm-button-row">
                    <div className="confirm-button-col">
                        <div className="confirm-button">
                            <div> <img src={card} alt="" className="confirm-button-image"/></div>
                            <div>Card</div>
                        </div>
                    </div>
                    <div className="confirm-button-col">
                        <div className="confirm-button">
                            <div> <img src={ussd} alt="" className="confirm-button-image"/></div>
                            <div>Ussd</div>
                        </div>
                    </div>
                    <div className="confirm-button-col">
                        <div className="confirm-button">
                            <div> <img src={bank} alt="" className="confirm-button-image"/></div>
                            <div>Bank</div>
                        </div>
                    </div>
                </div>
                       
      </>
    )
}

export default ConfrimDetailsBills;





  




