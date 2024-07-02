import Header from "./Header";
import Style from "./Profile.module.css"
import Sidebar from "./Sidebar";
import Tabs from './Tabs';


const Profile = () => {
    
  return (
    <div className={Style.profileContainer}>
     <Header/>
      <div className={Style.profileDetailsContainer}>
        <Sidebar/>
        <div className={Style.profileTabs}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default Profile;
