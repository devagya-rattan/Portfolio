import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import IntroductionData from "../../Data/Home/HomeData";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <HashLoader color="#8B4513" />
        </div>
      ) : (
        <main>
          <div
            className="relative flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[100vh] w-full gap-8 lg:gap-[20vw] p-4 lg:p-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://unsplash.com/photos/a-book-shelf-filled-with-lots-of-books-Qs51OLYQE5M')",
            }}
          >
            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 h-[35vh] w-full">
              <img
                src="https://wallpapers.com/images/hd/professional-background-796z8t01o23nocyp.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Image Container with Border & Padding */}
            <div className="relative flex w-[80vw] md:w-[50vw] lg:w-[25vw] h-auto lg:h-[70vh] border-2 border-[#8B4513] p-3 shadow-lg">
              <img
                src="https://static.wixstatic.com/media/0b340f_b77e0fbd1b034e858f2628a19542f3b5~mv2.jpg/v1/fill/w_525,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1169172697.jpg"
                alt="Profile"
                className="w-full h-auto lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="relative w-[90vw] md:w-[60vw] lg:w-[35vw] flex flex-col justify-center items-center lg:items-start gap-6 text-[#8B4513] text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                {IntroductionData.title}
              </h1>
              <p className="text-lg text-[#bb682c] font-semibold ">
                {IntroductionData.description}
              </p>
              <p className="flex justify-center lg:justify-start text-2xl gap-1.5">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=navneetdth@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <CiMail />
                </a>
                <Link
                  to="https://www.linkedin.com/in/navnit-kumar-shukla-53470233/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin />
                </Link>
              </p>
              <Link to="/about">
                <button className="px-6 py-2 border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2">
                  Know more
                </button>
              </Link>
            </div>
          </div>

          {/* Responsive Containers */}
          {[
            {
              title: IntroductionData.title3,
              descriptions: [
                IntroductionData.description4,
                IntroductionData.description5,
                IntroductionData.description6,
                IntroductionData.description7,
              ],
            },
            {
              title: IntroductionData.title2,
              descriptions: [
                IntroductionData.description2,
                IntroductionData.description3,
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="container bg-amber-50 w-full h-auto lg:h-[90vh] flex flex-col justify-center items-center p-6"
            >
              <div className="relative w-[90vw] md:w-[70vw] flex flex-col justify-center items-center lg:items-start gap-6 text-[#8B4513] text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                  {section.title}
                </h1>
                {section.descriptions.map((desc, i) => (
                  <p key={i} className="text-lg text-[#bb682c] font-semibold">
                    - {desc}
                  </p>
                ))}
                <Link to="/projects">
                  <button className="px-6 py-2 border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2">
                    More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </main>
      )}
    </>
  );
};

export default Home;
