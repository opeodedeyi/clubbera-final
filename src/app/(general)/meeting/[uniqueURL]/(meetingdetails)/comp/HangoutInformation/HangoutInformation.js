import Map from "@/components/utility/Map/Map";
import ExpandableDescription from "@/components/utility/ExpandableDescription/ExpandableDescription";
import style from "./HangoutInformation.module.css";


export default function HangoutInformation({ meeting }) {
    return (
        <div className={style.hangoutInformationWrapper}>
            {   meeting?.location_details &&
                <div className={style.accessInfo}>
                    <p className={style.accessInfoTitle}>Access information</p>

                    <ExpandableDescription
                        description={meeting?.location_details}
                        maxLines={6}/>
                </div>
            }

            <Map lat={meeting?.lat} lng={meeting?.lng} height="366px" />
        </div>
    );
};