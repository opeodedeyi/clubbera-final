'use client';

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useNavigateBack } from '@/hooks/useNavigateBack';
import { useUser } from '@/app/context/UserContext';
import Logo from "@/components/utility/Logo/logo";
import HeaderWrapper from "../comp/HeaderWrapper/HeaderWrapper";
import HeaderLoading from "../HeaderLoading/HeaderLoading";
import HeaderProfile from "../comp/HeaderProfile/HeaderProfile";
import style from "./ProfileHeader.module.css";


export default function ProfileHeader({ height, maxWidth, borderBottom, screenType }) {
    const { user, loading, error } = useUser();

    if (loading) return <HeaderLoading height={height} />;
    if (error) return <header>Error: {error.message}</header>;

    return (
        <HeaderWrapper height={height} maxWidth={maxWidth} borderBottom={borderBottom} screenType={screenType}>
            <div className={style.headerMain}>
                <Logo coloring="default-logo-coloring" size="header-logo-size" />

                <div className={style.headerRight}>
                    <HeaderProfile
                        screenType="desktop"
                        user={user} />
                </div>
            </div>
        </HeaderWrapper>
    );
}