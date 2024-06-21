import MainHeader from "@/components/header/MainHeader/MainHeader";
import MainFooter from "@/components/footer/MainFooter/MainFooter";
import { getUserSession } from "@/lib";

const fetchUser = async () => {
    return await getUserSession();
};

export default async function GeneralLayout ({ children }) {
    const user = await fetchUser();

    return (
        <>
            <MainHeader user={user}/>
            {children}
            <MainFooter user={user}/>
        </>
    );
}