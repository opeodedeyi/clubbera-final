"use client";
import React, { useState } from "react";
import style from "./Tabs.module.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].index);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.index}
              className={`${style.tabButton} ${
                activeTab === tab.index ? style.active : ""
              }`}
              onClick={() => handleTabClick(tab.index)}
            >
              {tab.label}
              {activeTab === tab.index && (
                <div className={style.underline}></div>
              )}
            </button>
          ))}
        </div>
        <div>
          {tabs.map(
            (tab) =>
              activeTab === tab.index && (
                <div key={tab.index}>{tab.content}</div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default Tabs;
