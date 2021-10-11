import React, { useState, useEffect } from "react";
import almost from "../assets/img/almost.svg";
import "../assets/css/home.css";
import "../assets/css/paybills.css"
import EnterDetailsBills from '../components/EnterDetailsBills'
import ConfirmDetailsBills from '../components/ConfirmDetailsBills'
import {useParams} from 'react-router-dom'
import ibedc from "../assets/img/IBEDC.png"
import aedc from "../assets/img/AEDC.png"
import AppHeader from '../components/navbar.js';
import { AppFooter } from "../components/footer.js";
const PayBills = () => {

  let { id } = useParams();

  const [isfilledForm, setIsFilledForm] = useState(false);
  const [providerImage, setProviderImage] = useState();

  useEffect(() => { 

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

    const provider = providers.find((result) => result.id === Number(id)).img_src
    setProviderImage(provider)
  }, [id])

  function goToConfirmScreen(){
   setIsFilledForm(true)
  }
  function goToFormScreen(){
    setIsFilledForm(false)
   }

  return (
    <div>
        <AppHeader></AppHeader>
      <div className="banner-picture-paybills">
        <div className="banner-cover">
        <div className="banner-writeup">
            <div className="banner-heading">
              <div className="banner-header">Looking for a great value of electricity</div>
              <div className="banner-sub">Lorem ipsum dolor sit amet,Aenean vel purus ligula,Lorem ipsum dolor sit amet,Aenean vel purus ligula</div>
            </div>
            <div className="banner-illustration">
              <img src={almost} alt="" className="banner-illus-bills"/>
            </div>
          </div>
          <div className="banner-form">
            <div className="banner-form-div" style={{ height: 'auto'}}>
              {
                isfilledForm ?  <ConfirmDetailsBills providerImage={providerImage} goToFormScreen={goToFormScreen} /> : <EnterDetailsBills providerImage={providerImage} goToConfirmScreen = {goToConfirmScreen}/>
              }
               
               
            </div>
          </div>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  )
}

export default PayBills
