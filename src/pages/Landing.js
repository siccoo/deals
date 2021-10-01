import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
          
   <div className="meter-heading">
                        <h1 className="landing-heading">
                          Get More Units,
                          <br />
                          Pay Less!
                        </h1>
                        <p className="landing-text mt-3">
                          Lorem ipsum dolor sit amet,Aenean vel purus ligula
                        </p>
        
                        <div className="meter-row">
              
                          <div className="meter-col-1">
                            <input
                            type="text"
                            className="landing-input"
                            placeholder="Input Meter Number"
                          />
                          </div>
                          <div className="meter-col-2">
                           <Link role="button" to="/bills"><div className="landing-btn">Enter</div> </Link> 
                  
                        
                        </div>
                        </div>
                      </div>
       
    )
}

export default Landing
