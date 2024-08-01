import CustomButton from '@/components/utility/CustomButton/CustomButton'
import { useEditMeeting } from '@/app/context/EditMeetingContext';
import style from "./EditMeetingHeader.module.css"


export default function EditMeetingHeader() {
    const { 
        submitMeetingData
    } = useEditMeeting();

    return (
        <div className={style.editHeaderContainer}>
            <div className={style.editMeetingText}>
                <h4>Edit meeting</h4>
                <p>Make changes to the meeting</p>
            </div>

            <CustomButton onClick={submitMeetingData} size='defaultButtonSize'>
                Save <span className={style.desktopOnlyShow}>changes</span>
            </CustomButton>
        </div>
    );
};