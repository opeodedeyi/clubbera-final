'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './GroupNavigation.module.css';


export default function GroupNavigation({ uniqueURL }) {
    const pathname = usePathname();

    const isActiveTab = (tabName) => {
        return pathname.endsWith(tabName.toLowerCase());
    };
    
    return (
        <div className={style.groupDetailsNavigation}>
            <div className={style.groupDetailsNavigationItems}>
                <Link href={`/group/${uniqueURL}/`}
                    className={`${style.groupDetailsNavigationItem} ${isActiveTab(`${uniqueURL}/`) ? style.activeNavigationItem : ''}`}>
                    About
                </Link>
                <Link href={`/group/${uniqueURL}/activities/`}
                    className={`${style.groupDetailsNavigationItem} ${isActiveTab(`${uniqueURL}/activities/`) ? style.activeNavigationItem : ''}`}>
                    Activities
                </Link>
                <Link href={`/group/${uniqueURL}/discussions/`}
                    className={`${style.groupDetailsNavigationItem} ${isActiveTab(`${uniqueURL}/discussions/`) ? style.activeNavigationItem : ''}`}>
                    Discussions
                </Link>
                <Link href={`/group/${uniqueURL}/members/`}
                    className={`${style.groupDetailsNavigationItem} ${isActiveTab(`${uniqueURL}/members/`) ? style.activeNavigationItem : ''}`}>
                    Members
                </Link>
            </div>
        </div>
    )
}