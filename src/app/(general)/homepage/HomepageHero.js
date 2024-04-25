'use client';

import CustomButton from "@/components/utility/custombutton";
import "@/app/style/homepage.css";

const HeroSection = () => (
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
);

export default HeroSection;