import React from "react";
import yellowBox from "../../assets/box-yellow.svg";
import image1 from "../../assets/image1.png";

export default function Landingpage() {
  return (
    <>
      <div className="container mx-auto py-40">
        <h1 className="text-4xl text-white max-w-[480px] font-medium leading-normal">
          حلول لوجستية سهلة، وموثوقة، وبأسعار تنافسية
        </h1>
        <p className="text-white py-4 max-w-[480px]">
          اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا
          الاحترافية وشبكتنا اللوجستية العالمية
        </p>
      </div>
      <div className="h-40 w-full bg-gradient-to-b from-transparent to-[#0054A6]" />
      <div className="bg-[#0054A6] h-full">
        <div className="mx-8 py-20 bg-white rounded-xl relative">
          <div className="bg-[#FFC22E] flex items-center p-5 rounded-lg w-[75%] mx-40 gap-6 absolute -top-12">
            <div className="relative z-0 w-full">
              <input
                type="text"
                id="floating_standard"
                className="block flex-1 py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 appearance-none text-black  focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                رقم الشحنة
              </label>
            </div>
            <button className="bg-white font-semibold rounded-md w-40 p-3 text-blue-800 hover:text-gray-950">
              تابع شحنتك
            </button>
          </div>

          <div className="flex items-center justify-center py-8">
            <div className="container mx-auto flex items-center justify-between gap-10">
              <div className="flex-1">
                <img
                  src={image1}
                  alt="truck"
                  height={400}
                  className="h-[320px] w-full shadow-xl rounded-lg"
                />
              </div>
              <div className="flex-1">
                <img src={yellowBox} alt="box" className="mb-3"/>
                <h2 className="text-3xl text-black font-bold">
                  شعارنا هو:
                  <span className="text-blue-800">
                    &quot; لا تشيل هم، وصلت!&quot;
                  </span>
                </h2>
                <p className="text-base text-gray-600 py-4">
                  تُعد &quot;زاجل&quot; أول شركة خاصة لخدمات البريد في المملكة
                  العربية السعودية. وخلال وقت قصير، نجحت الشركة في تحقيق الريادة
                  في مجال الشحن والخدمات اللوجستية إذ تقدم خدماتها لمئات العملاء
                  حول العالم. واليوم، تحظى الشركة بثقة أكثر من 500 عميل يعتمدون
                  على خدمات &quot;زاجل&quot; الاحترافية لنقل بضائعهم بسهولة
                  وسرعة وأمان، مما يتيح لهم تنمية شركاتهم وتوسيع نطاق أعمالهم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
