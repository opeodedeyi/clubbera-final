import React from "react";
import { formedGroups } from "./ProfileData";
import Style from "./JoinedGroup.module.css";

const FormedGroupsTab = () => {
  return (
    <>
      <div className={Style.groupWrapper}>
        {formedGroups.map((group, index) => (
          <div key={index} className={Style.groupCard}>
            <div className={Style.groupDate}>
              <h5>{group.date}</h5>
              <button>{group.menuIcon}</button>
            </div>
            <h4 className={Style.groupTitle}>{group.title}</h4>
            <div className={Style.groupLocation}>
              <p className={Style.locationIcon}>{group.locationIcon}</p>
              <p>{group.location}</p>
            </div>
            <p className={Style.groupDescription}>{group.description}</p>
            <div className={Style.groupTag}>
              <p
                className={`${Style.tag} ${
                  group.tag === "Public" ? Style.tagPublic : Style.tagPrivate
                }`}
              >
                {group.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormedGroupsTab;
