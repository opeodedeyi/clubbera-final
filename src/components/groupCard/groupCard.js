import Style from "./groupcard.module.css";
import Image from "next/image";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
const GroupCard = ({ data }) => {
  return (
    <div className={Style.cardWrapper}>
      {data.map((card, index) => (
        <div key={index} className={Style.cardContainer}>
          <div className={Style.cardDate}>
            <h5>{card.date}</h5>
          </div>
          <h4 className={Style.cardTitle}>{card.title}</h4>
          <div className={Style.cardLocation}>
            <p className={Style.locationIcon}>{card.locationIcon}</p>
            <p>{card.location}</p>
          </div>
          <p className={Style.cardDescription}>{card.description}</p>
          <div className={Style.cardTag}>
            <p
              className={`${Style.tag} ${
                card.tag === "Public" ? Style.tagPublic : Style.tagPrivate
              }`}
            >
              {card.tag}
            </p>
            <div className={Style.membersAvatars}>
              {card.members.slice(0, 2).map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={`Participant ${index + 1}`}
                  className={Style.avatar}
                  height={"100%"}
                  width={"100%"}
                />
              ))}
              {card.members.length > 3 && (
                <div className={Style.avatarCount}>
                  +{card.members.length - 3}
                </div>
              )}
            </div>
          </div>
          <div className={Style.cardButton}>
            <CustomButton>{card.btn}</CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupCard;
