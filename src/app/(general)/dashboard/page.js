import { useUserSession } from "@/hooks/useUserSession";
import DashboardContent from "@/app/(general)/dashboard/DashboardContent";
import "@/app/style/homepage.css"


export default function Dashboard({ searchParams }) {
    const user = useUserSession();

    return (
        <>
            {user && <DashboardContent user={user} searchParams={searchParams} />}
        </>
    )
}