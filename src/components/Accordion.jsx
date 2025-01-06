import React, { useState } from "react";
import imageDefault from "../assets/landingPage/image1.jpeg";
import imageEcommerce from "../assets/landingPage/image1.jpeg";
import imageShipping from "../assets/landingPage/image2.jpeg";
import imageStorage from "../assets/landingPage/image4.jpg";
import imageDistribution from "../assets/landingPage/image3.jpeg";

export default function Accordion() {
  const [activeSection, setActiveSection] = useState(null);
  const [image, setImage] = useState(imageDefault);

  const handleToggle = (section, newImage) => {
    if (activeSection === section) {
      setActiveSection(null);
      setImage(imageDefault);
    } else {
      setActiveSection(section);
      setImage(newImage);
    }
  };
  return (
    <>
      <div className="max-w-[1150px] relative mx-auto flex mt-44 overflow-hidden rounded-xl h-[500px]">
        <div className="flex-1 px-8 z-20 pt-20 max-w-[40%] bg-[#02232A] text-white space-y-8">
          {/* E-commerce */}
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleToggle("ecommerce", imageEcommerce)}
            >
              <p className="text-2xl">
                {activeSection === "ecommerce" ? "-" : "+"}
              </p>
              <h1 className="font-bold text-2xl">التجارة الإلكترونية</h1>
            </div>
            <h6
              className={`mt-4 w-[80%] text-sm transition-all ${
                activeSection === "ecommerce" ? "block" : "hidden"
              }`}
            >
              باعتبارها أول شركة خاصة لتقديم خدمات البريد بالمملكة، تسخر
              &apos;زاجل&apos; كافة خبراتها وإمكاناتها وشبكتها العالمية الهائلة
              لتقديم مجموعة متكاملة من الحلول اللوجستية.
            </h6>
          </div>

          {/* Shipping */}
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleToggle("shipping", imageShipping)}
            >
              <p className="text-2xl">
                {activeSection === "shipping" ? "-" : "+"}
              </p>
              <h1 className="font-bold text-2xl">شحن البضائع</h1>
            </div>
            <h6
              className={`mt-4 w-[80%] text-sm transition-all ${
                activeSection === "shipping" ? "block" : "hidden"
              }`}
            >
              من خلال خبرتنا الطويلة وتقنياتنا المتطورة وشبكتنا اللوجستية
              العالمية، يمكننا توفير حلول الشحن المناسبة لاحتياجات شركتك، بدايةً
              من نقل البضائع لمسافة ق...
            </h6>
          </div>

          {/* Storage */}
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleToggle("storage", imageStorage)}
            >
              <p className="text-2xl">
                {activeSection === "storage" ? "-" : "+"}
              </p>
              <h1 className="font-bold text-2xl">التخزين و التوزيع</h1>
            </div>
            <h6
              className={`mt-4 w-[80%] text-sm transition-all ${
                activeSection === "storage" ? "block" : "hidden"
              }`}
            >
              صممت &apos;زاجل&apos; مرافقها الحديثة وتقنياتها المتطورة وشبكتها
              اللوجستية الواسعة لمساعدة الشركات السعودية على التنافس بقوة في
              الأسواق العالمية وتجاوز توقعات ا...
            </h6>
          </div>

          {/* Internal Distribution */}
          <div>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleToggle("distribution", imageDistribution)}
            >
              <p className="text-2xl">
                {activeSection === "distribution" ? "-" : "+"}
              </p>
              <h1 className="font-bold text-2xl">التوزيع الداخلي</h1>
            </div>
            <h6
              className={`mt-4 w-[80%] duration-300  text-sm transition-all ${
                activeSection === "distribution" ? "block " : "hidden"
              }`}
            >
              تفخر &apos;زاجل&apos; بأن لديها من الموارد والقدرات ما يمكنها من
              تلبية الطلب المتزايد على الخدمات اللوجستية في ظل النشاط الاقتصادي
              الهائل الذي تشهده المملكة. وت...
            </h6>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-full h-[500px]">
          <img src={image} alt="Service" className="absolute right-0 h-full" />
        </div>
      </div>
    </>
  );
}
