import { useCreateMeeting } from '@/app/context/CreateMeetingContext';
import CustomButton from '@/components/utility/CustomButton/CustomButton';
import style from './Footer.module.css';


export default function CreateMeetingFooter() {
    const {
        currentTab,
        goToNextPage,
        goToPreviousPage 
    } = useCreateMeeting();

    return (
        <div className={style.footerBtns}>
            { currentTab === 2 && 
                <CustomButton
                    size='defaultButtonSize' 
                    coloring='inverseColoring'
                    onClick={goToPreviousPage}>
                    Back
                </CustomButton>
            }
            

            <CustomButton
                size='defaultButtonSize'
                onClick={goToNextPage}>
                { currentTab === 1 ? "Next" : "Create meeting" }
            </CustomButton>
        </div>
    )
}