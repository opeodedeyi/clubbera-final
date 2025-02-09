import MainHeader from "@/components/header/MainHeader/MainHeader";


export default async function GeneralLayout ({ children }) {
    return (
        <>
            <MainHeader/>
            {children}
        </>
    );
}