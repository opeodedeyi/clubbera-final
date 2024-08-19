import ProfileCard from "../ProfileCard/ProfileCard";
import LTCard from "../LTCard/LTCard";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import Comments from "../Comments/Comments";
import style from "./HangoutInformation.module.css";


export default function HangoutInformation({ meeting }) {
    return (
        <TwoColumnLayout padding="0px var(--container-padding)" gap="40px">
            <div className={style.hangoutInformationWrapper}>
                <div className={style.hostInformationContainer}>
                    <p>HOST INFORMATION</p>

                    <ProfileCard user={meeting?.group_owner}/>
                </div>
                
                <div className={style.hangoutLocTime}>
                    <LTCard 
                        icon="calendar"
                        title="Date"
                        content={meeting?.date_of_meeting}/>

                    <div className={style.hangoutLocTimeLine}></div>

                    <LTCard 
                        icon="location"
                        title="Location"
                        content={meeting?.location}/>
                </div>
            </div>

            <Comments uniqueUrl={meeting?.unique_url}/>
        </TwoColumnLayout>
    );
};