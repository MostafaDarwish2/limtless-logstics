import { useState } from "react";
import img2 from "../assets/global/image2.jpeg";

export default function ShippingMethods() {
  const [type, setType] = useState("air");
  function changeType(e) {
    const selectedType = e.target.getAttribute("name");
    setType(selectedType);
  }
  return (
    <>
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
              اشحن منتجاتك بأمان لأكثر من 100 دولة، بما في ذلك المنتجات سريعة
              التلف
            </h2>
            <p className="text-sm text-gray-500 pt-8">
              نقدم حلولًا مرنة للشحن الجوي تناسب الاحتياجات والميزانيات المختلفة
              ـــ بما في ذلك شحن المنتجات الحساسة سريعة التلف. تواصل معنا للتعرف
              على كيفية خفض تكلفة الشحن من خلال خدمات الشحن &apos;الأقل من حمولة
              شاحنة&apos;. ابدأ اليوم!
            </p>
          </div>
        )}
        {type === "overland" && (
          <div className="w-[50%]">
            <h2 className="font-medium text-2xl w-[55%] pr-2">
              وسّع دائرة أعمالك للأسواق المجاورة بأسعار مناسبة
            </h2>
            <p className="text-sm text-gray-500 pt-8">
              من خلال مقرها الرئيسي في المملكة العربية السعودية، تستطيع شحن
              البضائع للأفراد والشركات بدول مجلس التعاون الخليجي بسهولة وأمان
              واحترافية. وندعوك للاستفادة من شبكة الشحن الهائلة التي تتمتع بها
              الشركة في المنطقة. كما يمكننا تصميم حلول شحن متعددة الوسائط أيًا
              كان الموقع الأصلي للشحنة. ابدأ اليوم!
            </p>
          </div>
        )}
        {type === "nautical" && (
          <div className="w-[50%]">
            <h2 className="font-medium text-2xl w-[55%] pr-2">
              اخترق الأسواق العالمية مع شبكة اللوجستية الممتدة حول العالم
            </h2>
            <p className="text-sm text-gray-500 pt-8">
              تتيح لك حلول الاحترافية للشحن البحري نقل منتجاتك للأسواق العالمية
              بكفاءة وأمان وبتكلفة تناسب ميزانيتك. فمن خلال مراكز توزيع المنتشرة
              في معظم الموانئ والمنافذ الرئيسية حول العالم، يمكنك توسيع قاعدة
              عملائك وتحقيق العالمية التي تطمح إليها لعلامتك التجارية. تواصل مع
              أحد مصممي حلول شحن البضائع اليوم.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
