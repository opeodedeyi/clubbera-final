import Image from 'next/image';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { formatDateLong } from '@/utils/dateUtils';
import GroupTag from '@/components/utility/GroupTag/GroupTag';
import style from './GroupCard.module.css';

export default function GroupCard({ type, group }) {
    return (
        <div className={type === "grid" ? style.gridGroupCard : style.flexGroupCard}>
            <div className={style.cardContent}>
                <div className={style.cardContentBasic}>
                    <p className={style.cardDate}>{formatDateLong(group.date_joined)}</p>

                    <div className={style.cardContentText}>
                        <p className={style.cardTitle}>{group.title}</p>
                        <p className={style.cardLocation}><HiOutlineLocationMarker />{group.location}</p>
                    </div>
                </div>

                <p className={style.cardDescription}>{group.description}</p>
            </div>

            <div className={style.cardFooter}>
                <GroupTag privategroup={group.is_private} viewtype="" />

                <div className={style.cardFooterMembers}>
                    {group.member_avatars && group.member_avatars.length > 0 && (
                        <div className={style.avatarWrapperMain}>
                            {group.member_avatars.slice(0, 2).map((avatar, index) => (
                                <div key={index} className={style.avatarWrapper} style={{zIndex: index}}>
                                    <Image
                                        src={avatar}
                                        alt={`Member ${index + 1}`}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {Number(group.total_members) > group.member_avatars?.length && (
                        <p aria-label={`${Number(group.total_members) - group.member_avatars.length} additional members`}>
                        +{Number(group.total_members) - group.member_avatars.length}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}