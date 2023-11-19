'use client';

import { truncateTextWithDot } from '@/utils/textUtils';
import './discussioncard.css';


const DiscussionCard = ({ name, comment, timeSince, likeCount, replyCount }) => {
    return (
        <div className="discussion-card">
            <div className="discussion-card-top">
                <div className="discussion-card-info">
                    <div className="discussion-card-info-left">
                        <div className="discussion-card-info-image">
                            <img src="/profile_image.png" alt="" />
                        </div>
                        <p className="discussion-card-username">{truncateTextWithDot(name, 9)}</p>
                        <div className="discussion-card-point"></div>
                        <p className="discussion-card-time">{timeSince}</p>
                    </div>
                    {/* <div className="discussion-card-info-report"></div> Report button goes here */}
                </div>
                <div className="discussion-card-line"></div>
                <p className="discussion-card-comment">{comment}</p>
            </div>
            <div className="discussion-card-bottom">
                <div className="discussion-card-bottom-left">
                    <p className="discussion-card-smltxt">{likeCount} likes</p>
                    <div className="discussion-card-point"></div>
                    <p className="discussion-card-smltxt">{replyCount} reply</p>
                </div>
                <div className="discussion-card-bottom-right"></div>
            </div>
        </div>
    )
    
};

export default DiscussionCard;