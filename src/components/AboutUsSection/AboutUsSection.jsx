import React from 'react';
import AbouteImg from "../../assets/img/About.png"
const AboutUsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Title Section */}
      <h1 className=" font-bold text-[45px] dark:text-gray-300 text-gray-900 text-center mb-12 leading-tight">
        We are a global, boutique real <br className="hidden sm:inline" /> estate brokerage
      </h1>

      {/* Main Content Area */}
      <div 
      className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto">
        {/* Left Text and Buttons */}
        <div className="w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 dark:text-gray-300">
            The transfer of real estate
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin.
            Egestas faucibus lacus diam in scelerisque sollicitudin. Mattis elit adipiscing quisque
            tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisi justo.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors duration-200">
              Book Now!
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:text-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl w-full text-center ">
        <div>
          <p className="text-5xl font-bold text-gray-900 dark:text-gray-300">12+</p>
          <p className="text-lg dark:text-gray-200 text-gray-600 mt-2">Customers</p>
        </div>
        <div>
          <p className="text-5xl font-bold dark:text-gray-300 text-gray-900">14+</p>
          <p className="text-lg text-gray-600 mt-2 dark:text-gray-300">Offices</p>
        </div>
        <div>
          <p className="dark:text-gray-300 text-5xl font-bold text-gray-900">10+</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Students</p>
        </div>
      </div>
        </div>

        {/* Right Image */}
        <div 
        
        className="w-1/2">
          <div className=" w-full  flex flex-row-reverse">
            <img
              src={AbouteImg} // Replace with your image URL
              alt="Two people working together at a laptop"
              className="rounded-lg shadow-xl  w-122 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
     
    </div>
  );
};

export default AboutUsSection;