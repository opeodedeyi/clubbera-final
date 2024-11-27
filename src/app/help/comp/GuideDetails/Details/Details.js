import style from "./Details.module.css";
import helpBanner from "../../../../../../public/helpBanner.png";
import Image from "next/image";
import RelatedSearches from "../RelatedSearches/RelatedSearches";

export default function Details() {
  return (
    <>
      <div className={style.createCommunityContainer}>
        <Image src={helpBanner} alt="Banner" className={style.helpBanner} />
        <div className={style.createCommunityContents}>
          <div className={style.helpDetails}>
            <h2 className={style.helpTitle}>How to create a community</h2>
            <p className={style.helpSteps}>
              The following are the steps to follow when creating a community:
            </p>
            <ul className={style.steps}>
              <li>
                <p className={style.stepsTitle}>
                  1. Click{" "}
                  <span className={style.mainPoints}>"Create Community"</span>
                </p>
                <p>
                  Start by clicking the Create Community button located on your
                  dashboard. This will open a form to get your community
                  started.
                </p>
              </li>
              <li>
                <p className={style.stepsTitle}>
                  2. Fill in the Community Details
                </p>
                <p className={style.stepsSubTitle}>
                  In the form, provide details about your community:
                </p>

                <li>
                  <p>
                    <span className={style.mainPoints}>Community Name:</span>{" "}
                    Choose a catchy, unique name for your group.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={style.mainPoints}>Description:</span> Give
                    a brief overview of the community’s focus and what members
                    can expect.
                  </p>
                </li>
                <li>
                  <p>
                    <span className={style.mainPoints}>Tags/Interests:</span>{" "}
                    Select relevant tags or topics to help like-minded members
                    find your community.
                  </p>
                </li>
              </li>
              <li>
                <p className={style.stepsTitle}>3. Set Privacy Preferences</p>
                <p>
                  Decide if you want the community to be public (anyone can
                  join) or private (members need approval).
                </p>
              </li>
              <li>
                <p className={style.stepsTitle}>4. Submit and Review</p>
                <p>
                  Once you've filled out the details, click{" "}
                  <span className={style.mainPoints}>Submit</span>. Review your
                  community settings, and start inviting members!
                </p>
              </li>
            </ul>
          </div>
          <RelatedSearches />
        </div>
      </div>
    </>
  );
}
