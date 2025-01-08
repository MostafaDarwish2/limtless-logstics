import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Landingpage from "./pages/LandingPage/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shipping from "./pages/shipping/Shipping";

function App() {
  return (
    <>
      <div className="header relative">
        {/* navbar */}
        <BrowserRouter>
          <Header />
          {/* landing page */}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/track" element={<Shipping />} />
          </Routes>

          {/* footer */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
