import { extractTimeFromDate, formatDateWithoutTime, getMeetingEndTime } from "@/utils/dateUtils";
import ExpandableDescription from "@/components/utility/ExpandableDescription/ExpandableDescription";
import LTCard from "../LTCard/LTCard";
import style from "./BasicDescription.module.css";


export default function BasicDescription({ meeting }) {
    // const endTime = getMeetingEndTime(meeting?.time_of_meeting, meeting?.duration);
    return (
        <div className={style.hangoutContainer}>
            <div className={style.hangoutDetailsContainer}>
                <p className={style.hangoutTitle}>{meeting?.title}</p>
                
                <ExpandableDescription
                    description={meeting?.description}
                    maxLines={4}/>
            </div>

            <div className={style.hangoutDetails}>
                <LTCard 
                    icon="calendar"
                    title="Date"
                    content={formatDateWithoutTime(meeting?.date_of_meeting)}/>

                <LTCard 
                    icon="clock"
                    title="Time"
                    content={`${extractTimeFromDate(meeting?.time_of_meeting)}`}/>
                
                <LTCard 
                    icon="location"
                    title="Location"
                    content={meeting?.location}/>
            </div>
        </div>
    );
};
