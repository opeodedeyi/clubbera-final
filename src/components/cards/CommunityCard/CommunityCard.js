import Image from 'next/image';
import Link from 'next/link';
import style from "./CommunityCard.module.css";


export default function CommunityCard({ cardType="small", addBorder=false, bannerPhoto, title, location, description, link }) {
    return (
        <>
            {
                cardType === "large" ? (
                    <div className={style.cardWrapper}>

                    </div>
                ) : cardType === "small" ? (
                    <Link href={`/group/${link}`} className={style.link}>
                        <div className={`${style.cardSmall} ${addBorder ? style.addBorder : ''}`}>
                            <div className={style.cardSmallTop}>
                                <div className={style.cardSmallImg}>
                                    <Image
                                        src={bannerPhoto || '/group.png'}
                                        alt="banner picture"
                                        fill={true}
                                        quality={40} />
                                </div>

                                <div className={style.cardSmallInfo}>
                                    <h4 className={style.cardSmallTitle}>{ title }</h4>
                                    <p className={style.cardSmallSubtitle}>{ location }</p>
                                </div>
                            </div>

                            <p className={style.cardSmallDescription}>{ description }</p>
                        </div>
                    </Link>
                ) : (
                    null
                )
            }
        </>
    );
};