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
      <header>
        <div>
          <TopHeader />
        </div>
        <div>
          <Navbar />
        </div>
      </header>
      <main className="main">
        <div className="slider">
          <Slider />
        </div>
      </main>
      <footer className="footer">
        <div>
          <MiddleBanner />
        </div>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
