import { useState } from "react";
import GuideCard from "../../../comp/GuideCard/GuideCard";
import { getStartedData } from "../Data";
import style from "./GetStarted.module.css";
import Link from "next/link";

export default function GetStarted() {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const cardsToDisplay = showAll ? getStartedData : getStartedData.slice(0, 4);

  return (
    <>
      <div className={style.getStartedContainer}>
        <div className={style.getStartedTitle}>
          <h2>Guides to get started</h2>
          {getStartedData.length > 4 && (
            <p onClick={toggleShowAll}>
              {showAll ? "Show Less" : "View all topics"}
            </p>
          )}
        </div>
        <div className={style.getStartedCards}>
          {cardsToDisplay.map((card, index) => (
            <Link key={card.id} href={`/help/${card.id}`} passHref>
              <GuideCard
                title={card.title}
                icon={card.icon}
                content={card.content}
                image={card.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
