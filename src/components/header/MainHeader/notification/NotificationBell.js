import { useState } from "react";
import Modal from "@/components/popup/Modal/Modal";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Notifications from "./Notifications";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <p onClick={openModal} style={{fontSize:"1.5rem", marginTop:"0.5rem"}}>
        <MdOutlineNotificationsActive />
      </p>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        maxWidth="440px"
        displayType="rightSide"
      >
        <Notifications />
      </Modal>
    </>
  );
};

export default NotificationBell;
