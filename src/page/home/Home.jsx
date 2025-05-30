import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HowItWorksSection from "../../components/HowItWSComponents/HowItWorksSection";
import RecentProjects from "../../components/RecentProjects/RecentProjects";

function Home() {
    return ( 
     <div className="container  mx-auto">
      <Header/>
      <HowItWorksSection/>
      <RecentProjects/>
      <AboutUsSection/>
        <Footer/>

     </div>
     );
}

export default Home;