import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Image from 'next/image';
import style from "./HomepageGroup.module.css";


function GroupTypeCard({ title, grpimage }) {
    return (
        <div className={style.homepageTypeGroupCard}>
            <Image className={style.homepageGroupCardImg} src={grpimage} alt={title} width="400" height="400" />
            <p className={style.homepageGroupCardTitle}>{title}</p>
        </div>
    );
}

const GroupsSection = ({ groupTypes }) => (
    <div className={style.homepageGroups}>
        <div className={style.homepageGroupsContent}>
            <h2 className={style.homepageGroupsTitle}>Create a <span className="spicy-text">group</span></h2>
            <p className={style.homepageGroupsText}>Start today by creating your dynamic and perfect group.</p>
            <CustomButton link destination="/creategroup" size="normal-size">Create group</CustomButton>
        </div>
        <div className={style.homepageGroupsMain}>
            <div className={style.homepageGroupsMainCards}>
                {groupTypes.map((card, index) => (
                    <GroupTypeCard key={index} title={card.title} grpimage={card.image} />
                ))}
                {/* intentional duplicate */}
                {groupTypes.map((card, index) => (
                    <GroupTypeCard key={index+100} title={card.title} grpimage={card.image} />
                ))}
            </div>
        </div>
    </div>
);

export default GroupsSection;