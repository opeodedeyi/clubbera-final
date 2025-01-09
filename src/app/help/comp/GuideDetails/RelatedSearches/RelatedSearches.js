import { relatedSearchesData } from "../../../pages/Guests/Data";
import GuideCard from "../../GuideCard/GuideCard";
import style from "./RelatedSearches.module.css";

export default function RelatedSearches() {
  return (
    <>
      <div className={style.relatedSearchesContainer}>
        <p className={style.title}>Related searches</p>
        <div className={style.relatedSearchesCards}>
          {relatedSearchesData.map((card, index) => (
            <GuideCard
              key={index}
              title={card.title}
              icon={card.icon}
              content={card.content}
              image={card.image}
              width="100%"
            />
          ))}
        </div>
      </div>
    </>
  );
}
