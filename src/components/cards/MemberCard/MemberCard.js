import Image from "next/image";
import { truncateTextWithDot } from '@/utils/textUtils';
import style from './MemberCard.module.css';


export default function MemberCard({ avatar, name, role="Member", date}) {
    return (
        <div className={style.memberCardSmall}>
            <div className={style.memberCardSmallGen}>
                <div className={style.memberCardSmallImg}>
                    <Image 
                        src={avatar || '/profile.png'}
                        alt="profilephoto"
                        width={50}
                        height={50}/>
                </div>
                <div className={style.memberCardSmallText}>
                    <p className={style.memberCardSmallName}>{truncateTextWithDot(name, 20)}</p>
                    <p className={style.memberCardSmallRole}>{role} • {date}</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};