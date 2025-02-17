import bgimg from "../../assets/global/bg.jpeg";
import img1 from "../../assets/global/image1.jpeg";
import img2 from "../../assets/global/image2.jpeg";
import img3 from "../../assets/global/image3.webp";
import yellowBox from "../../assets/box-yellow.svg";
import whiteBox from "../../assets/landingPage/box-white.svg";

import { useState } from "react";

export default function GlobalShipping() {
  const [type, setType] = useState("air");
  function changeType(e) {
    const selectedType = e.target.getAttribute("name");
    setType(selectedType);
  }
  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0 object-cover"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-60 top-0" />
      {/* text Section */}
      <div className="py-40 px-16 text-white">
        <p className="text-3xl">خدمات شحن البضائع من زاجل</p>
        <p className="text-sm pt-4">
          نتولي عنك مشقة شحن البضائع لاي مكان في العالم
        </p>
      </div>
      {/* card section */}
      <div className="bg-[#0054A6]">
        <div className="mx-8 pt-20 pb-1 bg-white rounded-xl relative overflow-hidden">
          <div className="flex justify-between items-center px-16">
            <div className="w-[50%]">
              <img src={yellowBox} alt="box" className="mb-3" />
              <h2 className="text-2xl font-medium">
                أضف لشركتك خبرات وإمكانات شركة لوجستية عالمية
              </h2>
              <p className="text-sm pt-4">
                من خلال خبرتنا الطويلة وتقنياتنا المتطورة وشبكتنا اللوجستية
                العالمية، يمكننا توفير حلول الشحن المناسبة لاحتياجات شركتك،
                بدايةً من نقل البضائع لمسافة قصيرة حتى شحنها إلى أي مكان آخر في
                العالم باستخدام وسائل نقل متعددة، حيث توفر مراكز توزيع وخبراء
                جمركيين في جميع الوجهات الاقتصادية الرئيسية على مستوى العالم.
                اكتشف كيف يمكننا مساعدتك على توسيع نطاق أعمالك، وتلبية طلبات
                عملائك، وتعزيز المكانة العالمية لشركتك. تواصل مع أحد مصممي حلول
                شحن البضائع لدينا اليوم.
              </p>
            </div>
            <div className="rounded-md overflow-hidden w-[40%]">
              <img src={img1} alt="" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div className="pt-16">
            <div className="flex justify-center items-center gap-20 text-xl font-bold">
              <button
                onClick={changeType}
                className={type === "air" ? "border-b-4 border-yellow-500" : ""}
              >
                <p className="pb-3" name="air">
                  الشحن الجوي
                </p>
              </button>
              <button
                onClick={changeType}
                className={
                  type === "overland" ? "border-b-4 border-yellow-500" : ""
                }
              >
                <p className="pb-3" name="overland">
                  الشحن البري
                </p>
              </button>
              <button
                onClick={changeType}
                className={
                  type === "nautical" ? "border-b-4 border-yellow-500" : ""
                }
              >
                <p className="pb-3" name="nautical">
                  الشحن البحري
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center p-16 bg-gray-100">
            <div className="w-[45%] h-80 rounded-lg overflow-hidden">
              <img src={img2} alt="" className="object-fill h-96 w-full" />
            </div>
            {type === "air" && (
              <div className="w-[50%]">
                <h2 className="font-medium text-2xl w-[55%] pr-2">
                  اشحن منتجاتك بأمان لأكثر من 100 دولة، بما في ذلك المنتجات
                  سريعة التلف
                </h2>
                <p className="text-sm text-gray-500 pt-8">
                  نقدم حلولًا مرنة للشحن الجوي تناسب الاحتياجات والميزانيات
                  المختلفة ـــ بما في ذلك شحن المنتجات الحساسة سريعة التلف.
                  تواصل معنا للتعرف على كيفية خفض تكلفة الشحن من خلال خدمات
                  الشحن "الأقل من حمولة شاحنة". ابدأ اليوم!
                </p>
              </div>
            )}
            {type === "overland" && (
              <div className="w-[50%]">
                <h2 className="font-medium text-2xl w-[55%] pr-2">
                  وسّع دائرة أعمالك للأسواق المجاورة بأسعار مناسبة
                </h2>
                <p className="text-sm text-gray-500 pt-8">
                  من خلال مقرها الرئيسي في المملكة العربية السعودية، تستطيع
                  "زاجل" شحن البضائع للأفراد والشركات بدول مجلس التعاون الخليجي
                  بسهولة وأمان واحترافية. وندعوك للاستفادة من شبكة الشحن الهائلة
                  التي تتمتع بها الشركة في المنطقة. كما يمكننا تصميم حلول شحن
                  متعددة الوسائط أيًا كان الموقع الأصلي للشحنة. ابدأ اليوم!
                </p>
              </div>
            )}
            {type === "nautical" && (
              <div className="w-[50%]">
                <h2 className="font-medium text-2xl w-[55%] pr-2">
                  اخترق الأسواق العالمية مع شبكة "زاجل" اللوجستية الممتدة حول
                  العالم
                </h2>
                <p className="text-sm text-gray-500 pt-8">
                  تتيح لك حلول "زاجل" الاحترافية للشحن البحري نقل منتجاتك
                  للأسواق العالمية بكفاءة وأمان وبتكلفة تناسب ميزانيتك. فمن خلال
                  مراكز توزيع "زاجل" المنتشرة في معظم الموانئ والمنافذ الرئيسية
                  حول العالم، يمكنك توسيع قاعدة عملائك وتحقيق العالمية التي تطمح
                  إليها لعلامتك التجارية. تواصل مع أحد مصممي حلول شحن البضائع
                  اليوم.
                </p>
              </div>
            )}
          </div>
          {/* form */}
          <div className="relative">
            <img src={img3} alt="" className="absloute w-full top-0 mx-auto" />
            <div className="absolute bg-[#f7be30] top-0 w-full h-full opacity-95" />
            <div className="absolute top-0 text-center mx-auto w-full py-24">
              <img src={whiteBox} alt="" className="mx-auto" />
              <h3 className="text-3xl font-bold mx-[430px]">
                ابدأ رحلتك نحو العالمية الآن مع حلول زاجل شحن البضائع
              </h3>
              <p className="pt-3">
                أرسل بياناتك وسيقوم أحد ممثلينا بالتواصل معكم في أقرب وقت
              </p>
              <div className="grid grid-cols-12">
                <div className="grid-cols-6">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
