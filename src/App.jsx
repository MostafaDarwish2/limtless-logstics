import "./App.css";
import Header from "./components/Header/Header";
import Landingpage from "./pages/LandingPage/Landingpage";

function App() {
  return (
    <>
      <div className="header relative">
        {/* navbar */}
        <Header />
        {/* landing page */}
        <Landingpage />
      </div>
    </>
  );
}

export default App;
