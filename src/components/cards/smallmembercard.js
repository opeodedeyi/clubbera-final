'use client';

import { truncateTextWithDot } from '@/utils/textUtils';
import './membercard.css';


const SmallMemberCard = ({ name, role="member", date}) => {
    return (
        <div className="member-card-small">
            <div className="member-card-small-gen">
                <div className="member-card-small-img">
                    <img src="/profile_image.png" alt="profilephoto"/>
                </div>
                <div className="member-card-small-text">
                    <p className="member-card-small-name">{truncateTextWithDot(name, 20)}</p>
                    <p className="member-card-small-role">{role} • {date}</p>
                </div>
            </div>
            <div className="member-card-small-chat">
                
            </div>
        </div>
    )
};

export default SmallMemberCard;