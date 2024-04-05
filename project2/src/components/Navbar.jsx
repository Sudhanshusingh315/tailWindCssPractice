import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
export default function Navbar() {
  const [navshow, setNavShow] = useState(false);
  const handlNav = () => {
    setNavShow(!navshow);
  };
  return (
    <>
      <nav className="container flex text-meow-purple items-center justify-between px-2 my-4">
        <div className="py-1 font-bold ">Bookmark</div>
        <ul className="hidden sm:flex gap-6 uppercase justify-center items-center font-semibold">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Pricing</li>
          <li className="hover:underline">Contact</li>
          <button className="bg-meow-red text-meow-white p-2 rounded-md text-xs font-semibold hover:bg-orange-400">
            LOGIN
          </button>
        </ul>
        <div
          className="flex sm:hidden text-2xl"
          onClick={() => {
            handlNav();
          }}
        >
          {!navshow ? <RxHamburgerMenu /> : <MdOutlineCancel />}
        </div>
      </nav>
      {/* sidebar */}
      <div
        className={
          !navshow
            ? "bg-slate-400 text-white w-[50%] h-[calc(100%-40px)] absolute top-0 left-[-100%]  duration-500"
            : "bg-slate-400 text-white w-[50%] h-[calc(100%-40px)] absolute top-0 left-0 ease-in-out duration-500"
        }
      >
        <ul className="flex flex-col font-bold text-3xl py-10 gap-8 w-[50%]">
          <li className="hover:underline decoration-pink-200">Home</li>
          <li className="hover:underline decoration-pink-200">Pricing</li>
          <li className="hover:underline decoration-pink-200">Contact</li>
          <li className="hover:underline decoration-pink-200">Links</li>
        </ul>
      </div>
    </>
  );
}
