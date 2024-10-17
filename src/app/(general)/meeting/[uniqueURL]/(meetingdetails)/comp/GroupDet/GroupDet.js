import Link from 'next/link';
import Image from 'next/image';
import GroupTag from "@/components/utility/GroupTag/GroupTag";
import style from "./GroupDet.module.css";


export default function GroupDet({ group }) {
    const groupUrl = `/group/${group?.unique_url}`;

    return (
        <Link href={groupUrl} className={style.groupLink}>
            <div className={style.groupInfo}>
                <p className={style.groupInfoTitle}>About community</p>

                <div className={style.groupInfoContent}>
                    <Image
                        src={group?.banner || '/group-of-people.png'}
                        alt='activity banner'
                        width={200}
                        height={200} />

                    <div className={style.groupInfoContentTexts}>
                        <GroupTag privategroup={group?.is_private} viewtype="showAll" />

                        <div className={style.groupInfoTT}>
                            <h3 className={style.groupInfoTitle}>{group?.title}</h3>
                            <p className={style.groupInfoText}>{group?.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};