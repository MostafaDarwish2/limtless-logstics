import { ChevronDown } from "lucide-react";
import headimage from "../../assets/image.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative">
      {/* corner image */}
      <img
        src={headimage}
        alt="img"
        className="absolute top-0 right-0"
        width={200}
      />
      <div className="p-5 mx-auto">
        <div className="flex justify-between items-center flex-1">
          <div className="flex gap-8">
            <NavLink to="/" className="text-3xl font-bold text-white">
              Limitless Logestics
            </NavLink>
            <div className="flex items-center gap-10 text-white font-medium">
              <NavLink
                to="/track"
                className="hover:text-yellow-400 hover:cursor-pointer"
              >
                تتبع شحنتك
              </NavLink>
              <a
                href="#"
                className="hover:text-yellow-400 hover:cursor-pointer"
              >
                تعرف علي اقرب فرع
              </a>

              {/* drop down #1 */}

              <div className="dropdown dropdown-hover group">
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:text-yellow-400 hover:cursor-pointer flex items-center"
                >
                  الخدمات
                  <ChevronDown className="text-xs size-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-transparent z-[5] w-52 p-2 bg-white text-black"
                >
                  <li>
                    <a>الخدمات</a>
                  </li>
                  <li>
                    <a>التجاره الالكترونيه</a>
                  </li>
                  <li>
                    <a>شحن البضائع</a>
                  </li>
                  <li>
                    <a>الشحن والتوزيع</a>
                  </li>
                  <li>
                    <a>التوزيع الداخلي</a>
                  </li>
                </ul>
              </div>

              {/* drop downs #2 */}

              <div className="dropdown dropdown-hover group">
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:text-yellow-400 hover:cursor-pointer flex gap-1 items-center"
                >
                  الدعم و المساعده
                  <ChevronDown className="text-xs size-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-transparent z-[5] w-52 p-2 bg-white text-black"
                >
                  <li>
                    <a>الدعم و المساعده</a>
                  </li>
                  <li>
                    <a>الاسئله الشاثعه</a>
                  </li>
                  <li>
                    <a>اتصل بنا</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex items-center gap-4">
            <button className="px-10 py-2 rounded-md bg-white text-blue-800 hover:text-gray-950">
              إداره الشحنات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="container">

//     <nav>
//         <ul className='no-underline flex'>
//             <li><a className="text-3xl" href="#">Limitless logestics</a></li>
//             <li><a href="#">تتبع شحنتك</a></li>
//             <li><a href="#">تعرف علي اقرب فرع</a></li>
//             <select name="الخدمات" id="serves">
//               <option value="#">الخدمات</option>
//               <option value="1">التجاره الالكترونيه</option>
//               <option value="2">شحن البضائع</option>
//               <option value="3">الشحن والتوزيع</option>
//               <option value="4">التوزيع الداخلي</option>
//             </select>
//             <select name="الدعم و المساعده" id="">
//               <option value="1">الدعم و المساعده</option>
//               <option value="2">الاسئله الشاثعه</option>
//               <option value="3">اتصل بنا</option>
//             </select>
//         </ul>
//     </nav>

// </div>
