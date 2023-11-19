'use client';

import Header from "../../../components/header/header";
import MainFooter from "../../../components/footer/mainfooter";
import CustomButton from "../../../components/utility/custombutton";
import GroupTag from "../../../components/utility/grouptag";
import DiscussionCard from "../../../components/cards/discussioncard";
import SmallMemberCard from "../../../components/cards/smallmembercard";
import '../../style/groupdetails.css';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const AboutSection = ({description, location, date, time}) => (
    <div id="about" className="group-other">
        <div className="group-about-description">
            <h5 className="group-about-title">Group description</h5>
            <p className="group-about-content">{description}</p>
        </div>
        <div className="group-meeting-time">
            <div className="group-meeting-time-container">
                <h5 className="group-about-title">Next Meeting time</h5>
                <div className="group-meeting-items">
                    <div className="meeting-time-item">
                        <div className="meeting-time-item-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.99992 8.95346C9.14867 8.95346 10.0799 8.02221 10.0799 6.87346C10.0799 5.7247 9.14867 4.79346 7.99992 4.79346C6.85117 4.79346 5.91992 5.7247 5.91992 6.87346C5.91992 8.02221 6.85117 8.95346 7.99992 8.95346Z" stroke="#777474" stroke-width="1.2"/>
                                <path d="M2.4133 5.66016C3.72664 -0.113169 12.28 -0.106502 13.5866 5.66683C14.3533 9.0535 12.2466 11.9202 10.4 13.6935C9.05997 14.9868 6.93997 14.9868 5.5933 13.6935C3.7533 11.9202 1.64664 9.04683 2.4133 5.66016Z" stroke="#777474" stroke-width="1.2"/>
                            </svg>
                        </div>
                        <div className="meeting-time-item-text">
                            <p className="meeting-time-item-title">Location</p>
                            <p className="meeting-time-item-content">{location}</p>
                        </div>
                    </div>
                    <div className="meeting-time-item">
                        <div className="meeting-time-item-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.33325 1.3335V3.3335" stroke="#777474" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6667 1.3335V3.3335" stroke="#777474" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.33325 6.06006H13.6666" stroke="#777474" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#777474" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.4632 9.13314H10.4692" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.4632 11.1331H10.4692" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.99691 9.13314H8.0029" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.99691 11.1331H8.0029" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.52962 9.13314H5.53561" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.52962 11.1331H5.53561" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="meeting-time-item-text">
                            <p className="meeting-time-item-title">Date</p>
                            <p className="meeting-time-item-content">{date}</p>
                        </div>
                    </div>
                    <div className="meeting-time-item">
                        <div className="meeting-time-item-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14.6666 8.00016C14.6666 11.6802 11.6799 14.6668 7.99992 14.6668C4.31992 14.6668 1.33325 11.6802 1.33325 8.00016C1.33325 4.32016 4.31992 1.3335 7.99992 1.3335C11.6799 1.3335 14.6666 4.32016 14.6666 8.00016Z" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684" stroke="#777474" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="meeting-time-item-text">
                            <p className="meeting-time-item-title">Time</p>
                            <p className="meeting-time-item-content">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
  
const EventsSection = () => (
    <div id="events" className="group-event">
        <div className="group-event-title">
            <p className="group-event-title-text">Upcoming events</p>
        </div>
    </div>
);

const DiscussionSection = ({discussions}) => {
    return (
        <div id="discussions" className="group-discussion">
            <p className="group-event-title-text">Discussions { `(${discussions.length})` }</p>
            <div className="group-discussion-container">
                {discussions.map((discussion, index) => (
                    <DiscussionCard 
                        key={index}
                        name={discussion.owner.fullName}
                        comment={discussion.comment}
                        likeCount={discussion.likeCount}
                        replyCount={discussion.replyCount}
                        timeSince={discussion.timeSince}/>
                ))}
            </div>
        </div>
    );
};

const MemberSection = ({organizers, members}) => {
    return (
        <div id="members" className="group-members">
            <div className="group-members-container">
                <p className="group-members-title-text">ORGANIZERS</p>
                <div className="group-members-cards-container">
                    {organizers.map((person, index) => (
                        <SmallMemberCard
                            key={index}
                            name={person.name} 
                            role={person.role} 
                            date={person.date}/>
                    ))}
                </div>
            </div>

            <div className="group-members-container">
                <p className="group-members-title-text">OTHER MEMBERS</p>
                <div className="group-members-cards-container">
                    {members.map((person, index) => (
                        <SmallMemberCard 
                            key={index+100}
                            name={person.name} 
                            role={person.role} 
                            date={person.date}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GroupDetails = ({ params }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');
    const [description, setDescription] = useState('Picture this: A vibrant community nestled in the heart of the United Kingdom, uniting individuals who are passionate about spreading the contagious spirit of positivity. Here, we are not just enthusiasts; we are advocates, champions, and connoisseurs of all things uplifting. In the Positivity Lovers Club, we have created a haven for those who believe that positivity is not just a mindset; it is a way of life. We are the ones who look for silver linings on even the cloudiest of days, and we ave turned glass half full into an art form. So, if you are a lover of sunny dispositions, a connoisseur of good vibes, and a collector of heartwarming stories, the Positivity Lovers Club in the UK is the perfect place for you. Join us in our quest to connect, inspire, and uplift, because we know that together, we can make the world a brighter, more cheerful place. 🌟💖');
    const [location, setLocation] = useState('The Man Behind The Curtain, Vicar Lane, Leeds, United Kingdom');
    const [date, setDate] = useState('24 Sep, 2023');
    const [time, setTime] = useState('3:00 PM')
    const [discussions, setDiscussions] = useState([{
        'owner': {
            "fullName": "David Odedeyi",
            "profilePhoto": ""
        },
        "comment": "Hey there, fellow positivity lovers! 😄 I hope this message finds you all in high spirits.",
        "likeCount": 2,
        "replyCount": 1,
        "timeSince": "2 hours ago"
    },
    {
        'owner': {
            "fullName": "sandra Mitome",
            "profilePhoto": ""
        },
        "comment": "Glad to be part of this new community",
        "likeCount": 20,
        "replyCount": 0,
        "timeSince": "10 minutes ago"
    }])

    const [organizers, setOrganizers] = useState([{
        'name': "Daniel Roberts",
        'role': "Co-organizer",
        'date': "Jun 2023"
    },
    {
        'name': "Sandra Benson",
        'role': "Co-organizer",
        'date': "May 2023"
    }])

    const [members, setMembers] = useState([{
        'name': "Modupe Odedeyi",
        'role': "Member",
        'date': "Nov 2023"
    },
    {
        'name': "Boluwatife Faith Oluwaseun",
        'role': "Member",
        'date': "Dec 2023"
    }])

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash)  {
            setActiveTab(hash);
        } else {
            setActiveTab('about');
        }
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`#${tabName}`, undefined, { shallow: true });
    };

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
                        <li onClick={() => handleTabClick('about')} className={`group-details-navigation-item ${activeTab === 'about' ? 'active-navigation-item' : ''}`}>About</li>
                        <li onClick={() => handleTabClick('events')} className={`group-details-navigation-item ${activeTab === 'events' ? 'active-navigation-item' : ''}`}>Events</li>
                        <li onClick={() => handleTabClick('discussions')} className={`group-details-navigation-item ${activeTab === 'discussions' ? 'active-navigation-item' : ''}`}>Discussions</li>
                        <li onClick={() => handleTabClick('members')} className={`group-details-navigation-item ${activeTab === 'members' ? 'active-navigation-item' : ''}`}>Members</li>
                        {/* <li onClick={() => handleTabClick('photos')} className={`group-details-navigation-item ${activeTab === 'photos' ? 'active-navigation-item' : ''}`}>Photos</li> */}
                    </ul>
                </div>

                {activeTab === 'about' && <AboutSection description={description} location={location} date={date} time={time}/>}
                {activeTab === 'events' && <EventsSection/>}
                {activeTab === 'discussions' && <DiscussionSection discussions={discussions}/>}
                {activeTab === 'members' && <MemberSection members={members} organizers={organizers}/>}
            </div>

            <MainFooter/>
        </>
    );
}

export default GroupDetails;