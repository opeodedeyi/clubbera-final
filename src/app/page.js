'use client';

import { Fragment, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/header/header";
import MainFooter from "@/components/footer/mainfooter";
import CustomButton from "@/components/utility/custombutton";
import { useUser } from "@/context/UserContext";
import { capitalizeAndTruncateTextWithDot } from "@/utils/textUtils";
import Image from 'next/image'
import "@/app/style/homepage.css"


function WorkCard({ title, text, workimage }) {
  return (
    <div className="homepage-work-card">
      <img className="homepage-work-card-img" src={workimage} alt="" />
      <p className="homepage-work-card-title">
        {title.split('&').map((part, index) => (
          <span key={index}>
            {part}
            {index !== title.split('&').length - 1 && (
              <span className="spicy-normal-text">&</span>
            )}
          </span>
        ))}
      </p>
      <div className="homepage-work-card-body">
        <p className="homepage-work-card-title">
          {title.split('&').map((part, index) => (
            <span key={index}>
              {part}
              {index !== title.split('&').length - 1 && (
                <span className="spicy-normal-text">&</span>
              )}
            </span>
          ))}
        </p>
        <p className="homepage-work-card-text">{text}</p>
      </div>
    </div>
  );
}

function GroupTypeCard({ title, grpimage }) {
  return (
    <div className="homepage-type-group-card">
      <Image className="homepage-group-card-img" src={grpimage} alt={title} width="400" height="400" />
      <p className="homepage-group-card-title">{title}</p>
    </div>
);
}

const NotLoggedIn = () => {
  const worksCards = [
    {
      image: '/explore_main.png',
      title: 'Explore & Discover',
      subtext: 'Discover engaging social experiences on Clubbera. Sign up to explore diverse non-profit clubs matching your interests, find activities and hobbies you love, and foster a vibrant community spirit.',
    },
    {
      image: '/connect_main.png',
      title: 'Connect & Engage',
      subtext: 'Connect with like-minded individuals by joining resonating clubs. Share experiences, ideas, and passions in a user-friendly space. Engage in meaningful conversations, collaborate, and build genuine connections based on shared interests.'
    },
    {
      image: '/customize_main.png',
      title: 'Customize & Grow',
      subtext: "Bring your vision to life as a club creator on Clubbera. Customize your club's dynamics, add moderators, and shape the environment to match your vision. Foster ownership and enhance user satisfaction as your community grows and thrives."
    }
  ];

  const groupTypes = [
    {
      image: '/dance_com.png',
      title: 'Dance community',
    },
    {
      image: '/game_com.png',
      title: 'Game community',
    },
    {
      image: '/gym_com.png',
      title: 'Gym community',
    },
    {
      image: '/cooking_com.png',
      title: 'Cooking community',
    },
    {
      image: '/sport_com.png',
      title: 'Sport community',
    }
  ];

  return (
    <>
      <div className="homepage-hero">
        <div className="homepage-hero-cont">
          <p className="homepage-hero-hype">Your number one community 🥇</p>
          <h1 className="homepage-hero-tagline">Discover, Connect <br className="desk"/>and Thrive <span className="spicy-text">with</span> <br className="desk"/><span className="colored-text">Clubbera</span></h1>
          <p className="homepage-hero-subtag">We connect individuals with local comunities and clubs</p>
          <div className="flex-c homepage-hero-buttons">
            <CustomButton link destination="/creategroup" size="normal-size">Create group</CustomButton>
            <CustomButton link destination="/signup" size="normal-size" coloring="inverse-coloring">Join Clubbera</CustomButton>
          </div>
        </div>

        {/* Hero section glow design */}
        <div className="homepage-hero-glow hero-pos-one"></div>
        <div className="homepage-hero-glow hero-pos-two"></div>
        <div className="homepage-hero-glow hero-pos-three"></div>

        {/* Hero section images */}
        <div className="homepage-hero-image hero-pos-four"></div>
        <div className="homepage-hero-image hero-pos-five"></div>
        <div className="homepage-hero-image hero-pos-six"></div>
        <div className="homepage-hero-image hero-pos-seven"></div>
      </div>

      <div className="homepage-works">
        <div className="homepage-works-content">
          <h2 className="homepage-works-title">How Clubbera <span className="spicy-text">works</span></h2>
          <p className="homepage-works-text">Form new connections with individuals who have common interests through a wide range of physical events. Joining our platform and creating an account is absolutely free.</p>
        </div>

        <div className="homepage-works-cards">
          {worksCards.map((card, index) => (
            <WorkCard key={index} title={card.title} text={card.subtext} workimage={card.image} />
          ))}
        </div>
      </div>

      <div className="homepage-groups">
        <div className="homepage-groups-content">
          <h2 className="homepage-groups-title">Create a <span className="spicy-text">group</span></h2>
          <p className="homepage-groups-text">Start today by creating your dynamic and perfect group.</p>
          <CustomButton link destination="/creategroup" size="normal-size">Create group</CustomButton>
        </div>
        <div className="homepage-groups-main">
          <div className="homepage-groups-main-cards">
            {groupTypes.map((card, index) => (
              <GroupTypeCard key={index} title={card.title} grpimage={card.image} />
            ))}
            {/* duplicate */}
            {groupTypes.map((card, index) => (
              <GroupTypeCard key={index+100} title={card.title} grpimage={card.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const LoggedIn = ({ user, searchParams }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');

  const checkTab = () => {
    if (searchParams.tab) {
      setActiveTab(searchParams.tab);
    } else {
      router.push(`?tab=${'mygroups'}`, undefined, { shallow: true });
      setActiveTab('mygroups');
    }
  };

  useEffect(() => {
    checkTab();
  }, [searchParams]);

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    
    setActiveTab(tabName);
    router.push(`?tab=${tabName}`, undefined, { shallow: true });
  };

  return (
    <>
      <div className="homepage-login-hero">
        <div className="homepage-login-hero-cont">
          <p className="homepage-login-hero-name">Hi {capitalizeAndTruncateTextWithDot(user?.fullName, 15)},</p>
          <p className="homepage-login-hero-speech">Get started today with Clubbera</p>
        </div>
        <CustomButton link destination="/creategroup" size="default-size">
          <div className="homepage-login-hero-innbtn">
            <svg className="mobile-only-show" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M12.0007 5.27325C11.9607 5.26659 11.914 5.26659 11.874 5.27325C10.954 5.23992 10.2207 4.48659 10.2207 3.55325C10.2207 2.59992 10.9874 1.83325 11.9407 1.83325C12.894 1.83325 13.6607 2.60659 13.6607 3.55325C13.654 4.48659 12.9207 5.23992 12.0007 5.27325Z" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3149 10.1267C12.2283 10.28 13.2349 10.12 13.9416 9.64669C14.8816 9.02003 14.8816 7.99336 13.9416 7.36669C13.2283 6.89336 12.2083 6.73336 11.2949 6.89336" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.98031 5.27325C4.02031 5.26659 4.06698 5.26659 4.10698 5.27325C5.02698 5.23992 5.76031 4.48659 5.76031 3.55325C5.76031 2.59992 4.99365 1.83325 4.04031 1.83325C3.08698 1.83325 2.32031 2.60659 2.32031 3.55325C2.32698 4.48659 3.06031 5.23992 3.98031 5.27325Z" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.6676 10.1267C3.75427 10.28 2.7476 10.12 2.04094 9.64669C1.10094 9.02003 1.10094 7.99336 2.04094 7.36669C2.75427 6.89336 3.77427 6.73336 4.6876 6.89336" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.0007 10.2532C7.9607 10.2466 7.91404 10.2466 7.87404 10.2532C6.95404 10.2199 6.2207 9.46657 6.2207 8.53323C6.2207 7.5799 6.98737 6.81323 7.9407 6.81323C8.89403 6.81323 9.6607 7.58657 9.6607 8.53323C9.65404 9.46657 8.9207 10.2266 8.0007 10.2532Z" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.06047 12.3532C5.12047 12.9799 5.12047 14.0066 6.06047 14.6332C7.12714 15.3466 8.8738 15.3466 9.94047 14.6332C10.8805 14.0066 10.8805 12.9799 9.94047 12.3532C8.88047 11.6466 7.12714 11.6466 6.06047 12.3532Z" stroke="#F0F3F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Create <span className="desktop-only-show">new</span>
          </div>
        </CustomButton>
      </div>
      <div className="homepage-login-navigation">
        <ul>
          <li onClick={(e) => handleTabClick(e, 'mygroups')} className={`${activeTab === 'mygroups' ? 'active-navigation-item' : ''}`}>My groups</li>
          <li onClick={(e) => handleTabClick(e, 'upcomingevents')} className={`${activeTab === 'upcomingevents' ? 'active-navigation-item' : ''}`}>Upcoming events</li>
        </ul>
      </div>
    </>
  );
}

export default function Home({ searchParams }) {
  const { user } = useUser();

  return (
    <Fragment>
      <Header />

      {user ?
        <LoggedIn user={user} searchParams={searchParams} />
      :
        <NotLoggedIn />
      }

      <MainFooter/>
    </Fragment>
  )
}
