'use client';

import SmallMemberCard from "@/components/cards/smallmembercard";
import '@/app/style/groupdetails.css';


const MemberSection = ({ params }) => {
    return (
        <div className="group-members">
            <div className="group-members-container">
                <p className="group-members-title-text">ORGANIZERS</p>
                <div className="group-members-cards-container">
                    {/* {organizers.map((person, index) => (
                        <SmallMemberCard
                            key={index}
                            name={person.name} 
                            role={person.role} 
                            date={person.date}/>
                    ))} */}
                </div>
            </div>

            <div className="group-members-container">
                <p className="group-members-title-text">MEMBERS</p>
                <div className="group-members-cards-container">
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

export default MemberSection;