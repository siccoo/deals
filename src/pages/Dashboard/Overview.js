import React, {useState} from "react";
import "./dashboard.css";
import "./normalize.css";
import "./webflow.css";
import emoji from '../../assets/emoji.jpg'
import Topbar from '../../components/Dashboard/Misc/Topbar'
import Sidebar from '../../components/Dashboard/Misc/Sidebar'
import Form from '../../components/Dashboard/Overview/Form'
import Summary from '../../components/Dashboard/Overview/Summary'

const Overview = () => {

  const [showForm, setShowForm] = useState(true)
  const [showSummary, setShowSummary] = useState(false)

  const switchToForm = () => {
    setShowForm(true)
    setShowSummary(false)
  }

  const switchToSummary = () => {
    setShowForm(false)
    setShowSummary(true)
  }


  return (
    <div className="page-control">
 <Topbar/>
  <div className="i-dashboard-row">
<Sidebar/>
    <div className="i-dashboard-content">
      {
        showSummary ? <div onClick={switchToForm} className="i-power-back">Back</div> : null
      }
      
      <div className="content-heading">
        <div className="content-heading-col-1"><img src={emoji} loading="lazy" alt=""/></div>
        <div className="content-heading-col-2">
          <div className="heading-col-2-header"><span className="heading-col-2-span">Hi Nkem,</span> Lets get you power deals token real quick</div>
          <div className="heading-col-text">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
        </div>
      </div>
      <div className="i-power-sidebar-div mobile">
        <div className="i-poer-sidebar-div-header">Powerdeal ID <span className="id-span">1234567</span></div>
        <div className="sidebar-div-row">
          <div className="sidebar-div-col">
            <div className="sidebar-div-col-header">Total Balance</div>
            <div className="sidebar-div-col-value">N20,000</div>
          </div>
          <div className="sidebar-div-col">
            <div className="sidebar-div-col-header">Points</div>
            <div className="sidebar-div-col-value">N0.0</div>
          </div>
        </div>
      </div>
  {showForm ?  <Form switchToSummary = {switchToSummary} /> : null}
   
   {showSummary ? <Summary/> : null} 
    </div>
  </div>
    </div>
  );
};

export default Overview;
