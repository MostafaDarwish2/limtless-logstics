import "./App.css";
import Header from "./components/Header/Header";
import Landingpage from "./pages/LandingPage/Landingpage";

function App() {
  return (
    <>
      <div className="header relative">
        <Header />
        <Landingpage />
      </div>
    </>
  );
}

export default App;
