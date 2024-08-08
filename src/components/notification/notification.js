import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";
import styles from "./notification.module.css"

const Notification = ({ type, message, show, duration = 5000, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const icon = () => {
    switch (type) {
      case "success":
        return (
          <FaCheckCircle className={styles.icon} style={{ color: "#38a169" }} />
        );
      case "error":
        return (
          <IoAlertCircle className={styles.icon} style={{ color: "#e53e3e" }} />
        );
      case "warning":
        return (
          <FaCircleExclamation
            className={styles.icon}
            style={{ color: "#d69e2e" }}
          />
        );
      case "info":
        return (
          <IoMdInformationCircle
            className={styles.icon}
            style={{ color: "#3182ce" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.notificationContainer} ${styles[`alert-${type}`]} ${
        show ? styles.show : ""
      } ${styles.shadowLg}`}
    >
      {icon()}
      <span>{message}</span>
    </div>
  );
};

export default Notification;
