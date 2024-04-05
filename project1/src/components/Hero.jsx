import image from "../image.png";
import { MdFrontHand } from "react-icons/md";
export default function Hero() {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center text-white items-center ">
        <img
          src={image}
          alt="paws"
          className=" w-40 h-40 -skew-x-12 rounded-full bg-white"
        />
        <div className="py-6 font-mono font-bold text-5xl md:text-6xl sm:text-3xl">
          Im just{" "}
          <span className="cursor-pointer text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600text-[#FFA3FD] hover:text-[#E384FF] font-sans italic font-extrabold ">
            kitten
          </span>{" "}
          around
        </div>
        <p className="py-4 text-2xl  md:text-3xl">
          I will claw you if touch my tummy 😠
        </p>
        <h1 className="font-semibold text-2xl md:text-3xl">
          Your{" "}
          <span className="text-transparent italic text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in-out duration-1000">
            FURR
          </span>
          -midable opponent
        </h1>
        <button
          className="font-bold text-white text-2xl bg-[#865DFF] mx-auto mt-4 p-2 rounded-lg hover:bg-[#E384FF] border-double border-2 border-white"
          type="button"
        >
          Pet Me <MdFrontHand className="inline-block" />

        </button>
      </div>
    </>
  );
}
