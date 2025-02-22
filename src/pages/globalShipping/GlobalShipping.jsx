import bgimg from "../../assets/global/bg.jpeg";
import img1 from "../../assets/global/image1.jpeg";
import yellowBox from "../../assets/box-yellow.svg";

import ShippingMethods from "../../components/ShippingMethods";
import ShippingForm from "../../components/ShippingForm";

export default function GlobalShipping() {
  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0 object-cover"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-60 top-0" />
      {/* text Section */}
      <div className="py-40 px-16  text-white">
        <p className="text-4xl font-medium">خدمات شحن البضائع من ليميتليس</p>
        <p className="text-sm pt-4">
          نتولي عنك مشقة شحن البضائع لاي مكان في العالم
        </p>
      </div>
      {/* card section */}
      <div className="h-28 w-full bg-gradient-to-b from-transparent to-[#0054A6]" />
      <div className="relative bg-[#0054A6]">
        <div className="pt-6" />
        <div className="mx-8 pt-20 bg-white rounded-xl relative overflow-hidden">
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
          {/* Shipping Methods Component */}
          <ShippingMethods />
          {/* form */}
          <ShippingForm />
        </div>
      </div>
    </>
  );
}
