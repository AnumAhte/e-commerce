import Image from "next/image";

function Signup() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-start">
      {/* Left Section */}
      <div className="w-full lg:w-[50%] h-full lg:h-[500px] m-0 mt-10 lg:m-11 cursor-pointer">
        <Image
          src="/images/signup/mobile.png"
          width={400}
          height={400}
          alt="Mobile illustration"
          className="w-full"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[70%]">
          <div className="mb-6">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">Create an Account</h1>
            <p className="text-sm text-gray-600 mt-2">Enter your details below</p>
          </div>
          <form action="#" method="post" className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-red-500 bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email or Phone Number
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-red-500 bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-red-500 bg-transparent"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-sm font-medium transition duration-300"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
