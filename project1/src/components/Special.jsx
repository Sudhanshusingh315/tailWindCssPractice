import image1 from "../grid1.jpg";
import image2 from "../grid2.jpg";
import image3 from "../grid3.jpg";
import image4 from "../grid3.gif";
export default function Special() {
  return (
    <>
      <div className="grid my-2 md:grid-cols-2 mx-auto ">
        {/* this grid will work this way it wants to work */}
      <div className="grid grid-cols-3 gap-2 text-black px-2 w-full bg-[#191825] ">
          <div className="border-2 border-[#FFA3FD] rounded-md overflow-hidden ">
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="border-2 border-[#FFA3FD] rounded-md overflow-hidden ">
            <img src={image2} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="border-2 border-[#FFA3FD] row-span-2 w-auto  rounded-md overflow-hidden">
            <img src={image3} alt="" className="h-full" />
          </div>
          <div className="col-span-2 border-2 border-[#FFA3FD] rounded-md overflow-hidden">
            <img src={image4} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="text-white w-full  py-3 flex flex-col justify-center items-center">
          <div className="font-bold text-3xl md:text-2xl">
            From {" "} 
            <span className="mb-8 italic font-mono hover:border-b-2 border-pink-600 ease-in duration-100">
               Whiskers
            </span>{" "}
            to{" "}
            <span className="italic m-4 hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  ">
              Wonders
            </span>
          </div>
          <h2 className="font-semibold text-2xl m-4 hover: border-b-2 border-pink-700  md:text-2xl">
            Why do cats even meow ?
          </h2>
          <p className="flex justify-center items-center">
            As a cat, my purring isn&apos;t just a cute sound; it&apos;s my
            superpower! When I purr, I release healing vibrations that promote
            well-being. My soothing purrs can lower your stress levels,
            strengthen our bond, help you sleep better, and even provide natural
            pain relief
          </p>
          <button className="bg-[#865DFF] mx-auto my-2 p-3 rounded-lg text-xl font-bold text-white hover:bg-[#E384FF] focus:ring-offset-2 ring-1">
            Buy me food
          </button>
        </div>
      </div>
    </>
  );
}
