import Image from 'next/image';
import { HiOutlineLocationMarker, HiOutlineUserGroup, HiOutlineChevronDown } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import GroupTag from "@/components/utility/GroupTag/GroupTag";
import style from './GroupKeyDetails.module.css';


export default function GroupKeyDetails({ group, ctaText, onJoinLeave, isLoading }) {
    return (
        <div className={style.groupDetailsKeydetails}>
            <div className={style.groupKeydetailsMajor}>
                <div className={style.groupKeydetailsMajorImage}>
                    <Image 
                        fill={true}
                        priority
                        src={group.banner || "/general/noImage.avif"}
                        alt="picture of group" />
                </div>
                <div className={style.groupKeydetailsMajorText}>
                    <div className={style.groupKeydetailsTextInner}>
                        <div className={style.groupKeydetailsTextGen}>
                            <div className={style.groupKeydetailsTitPub}>
                                <GroupTag privategroup={group.is_private} viewtype="desktopOnlyShow"/>

                                <h4 className={style.groupKeydetailsTitle}>{group.title}<GroupTag privategroup={group.is_private} viewtype="mobileOnlyShow"/></h4>
                                <p>{group.tagline}</p>
                            </div>
                            <div className={style.groupKeydetailsLocMem}>
                                <div className={style.grpKeydetLocItem}>
                                    <div className={style.grpKeydetIconRounded}>
                                        <HiOutlineLocationMarker color="var(--color-text-main)"/>
                                    </div>
                                    <span>{group.location}</span>
                                </div>
                                <div className={style.grpKeydetLocItem}>
                                    <div className={style.grpKeydetIconRounded}>
                                        <HiOutlineUserGroup color="var(--color-text-main)"/>
                                    </div>
                                    <span>{`${group.member_count} member${(group.member_count > 1) ? 's' : ''}`}</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.groupKeydetailsTextButtons}>
                            <CustomButton 
                                coloring={(ctaText === "Requested" || ctaText === "Leave Community") ? "inverseColoring" : "defaultColoring"} 
                                size="normalButtonSize"
                                loading={isLoading}
                                onClick={onJoinLeave}>
                                {ctaText}
                            </CustomButton>
                            <CustomButton coloring="inverseColoring" size="normalButtonSize">
                                <span>Share</span><HiOutlineChevronDown/>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}