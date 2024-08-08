import ProfileTopCardSke from "@/components/skeleton/ProfileTopCardSke/ProfileTopCardSke";
import CTABannerSkeleton from "@/components/skeleton/CTABannerSkeleton/CTABannerSkeleton";


export default function DashboardLoading () {
    return (
        <>
            <ProfileTopCardSke />
            <CTABannerSkeleton />
            {/* add card loading content skeleton here */}
            <CTABannerSkeleton />
        </>
    )
}
