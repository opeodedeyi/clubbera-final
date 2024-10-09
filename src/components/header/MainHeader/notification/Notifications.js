"use client";
import { useState } from "react";
import NotificationHeader from "./NotificationHeader";
import { useUser } from "@/app/context/UserContext";
import style from "./Notification.module.css";
import Image from "next/image";
import { notifs } from "./data";

const Notifications = () => {
  const { user } = useUser();
  const [notifications, setNotifications] = useState(notifs);
  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const handleNotificationClick = (id) => {
    setNotifications((prevNotifs) =>
      prevNotifs.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifs) =>
      prevNotifs.map((notif) => ({ ...notif, isRead: true }))
    );
  };
  return (
    <>
      <NotificationHeader
        unreadCount={unreadCount}
        markAllAsRead={markAllAsRead}
      />
      <div>
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={style.notificationItems}
            onClick={() => handleNotificationClick(notif.id)}
          >
            {!notif.isRead && <div className={style.unreadDot}></div>}
            <div className={style.headerProfilePhotoCardImg}>
              <Image
                src={user?.avatar || "/profile.png"}
                height={40}
                width={40}
                alt="profile photo"
              />
            </div>
            <div className={style.notificationDetails}>
              <p className={style.notificationDetailsName}>
                {notif.name} <span>{notif.activity}</span>
              </p>
              <p className={style.notificationDetailsClub}>{notif.club}</p>
              <p className={style.notificationDetails}>{notif.dayAndTime}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notifications;
