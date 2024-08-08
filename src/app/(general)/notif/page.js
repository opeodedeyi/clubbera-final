"use client";
import React, { useState } from "react";
import Notification from "@/components/notification/notification";

const Notif = () => {
  const [showNotification, setShowNotificattion] = useState(false);

  const handleShowNotification = () => {
    setShowNotificattion(true);
  };

  const handleCloseNotification = () => {
    setShowNotificattion(false);
  };

  return (
    <>
      <div style={{ padding: "80px 90px", textAlign: "center" }}>
        <button onClick={handleShowNotification}>Show Success Alert</button>
      </div>
      {showNotification && (
        <Notification
          type="error"
          message="Your operation was successful!"
          show={showNotification}
          onClose={handleCloseNotification}
        />
      )}
    </>
  );
};

export default Notif;
