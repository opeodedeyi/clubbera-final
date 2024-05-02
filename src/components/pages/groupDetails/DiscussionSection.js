'use client';


import { useState } from 'react';
import DiscussionCard from "@/components/cards/discussioncard";
import '@/app/style/groupdetails.css';

const DiscussionSection = ({ params }) => {
    const [discussions, setDiscussions] = useState(null);

    return (
        <div className="group-discussion">
            {/* <p className="group-event-title-text">Discussions { `(${discussions.length})` }</p> */}
            <div className="group-discussion-container">
                {/* {discussions.map((discussion, index) => (
                    <DiscussionCard 
                        key={index}
                        name={discussion.owner.fullName}
                        comment={discussion.comment}
                        likeCount={discussion.likeCount}
                        replyCount={discussion.replyCount}
                        timeSince={discussion.timeSince}/>
                ))} */}
            </div>
        </div>
    );
};

export default DiscussionSection;