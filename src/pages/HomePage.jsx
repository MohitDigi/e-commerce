import React from 'react'
import TopHeader from "../components/TopHeader";
import LogoHeader from "../components/LogoHeader";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import MajorCard from '../components/MajorCard';
import SubCards from "../components/SubCards";
import Cards from "../components/Cards";
import MiddleBanner from "../components/MiddleBanner";
import FeatureFooter from "../components/FeatureFooter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
    <div className="container-fluid">
      <header>
        <TopHeader />
        <LogoHeader />
        <Navbar />
      </header>
      <main className="main container-fluid">
        <Slider />
        <Cards />
        <MajorCard/>
        <SubCards />
        {/* <FeatureCard/> */}
      </main>
      <footer className="footer">
        <MiddleBanner />
        <FeatureFooter />
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default HomePage