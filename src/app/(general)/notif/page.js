"use client";
import React, { useState } from "react";
import Alert from "@/components/alert/alert";

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
        <Alert
          type="error"
          message="Your operation was not successful!"
          show={showNotification}
          onClose={handleCloseNotification}
        />
      )}
    </>
  );
};

export default Notif;
