import Style from "./Profile.module.css";
import { memberInformation } from "./ProfileData";
const Sidebar = () => {
  return (
    <>
      <div className={Style.profileDetails}>
        <div>
          <h4>Full Name</h4>
          <p>Opeyemi A.</p>
        </div>
        <div>
          <h4>Email Address</h4>
          <p>opeyemi@gmail.com</p>
        </div>
        <div>
          <h4>Location</h4>
          <p> United Kingdom</p>
        </div>
      </div>
      <div className={Style.memberWrapper}>
        <h4>Member information</h4>
        {memberInformation.map((member, memberIndex) => (
          <div key={memberIndex} className={Style.memberContainer}>
            {member.map((info, infoIndex) => (
              <div key={infoIndex} className={Style.infoBox}>
                <p>{info.label}</p>
                <p className={Style.infoValue}>{info.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
