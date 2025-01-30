import { UserProvider } from '@/app/context/UserContext';
import MainFooter from "@/components/footer/MainFooter/MainFooter";
import MainHeader from '@/components/header/MainHeader/MainHeader';


export default async function ContactLayout({ children }) {
    return (
        <UserProvider>
            <MainHeader/>
            {children}
            <MainFooter/>
        </UserProvider>
    );
}