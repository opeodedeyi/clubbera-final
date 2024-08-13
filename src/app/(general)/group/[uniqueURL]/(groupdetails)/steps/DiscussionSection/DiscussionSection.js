'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getGroupDiscussions } from '@/app/actions/getDiscussions';
import { postGroupDiscussion } from '@/app/actions/postDiscussion';
import DiscussionInput from '@/components/forminput/DiscussionInput/DiscussionInput';
import DiscussionCont from "@/components/cards/DiscussionCard/DiscussionCard";
import style from './DiscussionSection.module.css';

const DiscussionSection = () => {
    const params = useParams();
    const uniqueURL = params.uniqueURL;
    const [discussions, setDiscussions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [comment, setComment] = useState('');
    const [creatingDiscussion, setCreatingDiscussion] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadDiscussions();
    }, [currentPage]);

    const loadDiscussions = async () => {
        setIsLoading(true);
        try {
            const {discussions, pagination} = await getGroupDiscussions(uniqueURL, currentPage, 12);
            console.log(discussions);
            
            setDiscussions(discussions);
            setTotalPages(pagination.totalPages);
        } catch (error) {
            console.error('Error loading users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const postComment = async () => {
        setCreatingDiscussion(true);
        try {
            const { discussion } = await postGroupDiscussion(uniqueURL, comment);
            setDiscussions([discussion, ...discussions]);
            setComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
        } finally {
            setCreatingDiscussion(false);
        }
    }

    return (
        <div className={style.groupDiscussion}>
            <p className={style.groupDiscussionText}>Discussions</p>
            <div className={style.groupDiscussionContainer}>
                <DiscussionInput
                    value={comment}
                    onChange={setComment}
                    onClick={postComment}/>

            {
                isLoading ? (
                    <p>Loading...</p>
                ) : discussions.length === 0 ? (
                    <p>No discussions yet</p>
                ) : (
                    discussions.map((discussion) => (
                        <DiscussionCont 
                            key={discussion.id}
                            id={discussion.id}
                            name={discussion.user_name}
                            avatar={discussion.user_image}
                            comment={discussion.comment}
                            replyCount={discussion.reply_count}
                            timeSince={discussion.created_at}
                        />
                    ))
                )
            }
                
            </div>
        </div>
    );
};

export default DiscussionSection;