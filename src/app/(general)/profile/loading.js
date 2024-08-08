import ProfileHeaderSke from "@/components/skeleton/ProfileHeaderSke/ProfileHeaderSke";
import ProfileDBSke from "@/components/skeleton/ProfileDBSke/ProfileDBSke";
import NavigationSke from "@/components/skeleton/NavigationSke/NavigationSke";
import CardGridContainer from '@/components/layout/CardGridContainer/CardGridContainer';
import GroupCardSkeleton from '@/components/skeleton/GroupCardSkeleton/GroupCardSkeleton';
import style from "./Profile.module.css";

export default function ProfileLoading(){
    return (
        <div className={style.profileContainer}>
            <ProfileHeaderSke />
            <div className={style.profileDetailsContainer}>
                <ProfileDBSke />
                <div className={style.profileTabs}>
                    <NavigationSke itemCount={2} />
                    <CardGridContainer>
                        {
                            Array(10).fill().map((_, index) => (
                                <GroupCardSkeleton key={index} type="grid" />
                            ))
                        }
                    </CardGridContainer>
                </div>
            </div>
        </div>
    );
}