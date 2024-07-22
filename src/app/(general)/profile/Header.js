"use client";
import Style from "./Profile.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import EditProfile from "../editProfile/page";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={Style.profileHeader}>
      <div className={Style.profileNameContainer}>
        <div className={Style.profileNameInitals}>
          <p>OA</p>
        </div>
        <div className={Style.profileName}>
          <h4>Opeyemi A.</h4>
          <p className={Style.profileLocation}>
            <span className={Style.profileIcon}>
              <HiOutlineLocationMarker />
            </span>
            London, United Kingdom
          </p>
        </div>
      </div>
      <div className={Style.profileButton}>
        <CustomButton onClick={openModal}>Edit profile</CustomButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <EditProfile />
        </div>
      </Modal>
    </div>
  );
};

export default Header;
