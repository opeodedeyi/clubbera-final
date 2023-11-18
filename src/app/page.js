'use client';

import { Fragment } from "react";
import Header from "../components/header/header";
import MainFooter from "../components/footer/mainfooter";
import CustomButton from "../components/utility/custombutton";
import Image from 'next/image'
import "./style/homepage.css"

import { useState } from 'react';

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
            <CustomButton link destination="/login" size="normal-size">Create group</CustomButton>
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
          <CustomButton link destination="/login" size="normal-size">Create group</CustomButton>
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

const LoggedIn = () => {
  return (
    <>
      
    </>
  );
}

export default function Home() {
  const [user, setUser] = useState(false);

  return (
    <Fragment>
      <Header />

      {user ?
        <LoggedIn />
      :
        <NotLoggedIn />
      }

      <MainFooter/>
    </Fragment>
  )
}
