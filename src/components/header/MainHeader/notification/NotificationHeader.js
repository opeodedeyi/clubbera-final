import { FaRegCheckCircle } from "react-icons/fa";
import style from "./NotificationHeader.module.css";
const NotificationHeader = ({ unreadCount, markAllAsRead }) => {
  return (
    <>
      <div className={style.notifHeaderContainer}>
        <div className={style.notification}>
          <p>
            Notifications{" "}
            {unreadCount > 0 && (
              <span className={style.unreadCount}>({unreadCount})</span>
            )}
          </p>
        </div>
        <div className={style.markAllAsRead} onClick={markAllAsRead}>
          <p>Mark all as read</p>
          <span>
            <FaRegCheckCircle />
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationHeader;
