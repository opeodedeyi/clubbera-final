import HeroSection from "./comp/HomepageHero/HomepageHero";
import WorksSection from "./comp/HomepageWorks/HomepageWorks";
import GroupsSection from "./comp/HomepageGroup/HomepageGroup";


const worksCards = [
    {
        image: '/homepage/explore.jpg',
        title: 'Discover Communities & Events',
        subtext: 'Start exploring the amazing communities and events on Clubbera. Search for keywords that match your interests, or browse through our curated categories. From hiking adventures to cooking classes, there\'\s something for everyone!',
    },
    {
        image: '/homepage/attend.jpg',
        title: 'Attend Events & Make Connections',
        subtext: 'Now for the fun part \–\ attending events and meeting new people! Clubbera events are all about forming genuine connections through shared experiences. So go ahead, strike up a conversation, and let the good times roll!'
    },
    {
        image: '/homepage/create.jpg',
        title: 'Create Your Own Community or Event',
        subtext: "Can't find a community or event that matches your interests? No problem \–\ create your own! It's completely free to start a new community on Clubbera. Plus, you'll have the satisfaction of bringing people together and watching your community grow."
    }
];

const groupTypes = [
    {
        image: '/homepage/running.jpg',
        title: 'Athletics',
    },
    {
        image: '/homepage/basketballl.jpg',
        title: 'Hoop lovers',
    },
    {
        image: '/homepage/chess.jpg',
        title: 'Strategy Masters',
    },
    {
        image: '/homepage/creatives.jpg',
        title: 'Creatives',
    },
    {
        image: '/homepage/football.jpg',
        title: 'Goal Getters',
    },
    {
        image: '/homepage/reading.jpg',
        title: 'Page Turners',
    },
    {
        image: '/homepage/womenInTech.jpg',
        title: 'Tech Trailblazers',
    },
    {
        image: '/homepage/hiking.jpg',
        title: 'Adventure Seekers',
    },
    {
        image: '/homepage/dancing.jpg',
        title: 'Rhythm Nation',
    },
    {
        image: '/homepage/safe.jpg',
        title: 'Safe Spaces',
    },
];

const HomepageContent = () => {  
    return (
        <>
            <HeroSection />
            <WorksSection works={worksCards} />
            <GroupsSection groupTypes={groupTypes} />
        </>
    );
}

export default HomepageContent;