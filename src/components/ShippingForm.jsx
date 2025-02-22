import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import img3 from "../assets/global/image3.webp";
import whiteBox from "../assets/landingPage/box-white.svg";
import ArCountries from "../data/countries.json";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function ShippingForm() {
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [shippingData, setShippingData] = useState({
    firstName: user?.name || "",
    lastName: "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    country: "",
    shippingType: "",
    receiverName: "",
    receiverAddress: "",
    receiverPhone: "",
    weight: "",
    dimensions: "",
    breakable: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    trackingNumber: "",
    totalPrice: "",
  });

  const handleChange = (e) => {
    setShippingData({ ...shippingData, [e.target.id]: e.target.value });
  };

  async function shipping() {
    setLoading(true);
    await axios
      .post("http://127.0.0.1:3000/api/v1/shipping", shippingData, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response);
        response.data.status === "success" &&
          setShippingData({
            firstName: user?.name || "",
            lastName: "",
            email: user?.email || "",
            phoneNumber: user?.phoneNumber || "",
            country: "",
            shippingType: "",
            receiverName: "",
            receiverAddress: "",
            receiverPhone: "",
            weight: "",
            dimensions: "",
            breakable: "",
          });
        setLoading(false);
        setShippingInfo({
          trackingNumber: response.data.data.trackingNumber,
          totalPrice: response.data.data.totalPrice,
        });
        setIsOpen(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    shipping();
    console.log(shippingData);
  };

  return (
    <>
      <div className="relative h-[1200px]">
        {/* Background Image */}
        <img
          src={img3}
          alt=""
          className="absolute w-full h-full top-0 mx-auto"
        />
        <div className="absolute bg-[#f7be30] top-0 w-full h-full opacity-95" />

        {/* Form Container */}
        <div className="absolute h-[600px] top-0 text-center mx-auto w-full py-24">
          <img src={whiteBox} alt="" className="mx-auto" />
          <h3 className="text-3xl font-bold mx-[430px]">
            ابدأ رحلتك نحو العالمية الآن مع حلول زاجل شحن البضائع
          </h3>
          <p className="pt-3">
            أرسل بياناتك وسيقوم أحد ممثلينا بالتواصل معكم في أقرب وقت
          </p>

          {/* Section: Personal Info */}
          <div className="flex items-center justify-center max-w-2xl mx-auto mt-16">
            <div className="flex-1 h-[2px] bg-black"></div>
            <p className="font-bold text-3xl mx-4">بيانات التوصيل</p>
            <div className="flex-1 h-[2px] bg-black"></div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-14 max-w-4xl mx-auto mt-4">
            {/* First Name */}
            <InputField
              id="firstName"
              value={shippingData.firstName}
              label="الاسم الأول *"
              handleChange={handleChange}
            />
            {/* Last Name */}
            <InputField
              id="lastName"
              value={shippingData.lastName}
              label="الاسم الأخير *"
              handleChange={handleChange}
            />
            {/* Phone */}
            <InputField
              id="phone"
              value={shippingData.phone}
              label="رقم الهاتف *"
              handleChange={handleChange}
              type="tel"
            />
            {/* Email */}
            <InputField
              id="email"
              value={shippingData.email}
              label="البريد الإلكتروني *"
              handleChange={handleChange}
              type="email"
            />
            {/* Receiver Name */}
            <InputField
              id="receiverName"
              value={shippingData.receiverName}
              label="اسم المستلم *"
              handleChange={handleChange}
            />
            {/* Receiver Phone */}
            <InputField
              id="receiverPhone"
              value={shippingData.receiverPhone}
              label="هاتف المستلم *"
              handleChange={handleChange}
              type="tel"
            />
            {/* Location */}
            <InputField
              id="receiverAddress"
              value={shippingData.receiverAddress}
              label="عنوان المستلم *"
              handleChange={handleChange}
            />
          </div>

          {/* Section: Shipment Info */}
          <div className="flex items-center justify-center max-w-2xl mx-auto mt-16">
            <div className="flex-1 h-[2px] bg-black"></div>
            <p className="font-bold text-3xl mx-4">بيانات الشحنة</p>
            <div className="flex-1 h-[2px] bg-black"></div>
          </div>

          <div className="grid grid-cols-2 gap-x-24 gap-y-14 max-w-4xl mx-auto mt-4">
            {/* Weight */}
            <InputField
              id="weight"
              value={shippingData.weight}
              label="وزن الشحنة *"
              handleChange={handleChange}
            />
            {/* Dimensions */}
            <InputField
              id="dimensions"
              value={shippingData.dimensions}
              label="أبعاد الشحنة (سم) *"
              handleChange={handleChange}
            />
            {/* Breakable */}
            <SelectField
              id="breakable"
              value={shippingData.breakable}
              label="قابل للكسر *"
              handleChange={handleChange}
              options={[
                { value: "yes", label: "نعم" },
                { value: "no", label: "لا" },
              ]}
            />
            {/* Country */}
            <SelectField
              id="country"
              value={shippingData.country}
              label="البلد *"
              handleChange={handleChange}
              options={ArCountries.map((c) => ({
                value: c.name,
                label: c.name,
              }))}
            />
            {/* Service */}
            <SelectField
              id="shippingType"
              value={shippingData.shippingType}
              label="نوع الخدمة *"
              handleChange={handleChange}
              options={[
                { value: "aerial", label: "شحن جوي" },
                { value: "overlands", label: "شحن بري" },
                { value: "nautical", label: "شحن بحري" },
                { value: "inside", label: "شحن داخلي" },
              ]}
            />
          </div>

          {/* Submit Button */}
          <button
            className="mt-16 bg-white rounded-md px-14 py-2 font-bold"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "جاري الارسال ..." : "إرسال"}
          </button>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-6 border bg-white py-8 px-6 rounded-lg">
            <DialogTitle className="font-bold">تم استلام طلبك</DialogTitle>
            <Description>سوف يتم التواصل معك قريبا لاستلام شحنتك</Description>
            <div className="bg-black/10 p-3 rounded-md">
              <p className="pb-4">
                رقم متابعة الشحنة : <b>{shippingInfo.trackingNumber}</b>
              </p>
              <p>
                التكلفة : <b>{shippingInfo.totalPrice}</b>
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-white font-bold py-2 px-6 rounded-md"
              >
                اغلاق
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

/* Reusable Input Field Component */
const InputField = ({ id, value, label, handleChange, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
      className="peer block w-full py-2.5 px-0 bg-transparent border-0 border-b border-gray-700 appearance-none text-black focus:outline-none focus:ring-0 focus:border-black"
      placeholder=" "
      required
    />
    <label
      htmlFor={id}
      className="absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

/* Reusable Select Field Component */
const SelectField = ({ id, value, label, handleChange, options }) => (
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={handleChange}
      className="block w-full py-2.5 px-2 bg-transparent border-0 border-b border-gray-700 appearance-none text-black focus:outline-none focus:ring-0 peer"
    >
      <option value="">اختر</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <label
      htmlFor={id}
      className="absolute text-black duration-300 transform -translate-y-6 scale-75 top-3 right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);
