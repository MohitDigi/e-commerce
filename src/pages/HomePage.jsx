import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import MiddleBanner from "../components/MiddleBanner";
import LogoHeader from "../components/LogoHeader";
import FeatureFooter from "../components/FeatureFooter";
import Cards from "../components/Cards";
import SubCards from "../components/SubCards";
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