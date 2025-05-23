import logo from "../../assets/img/logo/Logo.png";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";
// && import gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const menu = useRef(null);

  useGSAP(() => {
    console.log(menu.current.firstElementChild);

    const menuTL = gsap.timeline();
    menuTL
      .to(menu.current, {
        width: "450px",
        height: "45px",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      })
      .to(menu.current.firstElementChild, {
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.2,
      });
  });

  // خواندن وضعیت دارک مود از localStorage و اعمال آن در هنگام بارگذاری صفحه
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    // ذخیره وضعیت دارک مود در localStorage
    localStorage.setItem("darkMode", isDarkMode);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100  dark:bg-[#919191] mt-3 p-4 rounded-full ">
      {/* سمت چپ - لوگو */}
      <div className="flex-shrink-0 ps-1 ms-3">
        <img src={logo} alt="Logo" className="w-22 mb-3" />
      </div>

      {/* وسط - لینک‌ها و آیکون سرچ */}
      <div
        ref={menu}
        className="items-center relative w-0 overflow-hidden opacity-0 flex bg-white dark:bg-[#b9b9b9] rounded-full px-4 py-2 space-x-5"
      >
        <nav className="flex space-x-6 top-2.5 absolute opacity-0">
          <a href="#" className="text-gray-700 dark:text-black hover:text-gray-900">
            About us
          </a>
          <a href="#" className="text-gray-700 dark:text-black hover:text-gray-900">
            Projects
          </a>
          <a href="#" className="text-gray-700 dark:text-black hover:text-gray-900">
            Agents
          </a>
          <a href="#" className="text-gray-700 dark:text-black hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-700 dark:text-black hover:text-gray-900">
            Listings
          </a>
          <FiSearch className="cursor-pointer items-end" size={20} color="#333" />
        </nav>
      </div>

      {/* سمت راست - دکمه‌ها */}
      <div className="flex items-center space-x-4 me-3">
        <button className="px-4 py-2 hover:bg-gray-200 transition-all duration-200 hover:rounded-[10px] dark:text-white dark:hover:text-black">
          Other services
        </button>
        <button className="px-4 py-2 dark:bg-gray-200 !border-1 !border-gray-400 rounded-full transition-all duration-200 hover:bg-gray-200 hover:!border-1 hover:!border-orange-500">
          Contact us
        </button>

        {/* دکمه تغییر تم */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200  dark:hover:text-black"
        >
          <FiMoon className="w-5 h-5 dark:hidden" />
          <FiSun  className="w-5 h-5 hidden dark:block  " />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
