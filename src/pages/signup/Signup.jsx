import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../assets/main.jpg";

export default function Signup() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError((prev) => {
      return { ...prev, [e.target.name]: "" };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user.password !== user.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "كلمتا السر غير متطابقتين",
      }));
      return;
    }
    try {
      let { data } = await axios.post(
        `https://logistics-kappa-three.vercel.app/api/v1/auth/signup`,
        user
      );
      if (data.status === "success") {
        setError({});
        setLoading(false);
        navigate("/login");
      }
    } catch (e) {
      setLoading(false);
      // Handling API error response if available
      if (e.response?.data?.message) {
        setError({ apiError: e.response.data.message });
      } else {
        setError({ apiError: "حدث خطأ أثناء التسجيل. حاول مرة أخرى." });
      }
    }
  };

  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-40 top-0" />
      <div className="flex justify-center items-center py-5">
        <div className="bg-white p-8 w-full max-w-[50%] bg-white/30 backdrop-blur-sm shadow-lg rounded-md border border-white/30">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            تسجيل مستخدم جديد
          </h1>
          {error.apiError && (
            <p className="text-red-500 text-center">{error.apiError}</p>
          )}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
            <label className="text-gray-700 font-medium">الاسم:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              required
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
            <label className="text-gray-700 font-medium">
              البريد الالكتروني:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <label className="text-gray-700 font-medium">كلمة السر:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Confirm Password */}
            <label className="text-gray-700 font-medium">
              تأكيد كلمة السر:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              required
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* PhoneNumber */}
            {error.phoneNumber && (
              <p className="text-red-500 text-sm">{error.phoneNumber}</p>
            )}
            <label className="text-gray-700 font-medium">رقم الهاتف:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              required
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="border-2 border-yellow-400 px-10 py-3 rounded-md text-gray-50 hover:bg-yellow-400 duration-300"
            >
              {loading ? "تحميل..." : "تسجيل المستخدم"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
