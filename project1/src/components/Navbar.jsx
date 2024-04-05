import { IoPawSharp } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="text-white mt-3 flex font-mono justify-center items-center border-teal-50 px-2 mx-auto ">
        <h1 className="text-[#FFA3FD] uppercase text-5xl w-full font-bold">
          {" "}
          <IoPawSharp className="inline h-3" />
          Meow
          <IoPawSharp className="inline h-3" />{" "}
        </h1>
        <ul className="font-bold hidden md:flex ">
          <li className="p-4 hover:text-[#865DFF]">Home</li>
          <li className="p-4 hover:text-[#865DFF]">Picture</li>
          <li className="p-4 hover:text-[#865DFF]">Food</li>
          <li className="p-4 hover:text-[#865DFF]">About</li>
          <button
            className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-mono text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Contact
          </button>
        </ul>
        <div className="block md:hidden">
          {!nav ? (
            <FaAlignJustify size={20} onClick={handleNav} />
          ) : (
            <IoMdClose size={20} onClick={handleNav} />
          )}
        </div>
      </div>

      <div
        className={
          !nav
            ? "fixed left-[-100%] duration-500"
            : "text-white uppercase w-[40%] h-[100%] fixed left-0 top-14 bg-[#191825] ease-in-out duration-500"
        }
      >
        <ul className="p-4 font-bold text-5xl">
          <li className="p-4 hover:text-[#865DFF] border-b border-white">
            home
          </li>
          <li className="p-4 hover:text-[#865DFF] border-b border-white">
            picture
          </li>
          <li className="p-4 hover:text-[#865DFF] border-b border-white">
            food
          </li>
          <li className="p-4 hover:text-[#865DFF] border-b border-white">
            about
          </li>
          <li className="p-4 hover:text-[#865DFF]">contact</li>
        </ul>
      </div>
    </>
  );
}
