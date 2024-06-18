import HeroSection from "@/app/(general)/homepage/HomepageHero";
import WorksSection from "@/app/(general)/homepage/HomepageWorks";
import GroupsSection from "@/app/(general)/homepage/HomepageGroup";


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