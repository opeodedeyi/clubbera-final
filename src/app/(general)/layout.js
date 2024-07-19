import { UserProvider } from '@/app/context/UserContext';
import MainHeader from "@/components/header/MainHeader/MainHeader";
import MainFooter from "@/components/footer/MainFooter/MainFooter";


export default async function GeneralLayout ({ children }) {
    return (
        <UserProvider>
            <MainHeader/>
            {children}
            <MainFooter/>
        </UserProvider>
    );
}