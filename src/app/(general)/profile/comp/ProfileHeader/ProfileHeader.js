'use client';

import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import Modal from "@/components/popup/Modal/Modal";
import EditProfile from "@/app/(general)/editProfile/editProfile";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./ProfileHeader.module.css";


export default function ProfileHeader({ padding='24px var(--container-padding)', title }){
    return (
        <div className={style.profileHeader} style={{ padding }}>
            <h3 className={style.profileHeaderTitle}>{title}</h3>
        </div>
    );
};
