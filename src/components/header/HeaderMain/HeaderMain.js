'use client';

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import Logo from "@/components/utility/Logo/logo";
import HeaderWrapper from "../comp/HeaderWrapper/HeaderWrapper";
import HeaderLoading from "../HeaderLoading/HeaderLoading";
import SearchBar from "@/components/forminput/SearchBar/SearchBar";
import HeaderProfile from "../comp/HeaderProfile/HeaderProfile";
import style from "./HeaderMain.module.css";



function LoggedInHeader({ user, height, searchText, handleSearchChange, onSubmit, maxWidth }) {
    return (
        <HeaderWrapper height={height} maxWidth={maxWidth}>
            <div className={style.headerMain}>
                <Logo coloring="default-logo-coloring" size="header-logo-size" />

                <SearchBar 
                    type="search"
                    screenType="desktop"
                    placeholder="Search communities, locations" 
                    value={searchText}
                    onChange={handleSearchChange}
                    onSubmit={onSubmit}
                    maxWidth="450px" />

                <div className={style.headerRight}>
                    {/* notification */}
                    <HeaderProfile
                        screenType="desktop"
                        user={user} />
                </div>
            </div>
        </HeaderWrapper>
    );
}

function LoggedOutHeader({ height, maxWidth }) {
    return (
        <HeaderWrapper height={height} maxWidth={maxWidth}>
            <div className={style.headerMain}>
                <Logo coloring="default-logo-coloring" size="header-logo-size" />

                <div className={style.headerRight}>
                    {/* buttons goes here */}
                </div>
            </div>
        </HeaderWrapper>
    );
}

export default function HeaderMain({ height, maxWidth }) {
    const router = useRouter();
    const { user, loading, error } = useUser();
    const [searchText, setSearchText] = useState('');

    function handleSearchChange(e) {
        setSearchText(e.target.value);
    }

    function onSubmit(e) {
        router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
    }

    if (loading) return <HeaderLoading height={height} />;
    if (error) return <header>Error: {error.message}</header>;

    if (user) return (
        <LoggedInHeader
            user={user}
            height={height}
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            onSubmit={onSubmit} 
            maxWidth={maxWidth} />
    );

    return (
        <LoggedOutHeader height={height} maxWidth={maxWidth} />
    );
}