export default function NewsLetter() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 mx-auto py-20 text-white bg-black">
        <div className="md:col-span-2 md:mx-auto">
          <h1 className="uppercase font-mono font-bold text-3xl ">
            Stay ahead of the cat curve! 📈
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="flex gap-2 items-center flex-col md:flex-col lg:flex-row ">
          <input
            type="text"
            placeholder="Enter your email"
            className=" h-10 rounded-lg text-black  placeholder:italic placeholder:px-2  md:block "
          />

          <button className=" bg-[#866DFF] rounded-lg text-xs font-medium text-white hover:bg-[#E384FF] focus:ring-offset-2 ring-1 lg:text-nowrap lg:font-bold lg:text-xl sm:text-xl sm:font-bold md:px-5   ">
            Notify me
          </button>
        </div>
      </div>
    </>
  );
}
