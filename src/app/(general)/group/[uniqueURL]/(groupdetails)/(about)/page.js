'use client';

import { useParams } from 'next/navigation';
import { useGroup } from '@/app/context/GroupContext';
import CustomTitle from './comp/CustomTitle/CustomTitle';
import ExpandableDescription from "@/components/utility/ExpandableDescription/ExpandableDescription";
import CommunityMembers from './comp/CommunityMembers/CommunityMembers';
import OrganizerCard from './comp/OrganizerCard/OrganizerCard';
import SomeMeetings from './comp/SomeMeetings/SomeMeetings';
import style from './AboutSection.module.css';


export default function GroupDetailsAbout() {
    const group = useGroup();
    const params = useParams();
    const uniqueURL = params.uniqueURL;

    console.log(group.members_avatar);

    return (
        <>
            <div className={style.groupAbout}>
                <div className={style.groupMain}>
                    <div className={style.groupMiniContainer}>
                        <CustomTitle>What we’re about</CustomTitle>

                        <ExpandableDescription
                            description={group?.description}
                            maxLines={4}
                            hideLess={true} />
                    </div>

                    <div className={style.groupMiniContainer}>
                        <CustomTitle link={`/group/${uniqueURL}/members/`}>Members</CustomTitle>

                        <CommunityMembers members={group?.members_avatar} />
                    </div>

                    <div className={style.groupMiniContainer}>
                        <CustomTitle link={`/group/${uniqueURL}/activities/`}>Upcoming activities</CustomTitle>

                        {/* <CommunityMembers members={group?.members_avatar} /> */}
                    </div>
                </div>

                {/* // the right side of the page, will contain the organizer 
                <div className={style.groupSide}>
                    <OrganizerCard />
                </div> */}
            </div>

            

            {/* <SomeMeetings /> */}
        </>
    );
};
