import React from "react";
import { joinedGroups } from "./ProfileData";
import Style from "./JoinedGroup.module.css";

const JoineGroupsTab = () => {
  return (
    <div>
      <div className={Style.groupWrapper}>
        {joinedGroups.map((group, index) => (
          <div key={index} className={Style.groupCard}>
            <div className={Style.groupDate}>
              {" "}
              <h5>{group.date}</h5>
              <button>{group.menuIcon}</button>{" "}
            </div>
            <h4 className={Style.groupTitle}>{group.title}</h4>
            <div className={Style.groupLocation}>
              {" "}
              <p className={Style.locationIcon}>{group.locationIcon}</p>
              <p>{group.location}</p>{" "}
            </div>

            <p className={Style.groupDescription}>{group.description}</p>

            <div className={Style.groupTag}>
              {" "}
              <p
                className={`${Style.tag} ${
                  group.tag === "Public" ? Style.tagPublic : Style.tagPrivate
                }`}
              >
                {group.tag}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoineGroupsTab;
