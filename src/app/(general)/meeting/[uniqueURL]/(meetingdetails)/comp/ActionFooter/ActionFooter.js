'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Modal from "@/components/popup/Modal/Modal";
import EditMeeting from "@/app/(general)/editMeeting/EditMeeting";
import { getTimeUntilMeeting } from "@/utils/dateUtils";
import { useRSVP } from '@/hooks/useRSVP';
import style from "./ActionFooter.module.css";


export default function ActionFooter({ meeting }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { removeQueryParam } = useQueryParams();
    const { message, isPastEvent } = getTimeUntilMeeting(
        meeting?.date_of_meeting, 
        meeting?.time_of_meeting,
        meeting?.duration
    );
    const { ctaText, handleRSVPAction, isLoading } = useRSVP(
        meeting?.user_status,
        meeting?.unique_url,
    );

    const handleButtonClick = () => {
        if (isPastEvent) {
            console.log('The event has already ended.');
        } else {
            handleRSVPAction();
        }
    };

    const isModalOpen = searchParams.get('editMeeting') === 'true';

    const closeModal = () => {
        router.push(`?${removeQueryParam('editMeeting')}`, { scroll: false });
    };
    
    return (
        <>
            <div className={style.actionFooter}>
                { isPastEvent &&
                    <div className={style.actionFooterText}>
                        <h3 className={style.actionFooterTextTitle}>{message}</h3>
                    </div>
                }

                { ctaText === "Edit RSVP" && !isPastEvent &&
                    <div className={style.actionFooterText}>
                        <h3 className={style.actionFooterTextTitle}>YOU ARE GOING</h3>
                        <p className={style.actionFooterTextDesc}>{message}</p>
                    </div>
                }

                { ctaText === "waitlisted" && !isPastEvent &&
                    <div className={style.actionFooterText}>
                        <h3 className={style.actionFooterTextTitle}>YOU'R ON THE WAITLIST</h3>
                        <p className={style.actionFooterTextDesc}>Waiting for a spot to open up</p>
                    </div>
                }

                { ctaText === "Attend" && !isPastEvent &&
                    <div className={style.actionFooterText}>
                        <h3 className={style.actionFooterTextTitle}>FREE</h3>
                        <p className={style.actionFooterTextDesc}>{message}</p>
                    </div>
                }

                { ctaText === "Edit activity" && !isPastEvent &&
                    <div className={style.actionFooterText}>
                        <h3 className={style.actionFooterTextTitle}>CHANGE SETTINGS</h3>
                        <p className={style.actionFooterTextDesc}>{message}</p>
                    </div>
                }

                <CustomButton
                    onClick={handleButtonClick}
                    size="normalSize"
                    coloring={ ctaText === "Edit RSVP" || ctaText === "waitlisted" ? "inverseColoring" :"defaultColoring"}
                    disabled={isPastEvent || isLoading} >
                    { isPastEvent ? 'Past activity' : ctaText }
                </CustomButton>
            </div>

            {/* popup for not going (edit RSVP) */}

            <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="775px" displayType="rightSide" hasBack={true}>
                <EditMeeting meeting={meeting}/>
            </Modal>
        </>
    );
};