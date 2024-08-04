import ProfileCard from "../ProfileCard/ProfileCard";
import LTCard from "../LTCard/LTCard";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import Comments from "../Comments/Comments";
import style from "./HangoutInformation.module.css";


export default function HangoutInformation() {
    return (
        <TwoColumnLayout padding="0px var(--container-padding)" gap="40px">
            <div className={style.hangoutInformationWrapper}>
                <div className={style.hostInformationContainer}>
                    <p>HOST INFORMATION</p>

                    <ProfileCard />
                </div>
                
                <div className={style.hangoutLocTime}>
                    <LTCard 
                        icon="calendar"
                        title="Date"
                        content="Saturday, July 24, 2024, 4:00pm"/>

                    <div className={style.hangoutLocTimeLine}></div>

                    <LTCard 
                        icon="location"
                        title="Location"
                        content="82 Wenlock Terrace, Leeds, UK"/>
                </div>
            </div>

            <Comments />
        </TwoColumnLayout>
    );
};