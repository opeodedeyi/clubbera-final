import HelpHero from './comp/HelpHero/HelpHero';
import HelpNav from './comp/HelpNav/HelpNav';
import HelpNavigation from "./comp/HelpNavigation/HelpNavigation";

export default function Help() {
    return (
      <div className="centerPage">
        <HelpNav />
        <HelpHero />
        <HelpNavigation />
      </div>
    );
}