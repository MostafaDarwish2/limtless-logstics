import { ChevronDown, Menu } from "lucide-react";
export default function Header() {
  return (
    <nav className=" border-gray-200 bg-black  dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-3xl whitespace-nowrap text-white font-bold">
          Limtless Logistics
        </span>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white"
                aria-current="page"
              >
                تتبع شحنتك
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white"
                aria-current="page"
              >
                تعرف علي اقرب فرع
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-white"
              >
                الخدمات <ChevronDown />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      التجاره الالكترونيه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      شحن البضائع
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      الشحن والتوزيع
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-white">
                    التوزيع الداخلي
                  </a>
                </div>
              </div>
            </li>

            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-white"
              >
                الدعم و المساعده <ChevronDown />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      الدعم و المساعده
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      الاسئله الشاثعه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-white">
                      اتصل بنا
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
