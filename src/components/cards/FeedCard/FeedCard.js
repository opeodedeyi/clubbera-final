import ExpandableDescription from "@/components/utility/ExpandableDescription/ExpandableDescription";
import Image from 'next/image';
import style from './FeedCard.module.css';


function FeedProfile({
    photoType="rounded",
    profilePhoto="/profile.png",
    mainName="John Doe",
    description="just did something cool",
    subName,
    time="2 hours ago"
}) {
    return (
        <div className={style.feedProfile}>
            <div className={`${style.feedProfileImage} ${photoType == "squared" ? style.squaredProfile : style.roundedProfile}`}>
                <Image
                    src={profilePhoto}
                    alt="profile picture"
                    fill={true}
                    quality={60}
                    className={style.feedProfileImageSrc} />
            </div>

            <div className={style.feedProfileText}>
                <p className={style.feedProfileTextMain}>{mainName} {description} <span className={style.boldText}>{subName}</span></p>
                { time && <p className={style.feedProfileTextTime}>{time}</p> }
            </div>
        </div>
    );
}

export default function FeedCard({ post, contentType }) {
    return (
        <>
            {
                contentType === "activity" ? (
                    <div className={style.emptyFullWidth}>
                        <div className={style.feedWrapper}>
                            <FeedProfile
                                photoType="squared"
                                profilePhoto="/profile.png"
                                mainName="John Doe"
                                description="a community you follow just created an activity"
                                time="2 hours ago" />

                            <div className={style.feedActivityContainer}>
                                <Image
                                    src={post?.image || '/group.png'}
                                    alt="post banner image"
                                    fill={true}
                                    quality={60}
                                    className={style.feedImage} />

                                <div className={style.feedActivityText}>
                                    <div className={style.feedActivityTextMain}>
                                        <p className={style.feedActivitySubtitle}>SAT, JULY 29, 2023, 4:00PM</p>
                                        <p className={style.feedActivityTitle}>Beach Hangout with Cool Kids</p>
                                        <p className={style.feedActivitySubtitle}>Leeds, UK</p>
                                    </div>
                                </div>

                                {/* profile pictures */}
                            </div>
                        </div>
                    </div>
                ) : contentType === "discussion" ? (
                    <div className={style.emptyFullWidth}>
                        <div className={style.feedDiscussionWrapper}>
                            <FeedProfile
                                profilePhoto="/profile.png"
                                mainName="John Doe"
                                subName="The cool kids"
                                description="started a new discussion in"
                                time="2 hours ago" />

                            <ExpandableDescription
                                description="Hey there, fellow positivity lovers! 😄 I hope this message finds you all in high spirits. As we've grown as a community, I've been thinking a lot about how we can take our passion for positivity beyond our club's virtual walls and make a more significant impact in the UK. So, I'd love to hear your thoughts on how we can spread the positivity bug even further. Do you have any ideas, big or small, for projects, initiatives, or collaborations that could make a difference in our local communities or across the nation?"
                                maxLines={4}/>

                            <div className={style.feedDiscussionFooter}>
                                <div className={style.feedDiscussionFooterLeft}>
                                    <button className={style.feedDiscussionButton}>0 comment(s)</button>
                                </div>
                                
                                <div className={style.feedDiscussionFooterRight}>
                                    <button className={style.feedDiscussionButton}>Join the discussion</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    null
                )
            }
        </>
    );
};