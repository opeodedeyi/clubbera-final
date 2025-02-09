import { UserProvider } from '@/app/context/UserContext';
import BottomNav from '@/components/Navigation/BottomNav/BottomNav';
import MainFooter from "@/components/footer/MainFooter/MainFooter";


export default async function GeneralLayout ({ children }) {
    return (
        <UserProvider>
            {children}
            <BottomNav/>
            <MainFooter/>
        </UserProvider>
    );
}