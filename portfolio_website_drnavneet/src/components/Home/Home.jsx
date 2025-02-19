import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import IntroductionData from "../../Data/Home/HomeData";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import profile from "../../assets/profile.jpg";
import award1 from "../../assets/award1.jpeg";
import award2 from "../../assets/award2.jpeg";
import award3 from "../../assets/award3.jpeg";
import award4 from "../../assets/award4.jpeg";
import award5 from "../../assets/award5.jpeg";
import award6 from "../../assets/award6.jpeg";
import award7 from "../../assets/award7.jpeg";
import award8 from "../../assets/award8.jpeg";
import award9 from "../../assets/award9.jpeg";
import award10 from "../../assets/award10.jpeg";
import award11 from "../../assets/award11.jpeg";
import award12 from "../../assets/award12.jpeg";
import award13 from "../../assets/award13.jpeg";
import award14 from "../../assets/award14.jpeg";
import award16 from "../../assets/award16.jpeg";
import award17 from "../../assets/award17.jpeg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
    award10,
    award11,
    award12,
    award13,
    award14,
    award16,
    award17,
  ];

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
          {/* Profile Section */}
          <div
            className="relative flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[100vh] w-full gap-8 lg:gap-[20vw] p-4 lg:p-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://unsplash.com/photos/a-book-shelf-filled-with-lots-of-books-Qs51OLYQE5M')",
            }}
          >
            <div className="absolute inset-0 h-[35vh] w-full">
              <img
                src="https://wallpapers.com/images/hd/professional-background-796z8t01o23nocyp.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex w-[80vw] md:w-[50vw] lg:w-[25vw] h-auto lg:h-[70vh] border-2 border-[#8B4513] p-3 shadow-lg">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-auto lg:h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative w-[90vw] md:w-[60vw] lg:w-[35vw] flex flex-col justify-center items-center lg:items-start gap-6 text-[#8B4513] text-center lg:text-left ">
              <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                {IntroductionData.title}
              </h1>
              <p className="text-xl text-[#bb682c] font-semibold">
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
              <div>
                <Link to="/about">
                  <button className="px-6 py-2 border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="container bg-amber-50 w-full h-auto  lg:h-[90vh] flex flex-col justify-center items-center p-6 ">
            <div className="relative w-[90vw] md:w-[70vw] flex flex-col justify-center items-center gap-6 text-[#8B4513] text-center">
              <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                {IntroductionData.title3}
              </h1>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description4}
              </p>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description5}
              </p>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description6}
              </p>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description7}
              </p>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description8}
              </p>
              <p className="text-2xl  text-[#bb682c] font-semibold">
                - {IntroductionData.description9}
              </p>
              <div>
                <Link to="/projects">
                  <button className="px-6 py-2 border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2 text-2xl">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Video & Media Section */}
          <div className="container w-full h-auto lg:h-[90vh] flex flex-col justify-center items-center p-6">
            <div className="w-full lg:w-[100%] flex flex-col justify-center items-center gap-6 text-[#8B4513] text-center flex-wrap">
              <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                {IntroductionData.title2}
              </h1>

              {/* Videos Container */}
              <div className="videos flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
                {/* MP4 Video */}
                <div className="w-full lg:w-[70%] aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={IntroductionData.description2}
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <div className="w-full lg:w-[70%] aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/O8y4PfSYOP0"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                </div>

                {/* Facebook Video Embed */}
                <div className="w-full lg:w-[70%] aspect-video">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        "https://www.facebook.com/navneetdth/videos/1027514241237202/"
                      )}`}
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Another Facebook Video Embed */}
                <div className="w-full lg:w-[70%] aspect-video">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        "https://www.facebook.com/navneetdth/videos/4715178375258882"
                      )}`}
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="w-full lg:w-[70%] aspect-video">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        "https://www.facebook.com/100000976965363/videos/886526336990273/"
                      )}`}
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/projects">
                  <button className="px-6 py-2 border-2 border-[#8B4513] hover:bg-[#8B4513] hover:text-white transition cursor-pointer my-2 text-2xl">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="container bg-amber-50 w-full h-auto lg:h-[90vh] flex flex-col justify-center items-center p-6">
            <div className="w-full flex flex-col justify-center items-center gap-6 text-[#8B4513] text-center">
              <h1 className="text-2xl md:text-3xl lg:text-[3.5vw] text-black font-bold">
                {IntroductionData.title4}
              </h1>

              <div className="w-full md:w-4/5 lg:w-3/5">
                <Carousel>
                  {images.map((image, i) => (
                    <div key={i} className="flex justify-center">
                      <img
                        src={image}
                        alt="carousel-img"
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
