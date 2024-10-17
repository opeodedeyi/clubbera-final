import Link from 'next/link';
import Image from 'next/image';
import ColoredText from "@/components/typography/ColoredText/ColoredText";
import SpicyText from '@/components/typography/SpicyText/SpicyText';
import style from './AvatarCards.module.css';


export default function AvatarCards({ images, link, text }) {
    return (
        <div className={style.attendeeInfo}>
            { images?.length > 0 &&
                <div className={style.attendeeImages}>
                    { images.map((image, index) => (
                        <div
                            key={index}
                            className={style.attendeeImage}>
                            <Image
                                src={image || '/profile.png'}
                                alt="Attendee"
                                height={30}
                                width={30} />
                        </div>
                    ))}
                </div>
            }

            { link ?
                <Link
                    className={style.totalAttendeesLink}
                    href={link}>
                        <SpicyText>
                            {text}
                        </SpicyText>
                </Link>
                :
                <p className={style.totalAttendees}>{text}</p>
            }
        </div>
    );
}