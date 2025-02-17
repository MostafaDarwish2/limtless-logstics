import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Landingpage from "./pages/LandingPage/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shipping from "./pages/shipping/Shipping";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.jsx";
import GlobalShipping from "./pages/globalShipping/GlobalShipping.jsx";

function App() {
  return (
    <div className="header relative">
      {/* BrowserRouter must wrap everything */}
      <BrowserRouter>
        <AuthProvider>
          {/* Navbar / Header */}
          <Header />

          {/* All Routes Combined */}
          <Routes>
            {/* Public Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landingpage />} />

            {/* Protected Routes */}
            <Route
              path="/track"
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              }
            />
            <Route
              path="/global"
              element={
                <ProtectedRoute>
                  <GlobalShipping />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Footer */}
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
