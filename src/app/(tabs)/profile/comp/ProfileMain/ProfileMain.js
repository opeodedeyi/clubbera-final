'use client';

import Image from "next/image";
import Link from "next/link";
import { formatBirthday } from "@/utils/dateUtils";
import { HiOutlineMail, HiOutlinePencil, HiOutlineMenu, HiOutlineLocationMarker } from "react-icons/hi";
import { TbBalloon } from "react-icons/tb";
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import Modal from "@/components/popup/Modal/Modal";
import BackButton from "@/components/Navigation/BackButton/BackButton";
import EditProfile from "@/app/(general)/editProfile/editProfile";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./ProfileMain.module.css";


export default function ProfileMain({ user }){
    const router = useRouter();
    const searchParams = useSearchParams();
    const { createQueryString, removeQueryParam } = useQueryParams();

    const isModalOpen = searchParams.get('edit') === 'true';

    const openModal = () => {
        router.push(`?${createQueryString('edit', 'true')}`, { scroll: false });
    };

    const closeModal = () => {
        router.push(`?${removeQueryParam('edit')}`, { scroll: false });
    };

    return (
        <>
            <div className={style.profileMain}>
                <div className={`${style.profileHeader} ${style.mobileOnly}`}>
                    <BackButton showText={true} />

                    <div className={style.profileHeaderBtns}>
                        <div className={style.profButton} onClick={openModal}><HiOutlinePencil/></div>
                        <div className={style.profButton}><HiOutlineMenu/></div>
                    </div>
                </div>

                <div className={style.profileMainPicture}>
                    <Image
                        src={user?.avatar || "/profile.png"} 
                        width={400} 
                        height={400}
                        alt="profile photo"/>
                </div>

                <div className={style.profileMainText}>
                    <h4 className={style.profileFullname}>{user?.full_name}</h4>

                    <div className={`${style.profileStat} ${style.desktopOnly}`}>
                        <div className={style.profileStatMini}>
                            <p className={style.profileStatNum}>0</p>
                            <p>Followers</p>
                        </div>

                        <div className={style.profileStatMini}>
                            <p className={style.profileStatNum}>0</p>
                            <p>Following</p>
                        </div>

                        <div className={style.profileStatMini}>
                            <p className={style.profileStatNum}>200</p>
                            <p>Communities</p>
                        </div>
                    </div>
                    
                    <p className={style.profileBio}>{user?.bio || ""}</p>

                    <div className={style.profileSec}>
                        <p className={style.profileSecInfo}><HiOutlineLocationMarker className={style.profileSecIcon} /> {user?.location || "not set"}</p>
                        <p className={style.profileSecInfo}><TbBalloon className={style.profileSecIcon} /> Born {formatBirthday(user?.birthday)}</p>
                        <p className={style.profileSecInfo}><HiOutlineMail className={style.profileSecIcon} /> {user?.email}</p>
                    </div>

                    <div className={`${style.profileStat} ${style.mobileOnly}`}>
                        <p className={style.profileStatText}><span className={style.profileStatNum}>0</span> Followers</p>
                        <p className={style.profileStatText}><span className={style.profileStatNum}>0</span> Following</p>
                        <p className={style.profileStatText}><span className={style.profileStatNum}>200</span> Communities</p>
                    </div>
                </div>

                <div className={`${style.profileBtn} ${style.desktopOnly}`}>
                    <CustomButton onClick={openModal} coloring="inverseColoring">Edit profile</CustomButton>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="775px" displayType="rightSide" hasBack={true}>
                <EditProfile user={user}/>
            </Modal>
        </>
    );
};
