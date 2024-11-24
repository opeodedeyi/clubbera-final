"use client";

import { useState } from "react";
import style from "./HelpNavigation.module.css";
import EventHost from "../EventHost/EventHost";
import CommunityOrganizer from "../CommunityOrganizer/CommunityOrganizer";
import CommunityMember from "../CommunityMember/CommunityMember";
import Quests from "../Guests/Quests";


export default function HelpNavigation() {
  const [activeTab, setActiveTab] = useState("quests");

  const renderContent = () => {
    switch (activeTab) {
      case "quests":
        return <Quests/>
      case "eventHost":
        return <EventHost/>;
      case "communityOrganizer":
        return <CommunityOrganizer/>;
      case "communityMember":
        return <CommunityMember/>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <>
      <div className={style.helpNavigationContainer}>
        <div className={style.helpNavigation}>
          <div className={style.helpNavigationItems}>
            <div
              className={`${style.helpNavigationItem} ${
                activeTab === "quests" ? style.activeNavigationItem : ""
              }`}
              onClick={() => setActiveTab("quests")}
            >
              Quests
            </div>
            <div
              className={`${style.helpNavigationItem} ${
                activeTab === "eventHost" ? style.activeNavigationItem : ""
              }`}
              onClick={() => setActiveTab("eventHost")}
            >
              Event host
            </div>
            <div
              className={`${style.helpNavigationItem} ${
                activeTab === "communityOrganizer"
                  ? style.activeNavigationItem
                  : ""
              }`}
              onClick={() => setActiveTab("communityOrganizer")}
            >
              Community organizer
            </div>
            <div
              className={`${style.helpNavigationItem} ${
                activeTab === "communityMember"
                  ? style.activeNavigationItem
                  : ""
              }`}
              onClick={() => setActiveTab("communityMember")}
            >
              Community member
            </div>
          </div>
        </div>
        <div className={style.tabContent}>{renderContent()}</div>
      </div>
    </>
  );
}
