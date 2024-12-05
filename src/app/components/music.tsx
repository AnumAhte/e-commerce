import Image from "next/image";

function TimerBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
      <span className="font-bold text-lg">{value}</span>
      <span className="text-xs md:text-sm">{label}</span>
    </div>
  );
}

function Music() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      {/* Box */}
      <div className="w-full md:w-[80%] p-5 bg-gray-950 flex flex-col md:flex-row md:justify-center md:items-center h-auto md:h-[400px]">
        {/* Left Box */}
        <div className="w-full md:w-1/2">
          <h3 className="text-green-500 font-bold">Categories</h3>
          <h1 className="text-white font-bold text-xl md:text-3xl lg:text-5xl pt-4">
            Enhance Your Music Experience
          </h1>
          {/* Timer */}
          <div className="flex pt-5 pb-4 gap-4">
            {["23", "05", "59", "35"].map((time, index) => {
              const labels = ["Hours", "Days", "Minutes", "Seconds"];
              return <TimerBlock key={index} value={time} label={labels[index]} />;
            })}
          </div>
          <button
            aria-label="Buy Now"
            className="bg-green-500 hover:bg-green-600 px-7 py-2 text-white font-bold rounded mt-3 hidden md:block"
          >
            Buy Now!
          </button>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/images/music-box/music-speaker.png"
            width={500}
            height={500}
            alt="High-quality music speaker"
            className="mx-auto"
          />
          <button
            aria-label="Buy Now"
            className="bg-green-500 hover:bg-green-600 px-7 py-2 text-white font-bold rounded mt-3 md:hidden block"
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
