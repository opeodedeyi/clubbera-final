'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import CreateMeeting from "@/app/(general)/createMeeting/CreateMeeting";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Modal from "@/components/popup/Modal/Modal";
import style from "./BasicDetailsHeader.module.css";


export default function BasicDetailsHeader({ group }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString, removeQueryParam } = useQueryParams();

  const isModalOpen = searchParams.get('createMeeting') === 'true';

  const openModal = () => {
    router.push(`?${createQueryString('createMeeting', 'true')}`, { scroll: false });
  };

  const closeModal = () => {
    router.push(`?${removeQueryParam('createMeeting')}`, { scroll: false });
  };

  return (
    <>
      <div className={style.basicDetailsWrapper}>
        <div className={style.basicDetails}>
          <div className={style.basicDetailsTop}>
            <h4>{group.title}</h4>
            <p className={style.basicDetailsTagline}>{group.tagline}</p>
          </div>
          <div className={style.basicDetailsBottom}>
            <div className={style.keyDetailItem}>
                <div className={style.keyDetailIconRounded}>
                    <img src="/location.svg" alt="<"/>
                </div>
                <span className={style.keyDetailItemText}>{group.location}</span>
            </div>
            <div className={style.keyDetailItem}>
                <div className={style.keyDetailIconRounded}>
                    <img src="/people.svg" alt="<"/>
                </div>
                <span className={style.keyDetailItemText}>{`${group.member_count} member ${(group.member_count > 1) ? 's' : ''}`}</span>
            </div>
          </div>
        </div>

        <CustomButton onClick={openModal} coloring="inverseColoring">Create meeting</CustomButton>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="775px" displayType="rightSide" hasBack={true}>
        <CreateMeeting/>
      </Modal>
    </>
  );
}
