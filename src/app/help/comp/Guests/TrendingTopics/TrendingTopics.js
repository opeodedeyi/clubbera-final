import { useState } from "react";
import GuideCard from "../../GuideCard/GuideCard";
import { trendingTopicsData } from "../Data";
import style from "./TrendingTopics.module.css";

export default function TrendingTopics() {
     const [showAll, setShowAll] = useState(false);
     const toggleShowAll = () => setShowAll(!showAll);
     const cardsToDisplay = showAll
       ? trendingTopicsData
       : trendingTopicsData.slice(0, 4);
  return (
    <>
      <div className={style.trendingTopicsContainer}>
        <div className={style.trendingTopicsTitle}>
          <h2> Trending topics</h2>
          {trendingTopicsData.length > 4 && (
            <p onClick={toggleShowAll}>
              {showAll ? "Show Less" : "View all topics"}
            </p>
          )}
        </div>
        <div className={style.trendingCards}>
          {cardsToDisplay.map((card, index) => (
            <GuideCard
              key={index}
              title={card.title}
              icon={card.icon}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
