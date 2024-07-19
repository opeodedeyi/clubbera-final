'use client';

import SmallMemberCard from "@/components/cards/smallmembercard";
import style from './MemberSection.module.css';


export default function MemberSection(){
    return (
        <div className={style.groupMembers}>
            <div className={style.groupMembersContainer}>
                <p className={style.groupMembersTitleText}>MEMBERS</p>
                <div className={style.groupMembersCardsContainer}>
                    {/* {members.map((person, index) => (
                        <SmallMemberCard 
                            key={index+100}
                            name={person.name} 
                            role={person.role} 
                            date={person.date}/>
                    ))} */}
                </div>
            </div>
        </div>
    );
};