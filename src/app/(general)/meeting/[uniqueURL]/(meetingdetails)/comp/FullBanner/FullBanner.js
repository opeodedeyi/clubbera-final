import Image from 'next/image';
import style from './FullBanner.module.css';

export default function FullBanner({banner}) {
    return (
        <div className={style.bannerContainer}>
            <Image
                src={ banner || '/meetingHeroImage.png' }
                alt="Hero Image"
                height={400}
                width={1280}
                className={style.heroImage} />
        </div>
    );
}