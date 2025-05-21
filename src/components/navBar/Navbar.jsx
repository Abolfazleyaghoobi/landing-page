import logo from "../../assets/img/logo/Logo.png";
import { FiSearch } from "react-icons/fi";
// && import gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

  return (
    <div className="flex items-center justify-between bg-gray-50 mt-3 p-4 rounded-full">
      {/* سمت چپ - لوگو */}
      <div className="flex-shrink-0 ps-1  ms-3">
        <img src={logo} alt="Logo" className=" w-22 mb-3" />
        {/* اگر لوگو ندارید می‌تونید یه div با متن بذارید */}
      </div>

      {/* وسط - لینک‌ها و آیکون سرچ */}
      <div
        ref={menu}
        className="items-center relative w-0 overflow-hidden opacity-0 flex bg-gray-200 rounded-full px-4 py-2 space-x-5"
      >


        <nav className="flex space-x-6 top-2.5  absolute opacity-0">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Agents
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Listings
          </a>
        <FiSearch className="cursor-pointer items-end" size={20} color="#333" />
        </nav>

        {/* آیکون سرچ */}

      </div>

      {/* سمت راست - دکمه‌ها */}
      <div className="flex items-center space-x-4 me-3">
        <button className="px-4 py-2 hover:bg-gray-200 transition-all duration-200 hover:rounded-[10px]">Other services</button>
        <button className="px-4 py-2 bg-white !border-1 !border-gray-400 rounded-full transition-all duration-200  hover:bg-gray-200  hover:!border-1 hover:!border-orange-500">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
