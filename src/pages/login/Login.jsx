import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import bgimg from "../../assets/main.jpg";

export default function Login() {
  let navigate = useNavigate();
  const { login, isAuthenticated, loading, error } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      return;
    }

    try {
      await login(user.email, user.password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-40 top-0" />
      <div className="max-w-[50%] mx-auto my-20 p-8 bg-white/30 backdrop-blur-sm shadow-lg rounded-md border border-white/30">
        <h1 className="text-center text-white text-3xl font-medium mb-10">
          تسجيل الدخول
        </h1>
        <div className="">
          <form className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-lg font-bold">{error}</p>}
            <label className="text-lg font-medium">البريد الإليكتروني: </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="rounded-md p-2 border border-black"
            />
            <label className="text-lg font-medium">كلمة المرور :</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="rounded-md p-2 border border-black"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="border-2 border-yellow-400 px-10 py-3 rounded-md text-gray-50 hover:bg-yellow-400"
            >
              {loading ? "تحميل..." : "تسجيل الدخول"}
            </button>
          </form>
        </div>

        <div className="flex justify-center mt-5">
          <span className="text-white">
            لا يوجد حساب{" "}
            <a href="#" className="text-yellow-400 hover:text-gray-800">
              سجل الحساب الجديد
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
