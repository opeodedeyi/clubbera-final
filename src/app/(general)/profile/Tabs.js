"use client";
import React, { useState } from "react";
import style from "./Tabs.module.css";
import FormedGroupsTab from "./FormedGroupsTab";
import JoineGroupsTab from "./JoineGroupsTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.tabs}>
          <button
            className={`${style.tabButton} ${
              activeTab === 1 ? style.active : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Joined groups
            {activeTab === 1 && <div className={style.underline}></div>}
          </button>
          <button
            className={`${style.tabButton} ${
              activeTab === 2 ? style.active : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Formed groups
            {activeTab === 2 && <div className={style.underline}></div>}
          </button>
        </div>
        <div>
          {activeTab === 1 && (
            <div>
              <JoineGroupsTab />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <FormedGroupsTab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
