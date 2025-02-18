import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#0054A6] w-full text-sm">
        <div className="grid grid-cols-12 p-12 w-full">
          <div className="col-span-2">
            <NavLink to="/" className="text-3xl font-bold text-white ">
              <img src={logo} alt="" width={120} />
            </NavLink>
          </div>
          <div className="col-span-2 text-white mr-10">
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                من نحن
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                تطبيق زاجل
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-white  ">
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                اتصل بنا
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                الوظائف
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                ادوات المطورين
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-white  ">
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                شروط الاستخحدام
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                سياسة الخصوصية
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                الاسئلة الشائعة
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                سياسات و اجراءات التعويضات
              </li>
              <li className="hover:text-yellow-400 cursor-pointer w-fit">
                <p>قواعد حماية حقوق المستفيدين</p>
              </li>
            </ul>
          </div>
          <div className="col-span-4 mr-10 flex items-center gap-4">
            <div className="relative w-full flex">
              <input
                type="text"
                id="floating"
                className="block flex-1 py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-white appearance-none text-black  focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating"
                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                اشترك في نشرتنا الاخبارية
              </label>
            </div>
            <button className="bg-gray-500 text-sm text-white font-semibold rounded-md w-28 h-9 border border-white">
              تقديم
            </button>
          </div>
        </div>
        <div className="border-t mx-10 opacity-40" />
        <div className="text-white px-10 py-6">
          <p>@2025 Limitless Logistics. All copyrights reservied</p>
        </div>
      </div>
    </>
  );
}
