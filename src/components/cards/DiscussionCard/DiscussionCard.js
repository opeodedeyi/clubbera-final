'use client';

import { useState, useEffect } from 'react';
import { getReplies } from '@/app/actions/getDiscussions';
import { postReply } from '@/app/actions/postDiscussion';
import { truncateTextWithDot } from '@/utils/textUtils';
import { timeAgo } from '@/utils/dateUtils';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import LoadingSpinner from '@/components/animation/LoadingSpinner/LoadingSpinner';
import DiscussionInput from '@/components/forminput/DiscussionInput/DiscussionInput';
import style from './DiscussionCard.module.css';


const DiscussionCard = ({ id, type="reply", name, avatar, comment, timeSince, replyCount=0, onClick }) => {
    return (
        <div className={style.discussionCard}>
            <div className={style.discussionCardTop}>
                <div className={style.discussionCardInfo}>
                    <div className={style.discussionCardInfoLeft}>
                        <div className={style.discussionCardInfoImage}>
                            <img src={avatar || "/profile.png"} alt="user profile" />
                        </div>
                        <p className={style.discussionCardUsername}>{truncateTextWithDot(name, 21)}</p>
                        <div className={style.discussionCardPoint}></div>
                        <p className={style.discussionCardTime}>{timeAgo(timeSince)}</p>
                    </div>
                    {/* <div className={style.discussionCardInfoReport}></div> Report button goes here */}
                </div>
                <div className={style.discussionCardLine}></div>
                <p className={style.discussionCardComment}>{comment}</p>
            </div>

            {
                type === 'comment' && (
                    <div className={style.discussionCardBottom}>
                        <div className={style.discussionCardBottomLeft}>
                            {/* other things on the left */}
                            <p className={style.discussionCardSmltxt}>{replyCount} repl{replyCount < 2 ? 'y' : 'ies'}</p>
                        </div>
                        <div className={style.discussionCardBottomRight}>
                            <button
                                className={style.discussionCardReply}
                                onClick={onClick}>
                                <HiOutlineChatAlt2 /> <span>Reply</span>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
    
};

export default function DiscussionCont({ id, name, avatar, comment, timeSince, replyCount=0 }) {
    const [replies, setReply] = useState([]);
    const [replyComment, setReplyComment] = useState('');
    const [replyPage, setReplyPage] = useState(0);
    const [isLoadingReplies, setIsLoadingReplies] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    const postCommentReply = async () => {
        setIsReplying(true);
        try {
            const { success, discussion } = await postReply(id, replyComment);
            if (success) setReplyComment('');
            setReply([discussion, ...replies]);
        } catch (error) {
            console.error('Error posting reply:', error);
        } finally {
            setIsReplying(false);
        }
    }

    const showMoreReplies = async () => {
        setIsLoadingReplies(true);
        try {
            const { discussions } = await getReplies(id, replyPage + 1, 5);
            setReply([...replies, ...discussions]);
            setReplyPage(replyPage + 1);
        } catch (error) {
            console.error('Error loading replies:', error);
        } finally {
            setIsLoadingReplies(false);
        }
    }

    const toggleShowReplies = () => {
        setShowReplies(!showReplies);
    }

    const showRepliesPage = () => {
        
        if (replyPage===0) {
            setShowReplies(true);
            showMoreReplies();
        } else {
            setShowReplies(true);
        }
    }

    const hideRepliesPage = () => {
        setShowReplies(false);
    }

    return (
        <div className={style.discussionContainer}>
            <DiscussionCard
                type="comment"
                id={id}
                name={name}
                avatar={avatar}
                comment={comment}
                replyCount={replyCount}
                timeSince={timeSince}
                onClick={toggleShowReplies} />

            {   replyCount > 0 && (
                ( showReplies ? (
                    <button
                        className={`${style.discussionCardReply} ${style.marginOne}`}
                        onClick={hideRepliesPage}>
                            <span>Hide replies</span> 
                    </button>
                    ) :
                    <button
                        className={`${style.discussionCardReply} ${style.marginOne}`}
                        onClick={showRepliesPage}>
                            <span>Show replies</span> 
                    </button>
                )
            )}

            {
                (isReplying || showReplies) && (
                    <div className={style.discussionReplies}>
                        <div className={style.replyLine}/>

                        <div className={style.replycontent}>
                            <DiscussionInput
                                value={replyComment}
                                onChange={setReplyComment}
                                placeholder="Write a reply to the comment"
                                onClick={postCommentReply} />

                            {
                                replies.map((reply) => (
                                    <DiscussionCard
                                        key={reply.id}
                                        type="reply"
                                        id={reply.id}
                                        name={reply.user_name}
                                        avatar={reply.user_image}
                                        comment={reply.comment}
                                        timeSince={reply.created_at} />
                                ))
                            }
                            

                            {   (replyCount > replies.length) && (

                                isLoadingReplies ? (
                                    <div className={style.loadingContainer}>
                                        <LoadingSpinner height='18px' backgroundColor="var(--main-color)"/>
                                    </div>
                                ) : (
                                    <button
                                        className={`${style.discussionCardReply} ${style.marginOne}`}
                                        onClick={showMoreReplies}>
                                            {replies.length===0 ? 
                                                <span>Show replies</span> : 
                                                <span>Show more</span>
                                            }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
};
