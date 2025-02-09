import HeaderMain from "@/components/header/HeaderMain/HeaderMain";


export default async function GeneralLayout ({ children }) {
    return (
        <>
            <HeaderMain />
            {children}
        </>
    );
}