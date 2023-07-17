import "animate.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter> */}
      {/* <HomePage /> */}
      {/* <ViewProduct /> */}
      {/* <Cart/> */}
      {/* <LoginPage/> */}
      <Signup/>
    </>
  );
}

export default App;
