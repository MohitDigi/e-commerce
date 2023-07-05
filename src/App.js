import "animate.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopHeader from "./components/TopHeader";
import MiddleBanner from "./components/MiddleBanner";
import LogoHeader from "./components/LogoHeader";
import FeatureFooter from "./components/FeatureFooter";
import Cards from "./components/Cards";
import SubCards from "./components/SubCards";
import FeatureCard from "./components/FeatureCard";
// import Card from "./components/Card";
function App() {
  return (
    <div className="container">
      <header>
        <TopHeader />
        <LogoHeader />
        <Navbar />
      </header>
      <main className="main">
        {/* <Slider /> */}
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
  );
}

export default App;
