import Style from "./searchCard.module.css";
import { cardData } from "./data";
import GroupCard from "@/components/groupCard/groupCard";
const SearchCard = () => {
  return (
    <>
      <div className={Style.searchContainer}>
        <h4>Football communities within 25 miles</h4>
        <p>These are football communities within 25 miles</p>
      </div>
      <div>
        <GroupCard data={cardData} />
      </div>
    </>
  );
};

export default SearchCard;
