import Header from "../../components/header/Header";
import HowItWorksSection from "../../components/HowItWSComponents/HowItWorksSection";
import RecentProjects from "../../components/RecentProjects/RecentProjects";

function Home() {
    return ( 
     <div className="container  mx-auto">
      <Header/>
      <HowItWorksSection/>
      <RecentProjects/>
     </div>
     );
}

export default Home;