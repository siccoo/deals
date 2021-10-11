import React from "react";
import "../assets/css/servicecard.css";
import {Link} from 'react-router-dom'
import ibedc from "../assets/img/IBEDC.png"
import aedc from "../assets/img/AEDC.png"
const ServiceCard = () => {

  const providers = [
    {
      'id': 1,
      'title': 'IBEDC',
      'img_src': ibedc
    },
    {
      'id': 2,
      'title': 'AEDC',
      'img_src': aedc
    },
    {
      'id': 3,
      'title': 'IBEDC',
      'img_src': ibedc
    },
    {
      'id': 4,
      'title': 'IBEDC',
      'img_src': ibedc
    }
  ]

  // const [ billers, setBillers] = useState(providers);
  return (
   <>
   {/* {

           updateBand ? <UpdateBand band = {band} updateBandList = {updateBandList} closeModal = {toggleUpdateBand}/> : null
              } */}
   
      <div className="card bill-card">
        
        <div className="container">
        <p className="card-head text-left mb-3">Please select Preferred Service</p>
          <div className="grid-parent">
     {
       providers.map( (item) => {

        return <div className="grid-child">
             <Link to={'/bills/' + item.id}>     <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={item.img_src} alt="" className="bills-img"/>
                </div>
                <div className="name black-text col-lg-6">{item.title}</div>
              </div>
            </Link>   </div>
       })
     }        
        
          </div>
          <p className="mt-5 text-left">Not sure which service provider?<span className="primary-text">Search</span></p>
        </div>
      </div>
      </>
  );
};

export default ServiceCard;
