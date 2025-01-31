import { UserProvider } from '@/app/context/UserContext';
import MainFooter from "@/components/footer/MainFooter/MainFooter";
import LoggedInHeader from '@/components/header/MainHeader/LoggedInHeader';
import MainHeader from '@/components/header/MainHeader/MainHeader';
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";


export default async function HelpLayout({ children }) {
    return (
        <UserProvider>
            <MainHeader/>
            {children}
            <MainFooter/>
        </UserProvider>
    );
}