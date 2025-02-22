import { useState } from "react";
import bgimg from "../../assets/shippingbg.jpeg";
import axios from "axios";

export default function Shipping() {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState("");

  async function getShippingDetails() {
    setLoading(true);
    setError(null);
    setShippingDetails(null);
    try {
      let { data } = await axios.get(
        `http://127.0.0.1:3000/api/v1/shipping/t/${trackingNumber}`
      );
      if (data.status === "success") {
        setShippingDetails(data.data);
      } else {
        setError("حدث خطأ غير متوقع");
      }
    } catch (e) {
      console.log(e.response?.data?.message || "Unknown error");
      setError(
        e.response?.data?.message === "Shipment not found"
          ? "لا توجد شحنة بهذا الرقم"
          : "حدث خطأ أثناء استرجاع البيانات"
      );
    }
    setLoading(false);
  }

  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-80 top-0" />
      <div className="mt-10 relative">
        <div className="bg-white rounded-xl overflow-hidden mx-10 relative z-[1]">
          <div className="bg-gray-200 border-b border-gray-400 p-8 text-center">
            <p className="text-[#0054a6] text-3xl font-medium">
              تتبع شحنتك من خلال
            </p>
          </div>

          <div className="flex my-10 justify-center gap-5 text-sm">
            <button className="bg-yellow-400 w-36 h-10 rounded-md">
              رقم تتبع الشحنة
            </button>
          </div>

          <div className="flex items-center p-5 rounded-lg w-[70%] mx-40 gap-6">
            <div className="relative z-0 w-full">
              <input
                type="text"
                id="floating_standard"
                className="block flex-1 py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-700 appearance-none text-black focus:outline-none focus:ring-0 peer"
                placeholder=" "
                onChange={(e) => {
                  setNumber(e.target.value.length);
                  setTrackingNumber(e.target.value);
                }}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-black duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                رقم تتبع الشحنة
              </label>
            </div>
            <button
              disabled={number === 0 || loading}
              onClick={getShippingDetails}
              className={`${
                number > 0
                  ? "bg-white shadow-lg border text-gray-800"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } rounded-md w-40 p-3`}
            >
              تتبع
            </button>
          </div>

          {/* Error Message */}
          {error ? (
            <div className="my-40 text-center text-red-500 text-3xl font-medium">
              <p>{error}</p>
            </div>
          ) : shippingDetails ? (
            <div className="p-16">
              <div className="flex gap-4 items-center">
                <b>حالة الشحنة</b>
                <div className="text-[11px] px-2 py-[2px] bg-slate-200 text-center rounded-md text-gray-400">
                  {shippingDetails.status}
                </div>
              </div>
              <div className="py-6">
                <b className="text-2xl">معلومات الشحنة :</b>
                <div className="grid grid-cols-2 max-w-4xl gap-y-12 py-8 text-lg">
                  <p>
                    <b>الطريقة :</b>{" "}
                    {shippingDetails.shippingType.toUpperCase()}
                  </p>
                  <p>
                    <b>التكلفة :</b> {shippingDetails.totalPrice.toFixed(2)}
                  </p>
                  <p>
                    <b>اسم المستلم :</b> {shippingDetails.receiverName}
                  </p>
                  <p>
                    <b>عنوان المستلم :</b> {shippingDetails.receiverAddress}
                  </p>
                  <p>
                    <b>هاتف المستلم :</b> {shippingDetails.receiverPhone}
                  </p>
                  <p>
                    <b>البلد :</b> {shippingDetails.country}
                  </p>
                  <p>
                    <b>الوزن :</b> {shippingDetails.weight.toFixed(1)} كجم
                  </p>
                  <p>
                    <b>البعد :</b> {shippingDetails.dimensions.toFixed(1)} سم
                  </p>
                  <p>
                    <b>قابل للكسر :</b>{" "}
                    {shippingDetails.breakable ? "نعم" : "لا"}
                  </p>
                  <p>
                    <b>تاريخ الطلب :</b>{" "}
                    {new Date(shippingDetails.createdAt).toLocaleDateString(
                      "fr-FR"
                    )}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-40 text-center text-gray-200 text-3xl font-medium">
              <p>أدخل رقم التتبع</p>
              <p>المبين أعلاه لاستعراض النتائج</p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-b from-transparent to-[#0054A6] h-40 absolute bottom-0 w-full" />
      </div>
    </>
  );
}
