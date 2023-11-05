'use client';

import Header from "../../../components/header/header";
import CustomButton from "../../../components/utility/custombutton";
import GroupTag from "../../../components/utility/grouptag";
import '../../style/groupdetails.css'


const GroupDetails = ({ params }) => {
    return (
        <>
            <Header />

            <div className="group-details-main">
                <div className="group-details-back-header">
                    <CustomButton coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span className="desktop-only-show">Back</span></CustomButton>
                </div>
                <div className="group-details-keydetails">
                    <div className="group-keydetails-major">
                        {/* style from here */}
                        <div className="group-keydetails-major-image">
                            <img src="/group.png" alt="" />
                        </div>
                        <div className="group-keydetails-major-text">
                            <div className="group-keydetails-text-inner">
                                <div className="group-keydetails-text-gen">
                                    <div className="group-keydetails-tit-pub">
                                        <GroupTag privategroup={false} viewtype="desktop-only-show"/>

                                        <h4>Positivity lovers club <GroupTag privategroup={false} viewtype="mobile-only-show"/></h4>
                                        {/* tagline goes here when it is added to the backend */}
                                    </div>
                                    <div className="group-keydetails-loc-mem">
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/location.svg" alt="<"/></div><span>Leeds, United Kingdom</span></div>
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/people.svg" alt="<"/></div><span>1278 members</span></div>
                                    </div>
                                </div>
                                <div className="group-keydetails-text-buttons">
                                    <CustomButton coloring="default-coloring" size="normal-button-size">Join Group</CustomButton>
                                    <CustomButton coloring="inverse-coloring" size="normal-button-size"><span>Share</span><img src="/downArrow.svg" alt="<"/></CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-details-navigation">
                    <ul>
                        <li className={`group-details-navigation-item active-navigation-item`}>About</li>
                        <li className={`group-details-navigation-item`}>Events</li>
                        <li className={`group-details-navigation-item`}>Discussions</li>
                        <li className={`group-details-navigation-item`}>Members</li>
                        <li className={`group-details-navigation-item`}>Photos</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default GroupDetails;