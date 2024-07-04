import React from 'react'
import Tabs from "../../../components/tabs/Tabs";
import FormedGroupsTab from "./FormedGroupsTab";
import JoineGroupsTab from "./JoineGroupsTab";

const ProfileTabs = () => {
      const Grouptabs = [
        {
          index: 1,
          label: "Joined groups",
          content: <JoineGroupsTab />,
        },
        {
          index: 2,
          label: "Formed groups",
          content: <FormedGroupsTab />,
        },
      ];
  return (
    <div>
      <Tabs tabs={Grouptabs} />
    </div>
  );
}

export default ProfileTabs
