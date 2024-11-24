import { UserProvider } from '@/app/context/UserContext';
import MainFooter from "@/components/footer/MainFooter/MainFooter";
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";


export default async function HelpLayout({ children }) {
    return (
        <UserProvider>
            <ProfileTopCard/>
            {children}
            <MainFooter/>
        </UserProvider>
    );
}