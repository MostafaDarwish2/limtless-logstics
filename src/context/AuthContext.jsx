import axios from "axios";
import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Create Auth Context
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

// Auth Provider Component

function AuthProvider({ children }) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        dispatch({ type: "LOGIN", payload: decodedUser });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  async function login(email, password) {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://logistics-kappa-three.vercel.app/api/v1/auth/login",
        { email, password }
      );

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        const decodedUser = jwtDecode(data.token);
        dispatch({ type: "LOGIN", payload: decodedUser });
        navigate("/");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "فشل تسجيل الدخول، حاول مرة أخرى"
      );
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
