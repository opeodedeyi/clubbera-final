'use client';

import CustomButton from "@/components/utility/custombutton";
import Image from 'next/image';
import "@/app/style/homepage.css";


function GroupTypeCard({ title, grpimage }) {
    return (
        <div className="homepage-type-group-card">
            <Image className="homepage-group-card-img" src={grpimage} alt={title} width="400" height="400" />
            <p className="homepage-group-card-title">{title}</p>
        </div>
    );
}

const GroupsSection = ({ groupTypes }) => (
    <div className="homepage-groups">
        <div className="homepage-groups-content">
            <h2 className="homepage-groups-title">Create a <span className="spicy-text">group</span></h2>
            <p className="homepage-groups-text">Start today by creating your dynamic and perfect group.</p>
            <CustomButton link destination="/creategroup" size="normal-size">Create group</CustomButton>
        </div>
        <div className="homepage-groups-main">
            <div className="homepage-groups-main-cards">
                {groupTypes.map((card, index) => (
                    <GroupTypeCard key={index} title={card.title} grpimage={card.image} />
                ))}
                {/* duplicate */}
                {groupTypes.map((card, index) => (
                    <GroupTypeCard key={index+100} title={card.title} grpimage={card.image} />
                ))}
            </div>
        </div>
    </div>
);

export default GroupsSection;