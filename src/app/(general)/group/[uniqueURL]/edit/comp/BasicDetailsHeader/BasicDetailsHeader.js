import style from "./BasicDetailsHeader.module.css";
export default function BasicDetailsHeader({ group }) {
  return (
    <>
      <div className={style.basicDetails}>
        <div className={style.basicDetailsTop}>
          <h4>{group.title}</h4>
          <p className={style.basicDetailsTagline}>{group.tagline}</p>
        </div>
        <div className={style.basicDetailsBottom}>
          <div className={style.keyDetailItem}>
            <div className={style.keyDetailIconRounded}>
              <img src="/location.svg" alt="<" />
            </div>
            <div className={style.basicDetailsBottom}>
                <div className={style.keyDetailItem}>
                    <div className={style.keyDetailIconRounded}>
                        <img src="/location.svg" alt="<"/>
                    </div>
                    <span className={style.keyDetailItemText}>{group.location}</span>
                </div>
                <div className={style.keyDetailItem}>
                    <div className={style.keyDetailIconRounded}>
                        <img src="/people.svg" alt="<"/>
                    </div>
                    <span className={style.keyDetailItemText}>{`${group.member_count} member ${(group.member_count > 1) ? 's' : ''}`}</span>
                </div>
            </div>
            <span className={style.keyDetailItemText}>
              {group.member_count} members
            </span>
          </div>
          <p onClick={openModal}>share</p>
        </div>
      </div>
    </>
  );
}
