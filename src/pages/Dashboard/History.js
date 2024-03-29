import React from "react";
import "./dashboard.css";
import "./normalize.css";
import "./webflow.css";

import Topbar from '../../components/Dashboard/Misc/Topbar'
import Sidebar from '../../components/Dashboard/Misc/Sidebar'
// import Form from '../../components/Dashboard/Overview/Form'
// import Summary from '../../components/Dashboard/Overview/Summary'

const Overview = () => {

  // const [showForm, setShowForm] = useState(true)
  // const [showSummary, setShowSummary] = useState(false)

  // const switchToForm = () => {
  //   setShowForm(true)
  //   setShowSummary(false)
  // }

  // const switchToSummary = () => {
  //   setShowForm(false)
  //   setShowSummary(true)
  // }


  return (
    <div className="page-control">
 <Topbar/>
  <div className="i-dashboard-row">
<Sidebar/>
<div className="i-dashboard-content">
      <div className="history-heading">
    
        <div className="i-power-history-header">Transaction History</div>
        <div>
          <form>
              <input type="text" className="i-power-search-field w-input" placeholder="Search for Payment" id="name"/>
              </form>

        </div>
      </div>
      <div className="history-table">
      <table>

    <thead>
         <tr>
         <th><input type="checkbox" /></th>
    <th>Name</th>
    <th>Meter Number</th>
    <th>Address</th>
    <th>Unit</th>
    <th>Amount</th>
    <th>Method</th>
  </tr> 
    </thead>
<tbody>
  <tr>
  <td><input type="checkbox" /></td>
    <td>Alfred Akinola</td>
    <td>239238932989</td>
    <td>Lagos</td>
    <td>2.0</td>
    <td>N30,000</td>
    <td><div className="method-style">Card</div></td>
  </tr>
  <tr>
  <td><input type="checkbox" /></td>
    <td>Alfred Akinola</td>
    <td>239238932989</td>
    <td>Lagos</td>
    <td>2.0</td>
    <td>N30,000</td>
    <td><div className="method-style">Card</div></td>
  </tr>
  <tr>
  <td><input type="checkbox" /></td>
    <td>Alfred Akinola</td>
    <td>239238932989</td>
    <td>Lagos</td>
    <td>2.0</td>
    <td>N30,000</td>
    <td><div className="method-style">Card</div></td>
  </tr>
  <tr>
  <td><input type="checkbox" /></td>
    <td>Alfred Akinola</td>
    <td>239238932989</td>
    <td>Lagos</td>
    <td>2.0</td>
    <td>N30,000</td>
    <td><div className="method-style">Card</div></td>
  </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Overview;
