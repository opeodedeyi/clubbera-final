import style from "./Navigation.module.css";


export default function Navigation({activeTab, handleTabClick}){
  return (
    <nav className={style.navigation}>
      <ul className={style.navigationList}>
          <li onClick={() => handleTabClick('basicInfo')} className={activeTab === 'basicInfo' ? style.activeNavigationItem : ''}>Basic info</li>
          <li onClick={() => handleTabClick('changePassword')} className={activeTab === 'changePassword' ? style.activeNavigationItem : ''}>Change password</li>
      </ul>
    </nav>
  );
};