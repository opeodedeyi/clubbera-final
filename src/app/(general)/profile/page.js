import Header from "./Header";
import Style from "./Profile.module.css"
import Sidebar from "./Sidebar";
import ProfileTabs from "./ProfileTabs";

const Profile = () => {
    
  return (
    <div className={Style.profileContainer}>
      <Header />
      <div className={Style.profileDetailsContainer}>
        <Sidebar />
        <div className={Style.profileTabs}>
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
}

export default Profile;
