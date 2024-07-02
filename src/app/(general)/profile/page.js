"use client"
import React,{useState} from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import LoggedInHeader from '@/components/header/MainHeader/LoggedInHeader'
import CustomButton from '@/components/utility/CustomButton/CustomButton';
import Style from "./Profile.module.css"
import Tabs from './Tabs';


const page = ({user}) => {
    
  return (
    <div className={Style.profileContainer}>
      <div>{/* <LoggedInHeader  /> */}</div>
      <div className={Style.profileHeader}>
        <div className={Style.profileNameContainer}>
          <div className={Style.profileNameInitals}>
            <p>OA</p>
          </div>

          <div className={Style.profileName}>
            <h4>Opeyemi A.</h4>
            <p>
              <span className={Style.profileIcon}>
                <HiOutlineLocationMarker />
              </span>
              London, United Kingdom
            </p>
          </div>
        </div>
        <div>
          {" "}
          <CustomButton>Create New</CustomButton>
        </div>
      </div>
      <div className={Style.profileDetailsContainer}>
        <div className={Style.profileDetails}>
          <div>
            <h4>Full Name</h4>
            <p>Opeyemi A.</p>
          </div>
          <div>
            <h4>Email Address</h4>
            <p>opeyemi@gmail.com</p>
          </div>
          <div>
            <h4>Location</h4>
            <p> United Kingdom</p>
          </div>
        </div>
        <div className={Style.profileTabs}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default page
