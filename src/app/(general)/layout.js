import Header from "@/components/header/header";
import MainFooter from "@/components/footer/mainfooter";
import { getUserSession } from "@/lib";

const fetchUser = async () => {
    return await getUserSession();
};

export default async function GeneralLayout ({ children }) {
    const user = await fetchUser();

    return (
        <>
            <Header user={user}/>
            {children}
            <MainFooter user={user}/>
        </>
    );
}