import Image from "next/image";

export default function Futured() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-[90%]">
        {/* Heading */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-red-500 font-semibold border-l-4 border-red-400 pl-2 text-lg sm:text-xl md:text-2xl">
            Featured
          </h3>
          <h1 className="text-gray-800 font-bold text-2xl sm:text-3xl md:text-4xl pt-3">
            New Arrivals
          </h1>
        </div>

        {/* Container */}
        <div className="flex flex-col md:flex-row gap-5 pt-6">
          {/* Left Section */}
          <div className="bg-gray-950 relative w-full md:w-[60%] rounded-lg overflow-hidden">
            {/* Text */}
            <div className="absolute left-4 bottom-4 text-white">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">PlayStation 5</h1>
              <p className="text-sm sm:text-base mt-2">
                Black and white version of the PS5 coming out on sale.
              </p>
              <button className="mt-3 text-sm sm:text-base underline underline-offset-4 hover:font-bold">
                Shop Now
              </button>
            </div>
            {/* Image */}
            <Image
              src={"/images/futured/playstation.png"}
              width={500}
              height={500}
              alt="PlayStation 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-5 w-full md:w-[40%]">
            {/* Top Section */}
            <div className="bg-gray-950 relative rounded-lg overflow-hidden flex items-end h-full">
              {/* Text */}
              <div className="absolute left-4 bottom-4 text-white">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Womens Collections
                </h1>
                <p className="text-sm sm:text-base mt-2">
                  Featured womens collections that give you another vibe.
                </p>
                <button className="mt-3 text-sm sm:text-base underline underline-offset-4 hover:font-bold">
                  Shop Now
                </button>
              </div>
              {/* Image */}
              <Image
                src={"/images/futured/woman-wearing.png"}
                width={500}
                height={300}
                alt="Women's Collection"
                className="object-cover w-full"
              />
            </div>

            {/* Bottom Section */}
            <div className="flex gap-5">
              {/* Left Side */}
              <div className="bg-gray-950 relative flex flex-col justify-center items-center rounded-lg overflow-hidden w-[50%]">
                {/* Text */}
                <div className="absolute left-4 bottom-4 text-white">
                  <h1 className="text-sm sm:text-base md:text-lg font-semibold">Speakers</h1>
                  <p className="text-xs sm:text-sm mt-1">Amazon wireless speakers.</p>
                  <button className="mt-2 text-xs sm:text-sm underline underline-offset-4 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                {/* Image */}
                <Image
                  src={"/images/futured/speakers.png"}
                  width={200}
                  height={200}
                  alt="Speakers"
                  className="object-cover"
                />
              </div>

              {/* Right Side */}
              <div className="bg-gray-950 relative flex flex-col justify-center items-center rounded-lg overflow-hidden w-[50%]">
                {/* Text */}
                <div className="absolute left-4 bottom-4 text-white">
                  <h1 className="text-sm sm:text-base md:text-lg font-semibold">Perfume</h1>
                  <p className="text-xs sm:text-sm mt-1">GUCCI INTENSE OUD EDP.</p>
                  <button className="mt-2 text-xs sm:text-sm underline underline-offset-4 hover:font-bold">
                    Shop Now
                  </button>
                </div>
                {/* Image */}
                <Image
                  src={"/images/Futured/perfume.png"}
                  width={200}
                  height={200}
                  alt="Perfume"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
