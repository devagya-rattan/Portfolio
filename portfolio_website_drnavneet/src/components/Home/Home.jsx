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
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <HashLoader color="#8B4513" />
        </div>
      ) : (
        <div
          className="relative flex justify-center items-center h-[90vh] w-full gap-[20vw] bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://unsplash.com/photos/a-book-shelf-filled-with-lots-of-books-Qs51OLYQE5M')",
          }}
        >
          {/* Overlay for Better Readability */}
          <div className="absolute inset-0 bg-[#d6d6d0] h-[35vh] w-full">
            <img
              src="https://wallpapers.com/images/hd/professional-background-796z8t01o23nocyp.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section (Placed Above the Background) */}
          <div className="relative flex w-[25vw] h-[70vh]">
            <img
              src="https://static.wixstatic.com/media/0b340f_b77e0fbd1b034e858f2628a19542f3b5~mv2.jpg/v1/fill/w_525,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1169172697.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content (Placed Above the Background) */}
          <div className="relative w-[35vw] flex flex-col justify-center items-start gap-[3vh] text-[#8B4513]">
            <h1 className="text-[3.5vw] font-bold text-[#8B4513]">
              {IntroductionData.title}
            </h1>
            <p className="text-lg text-[#bb682c]">
              {IntroductionData.description}
            </p>
            <p className="flex flex-row justify-center text-2xl gap-1.5">
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
            <button className="px-6 py-2 border-2 border-[#8B4513] hover: hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2">
              Know more
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
