import Style from "./Profile.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
const Header = () => {
  return (
    <div className={Style.profileHeader}>
      <div className={Style.profileNameContainer}>
        <div className={Style.profileNameInitals}>
          <p>OA</p>
        </div>
        <div className={Style.profileName}>
          <h4>Opeyemi A.</h4>
          <p>
            <span className={Style.profileIcon}>
              <HiOutlineLocationMarker />
            </span>
            London, United Kingdom
          </p>
        </div>
      </div>
      <div className={Style.profileButton}>
        <CustomButton>Edit profile</CustomButton>
      </div>
    </div>
  );
};

export default Header;
