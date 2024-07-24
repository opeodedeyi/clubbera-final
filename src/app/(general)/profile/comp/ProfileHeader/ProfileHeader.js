'use client';

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import Modal from "@/components/popup/Modal/Modal";
import EditProfile from "@/app/(general)/editProfile/EditProfile";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Style from "./ProfileHeader.module.css";


export default function ProfileHeader({user}){
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString, removeQueryParam } = useQueryParams();

  const isModalOpen = searchParams.get('edit') === 'true';

  const openModal = () => {
    router.push(`?${createQueryString('edit', 'true')}`, { scroll: false });
  };

  const closeModal = () => {
    router.push(`?${removeQueryParam('edit')}`, { scroll: false });
  };

  return (
    <>
      <div className={Style.profileHeader}>
        <div className={Style.profileHeaderDetails}>
          <div className={Style.profileHeaderDetailsPP}>
            <img src={user?.avatar || "/profile.png"} />
          </div>
          <div className={Style.profileHeaderDetailsText}>
            <h4>{user?.full_name}</h4>
            <p>
              <HiOutlineLocationMarker size="14px" color="var(--color-text-main)" />
              {user?.location || "not set"}
            </p>
          </div>
        </div>

        <CustomButton onClick={openModal} coloring="inverseColoring">Edit profile</CustomButton>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="775px" displayType="rightSide" hasBack={true}>
        <EditProfile/>
      </Modal>
    </>
  );
};
