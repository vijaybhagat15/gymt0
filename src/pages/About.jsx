import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div>
        <div className="bg-gradient-to-tr from-custom-beige to-orange-500 mt-1 flex items-center justify-center py-5 md:py-10">
          <h1 className="text-orange-600 text-3xl md:text-5xl font-bold font-sans">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/64/23/78/1000_F_264237813_6Yn9JJkBZkuGP9gEgebCA5xVqhqz76v3.jpg"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl  text-orange-600  font-serif">Our Journey</h2>
            <p className="mt-6 text-gray-700 text-center md:text-left leading-relaxed">
              GymBro was founded with a single mission: to revolutionize the fitness
              industry by providing exceptional products and services. We aim to
              inspire individuals to achieve their fitness goals, supported by a
              vibrant community and cutting-edge solutions.
            </p>
            <p className="mt-4 text-gray-700 text-center md:text-left leading-relaxed">
              From premium workout gear to expert guidance, GymBro is dedicated to
              enhancing your fitness journey. Join us in redefining what it means to
              lead a healthy, active lifestyle.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl  text-orange-600 text-center font-serif">Our Mission</h2>
          <p className="mt-6 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            At GymBro, we strive to empower individuals through fitness. Our mission
            is to provide top-quality products and expert support that help people
            reach their full potential, both physically and mentally.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl  text-orange-600 text-center mb-8 font-serif">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Trainer 1 */}
              <div className="bg-custom-beige text-orange-500 hover:text-orange-400 font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform">
                <img src="\imeges\t1.jpg" alt="Trainer 1" className="w-full h-64 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-400 hover:text-yellow-400 font-serif">John Doe</h3>
                <p className="text-gray-600 font-sans">Certified personal trainer with 5 years of experience in strength training.</p>
              </div>

              {/* Trainer 2 */}
              <div className="bg-custom-beige text-orange-500 hover:text-orange-400 font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform">
                <img
                  src="https://www.clientel3.com/wp-content/uploads/2022/06/BecomePersonalTrainer-1024x683-1.jpg"
                  alt="Trainer 2"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-400 hover:text-yellow-400 font-serif">Jane Smith</h3>
                <p className="text-gray-600 font-sans">Specialized in yoga and flexibility training to improve mobility.</p>
              </div>

              {/* Trainer 3 */}
              <div className="bg-custom-beige text-orange-500 hover:text-orange-400 font-bold text-xl p-1 rounded-lg shadow-lg border-2 border-transparent hover:border-orange-400 hover:scale-105 transition-transform">
                <img
                  src="https://az505806.vo.msecnd.net/cms/d58f1744-7071-415c-9d58-81f22ace4ad2/94e034fd-9635-4e7a-b591-57127fcfc4bc.jpg"
                  alt="Trainer 3"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-400 hover:text-yellow-400 font-serif">Mark Lee</h3>
                <p className="text-gray-600 font-sans">Certified nutritionist and strength training expert.</p>
              </div>
            </div>
            <div className="mt-16 bg-gradient-to-br from-custom-beige to-orange-500 py-12 text-center text-white rounded-lg">
              <h2 className="text-3xl  font-serif">Join the GymBro Community</h2>
              <p className="mt-4 text-lg font-sans">
                Become a part of a vibrant fitness family and achieve your goals today!
              </p>
              <button className="mt-6 px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
