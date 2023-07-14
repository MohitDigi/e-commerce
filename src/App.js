import "animate.css";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-product" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter> */}
          {/* <ViewProduct /> */}
          <Cart/>
          {/* <LoginPage/> */}
          {/* <Signup/> */}
    </>
  );
}

export default App;
