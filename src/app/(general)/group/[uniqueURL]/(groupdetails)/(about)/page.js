'use client';

import Image from 'next/image';
import { useGroup } from '@/app/context/GroupContext';
import SomeMeetings from './comp/SomeMeetings/SomeMeetings';
import AvatarCards from "@/components/utility/AvatarCards/AvatarCards";
import style from './AboutSection.module.css';


export default function GroupDetailsAbout() {
    const group = useGroup();

    return (
        <>
            <div className={style.groupOther}>
                <div className={style.groupAboutDescription}>
                    <AvatarCards
                        images={group?.members_avatar}
                        text={`${group?.member_count} members`} />

                    <p className={style.groupAboutContent}>{group?.description}</p>
                </div>

                <div className={style.groupHostInfo}>
                    <div className={style.groupHostInfoContainer}>
                        <h5 className={style.groupAboutTitle}>Organizer</h5>
                        
                        <div className={style.HostInfoItem}>
                            <div className={style.HostInfoItemImg}>
                                <Image
                                    src={group?.host_avatar || "/profile.png"}
                                    alt="host-photo"
                                    width={100}
                                    height={100}/>
                            </div>
                            <p className={style.HostInfoItemContent}>{group.host_name || "loading name"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <SomeMeetings />
        </>
    );
};
