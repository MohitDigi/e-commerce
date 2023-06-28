import "animate.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopHeader from "./components/TopHeader";
import MiddleBanner from "./components/MiddleBanner";
function App() {
  return (
    <div className="App">
      <div>
        <TopHeader />
      </div>
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <div>
          <Slider />
        </div>
      </div>
      <div className="footer">
        <div>
          <MiddleBanner />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
