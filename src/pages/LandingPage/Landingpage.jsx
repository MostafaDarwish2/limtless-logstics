import React from "react";
import yellowBox from "../../assets/box-yellow.svg";
import image1 from "../../assets/image1.png";
import one from "../../assets/landingPage/1.jpeg";
import two from "../../assets/landingPage/2.jpeg";
import three from "../../assets/landingPage/3.jpg";

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
      <div className="bg-[#0054A6]">
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
            {/* Section One */}
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
                <img src={yellowBox} alt="box" className="mb-3" />
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
          {/* Section Two (Three images) */}
          <div className="flex items-center my-28">
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img src={one} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black opacity-20 h-full" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-20 duration-500">
                شبكة عالمية
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-80 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تنتشر مكاتب و مراكز التوزيع التابعة للميتليس لوجيستكس في معظم
                  الوجهات الاقتصادية الرئيسية حول العالم
                </p>
              </div>
            </div>
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img src={two} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black opacity-20 h-full" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-32 duration-500">
                حلول مرنة
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-80 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تحرص زاجل على توفير مجموعة متنوعة من حلول الشحن لتلبية
                  الاحتياجات المختلفة للعملاء، بدايةً من حلول التخزين وحتى خدمات
                  التوصيل من الباب للباب، أيًا كان نوع الشحنة أو الطرد المراد
                  توصيله
                </p>
              </div>
            </div>
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img src={three} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black opacity-20 h-full" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-28 duration-500">
                سهولة فائقة
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-80 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تلتزم زاجل بتقديم عملية شحن سهلة وبسيطة وخالية من التعقيدات،
                  بدايةً من إمكانية تنفيذ عملية الشحن دون الحاجة لإنشاء حساب
                  وحتى خيارات الدفع عند الاستلام
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
