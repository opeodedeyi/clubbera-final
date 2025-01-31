import style from './CommunityMembers.module.css';

export default function CommunityMembers({ isPrivate, status="not-member", members }) {
    return (
        <div className={style.membersContainer}>
            <div className={style.membersRow}>
                {members.slice(0, 10).map((image, index) => (
                    <div key={index} className={style.memberImageContainer}>
                        <img
                            src={image}
                            alt={`Member ${index + 1}`}
                            className={style.memberImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};