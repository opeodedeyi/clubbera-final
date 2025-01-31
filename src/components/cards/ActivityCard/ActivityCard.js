import ExpandableDescription from "@/components/utility/ExpandableDescription/ExpandableDescription";
import Image from 'next/image';
import style from './ActivityCard.module.css';


export default function ActivityCard({ post }) {
    return (
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
    );
};