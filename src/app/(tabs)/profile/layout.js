import ProfileHeader from "@/components/header/ProfileHeader/ProfileHeader";


export default async function GeneralLayout ({ children }) {
    return (
        <>
            <ProfileHeader maxWidth="var(--max-page-width)" screenType="desktop" />
            {children}
        </>
    );
}