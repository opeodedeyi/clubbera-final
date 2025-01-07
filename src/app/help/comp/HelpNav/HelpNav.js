import style from "./HelpNav.module.css";

export default function HelpNav() {
  return (
    <div className={style.NavContainer}>
      <div className={style.banner}>
        <p className={style.breadcrumb}>
          Dashboard &gt;&gt; Community &gt;&gt; Help desk
        </p>
        <p className={style.navTitle}>HELP DESK</p>
        <p className={style.navDescription}>
          Discover local events that match your interests, from casual meetups
          to workshops and conferences. Stay connected with your community by
          RSVPing, setting reminders, and tracking everything right from your
          dashboard. Don’t miss out on opportunities to learn, connect, and grow
          with others nearby.
        </p>
      </div>
    </div>
  );
}
