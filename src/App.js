import "animate.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopHeader from "./components/TopHeader";
import MiddleBanner from "./components/MiddleBanner";
import Cart from "./components/Cart";
import LogoHeader from "./components/LogoHeader";
import FeatureFooter from "./components/FeatureFooter";
function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <TopHeader />
        </div>
        <div>
          <LogoHeader/>
        </div>
        <div>
          <Navbar />
        </div>
      </header>
      <main className="main my-4">
        <div className="slider my-4">
          <Slider />
        </div>
        <div className="card">
          <Cart/>
        </div>
      </main>
      <footer className="footer">
        <div>
          <MiddleBanner />
        </div>
        <div>
          <FeatureFooter/>
        </div>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
