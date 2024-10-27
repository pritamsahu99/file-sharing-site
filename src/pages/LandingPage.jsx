// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRightIcon2 from "../components/ui/ArrowRightIcon";

// eslint-disable-next-line react/prop-types
const Feature = ({ icongif, title, description }) => (
  <div
  // initial={{ opacity: 0, y: 8 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 0.4, delay: 2 }}
  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">
      <img className="bg-cover" src={icongif} alt="" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const LandingPage = () => {
  const features = [
    {
      icongif: "../src/assets/icons8-upload.gif",
      title: "Easy Upload",
      description:
        "Drag and drop your files or click to upload with our intuitive interface",
    },

    {
      icongif: "../src/assets/icons8-thunder.gif",
      title: "Lightning Fast",
      description:
        "Upload and share files instantly with our optimized infrastructure",
    },
    {
      icongif: "../src/assets/icons8-sharing.gif",
      title: "Simple Sharing",
      description: "Generate shareable links with optional password protection",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="w-full h-16 fixed z-20 backdrop-blur-sm">
        <motion.div
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
        className="max-w-7xl bg-white/80 absolute left-[42%] border rounded-full border-b-blue-100 shadow-lg shadow-gray-200 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img
                className="w-10 h-10 bg-cover"
                src="src\assets\icons8-uploading-50.png"
                alt=""
              />
              <span className="ml-2 text-xl tracking-wide drop-shadow-xl font-Quiche-Sans font-bold text-gray-800">
                FileShare
              </span>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:flex-row flex-col">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 translate-y-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1
                className="text-4xl font-extrabold font-Saol-Text text-gray-900 sm:text-5xl md:text-6xl">
                     <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Share Files with
                  </motion.span>
                  <motion.span 
                    className="block text-blue-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Speed and Security
                  </motion.span>
                </motion.h1>
                <motion.p
                 initial={{ opacity: 0, y: 8 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: 1.3 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 font-gilroy">
                  Upload, share, and manage your files with ease. Experience
                  lightning-fast transfers with bank-level security, all in one
                  place.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start font-gilroy">
                  <Link to="/upload">
                    <div className="relative h-10 w-60 group">
                      <div className="h-full w-full uppercase md:-translate-y-5 font-gilroy font-semibold px-4 py-6 bg-sky-100 relative rounded-md flex justify-between items-center overflow-hidden cursor-pointer">
                        <h1 className="group-hover:-translate-y-4 group-hover:opacity-0 group-hover:duration-0 duration-300 whitespace-nowrap text-sm tracking-wide">
                          Get Started To Share
                        </h1>
                        <span className="group-hover:-translate-y-4 group-hover:opacity-0 group-hover:duration-0 duration-300">
                          <ArrowRightIcon2 />
                        </span>
                      </div>
                      <div className="absolute md:-translate-y-5 bottom-0 left-1 group-hover:-bottom-2 group-hover:left-0 w-[95%] group-hover:h-full h-0 group-hover:w-full uppercase font-gilroy font-semibold group-hover:px-4 px-3 group-hover:py-6 text-white bg-sky-500 group rounded-md flex justify-between items-center cursor-pointer duration-300">
                        <h1 className="whitespace-nowrap text-sm tracking-wide opacity-0 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2 delay-150 group-hover:duration-300">
                          Get Started To Share
                        </h1>
                        <span className="translate-y-2 delay-150 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:duration-300 ">
                          <ArrowRightIcon2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </main>
          </div>
          <div className="h-[70vh] w-[88rem] ">
            <div className="py-16 leading-5 text-sm font-gilroy">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2 }}
                className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:w-full w-[80vw]">
                  {features.map((feature, index) => (
                    <Feature key={index} {...feature} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 -mt-20 transform translate-x-1/2">
          <div className="w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
