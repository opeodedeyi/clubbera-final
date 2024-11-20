import { UserProvider } from '@/app/context/UserContext';
import MainFooter from "@/components/footer/MainFooter/MainFooter";


export default async function HelpLayout({ children }) {
    return (
        <UserProvider>
            {children}
            <MainFooter/>
        </UserProvider>
    );
}