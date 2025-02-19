import { useEffect, useState } from "react";
import AboutData from "../../Data/About/AboutData";
import HashLoader from "react-spinners/HashLoader";
import { affiliations, awards } from "../../Data/About/AboutData";
import navnitsir from "../../assets/navni.jpg";

const About = () => {
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
        <div>
          {/* About Section */}
          <div className="w-full min-h-screen pt-10 pb-8 px-2 md:px-6 sm:px-20 flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 px-2 md:px-10">
              <h1 className="text-4xl sm:text-7xl font-bold text-center sm:text-left">{AboutData.title || 'About'}</h1>
              <p className="pt-4 font-medium text-lg sm:text-xl">{AboutData.para1}</p>
              <p className="font-medium pt-1 text-lg sm:text-xl">{AboutData.para2}</p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center  mt-6 sm:mt-0">
              <img
                src={navnitsir}
                alt="Profile"
                className="w-3/4 h-auto max-w-md"
              />
            </div>
          </div>

          <div className="w-full h-screen bg-amber-50 text-[#5C4033] pt-10 px-6 sm:px-30 flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2">
              <h1 className="text-4xl sm:text-7xl font-bold text-center sm:text-left">Education</h1>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pl-10">
              <div className="py-4">
                <p className="text-2xl sm:text-3xl font-sm">{AboutData.year1}</p>
                <p className="font-medium text-xl sm:text-2xl pt-1">{AboutData.edu1}</p>
                <p className="font-normal text-lg sm:text-xl pt-1">{AboutData.col1}</p>
              </div>
              <div className="py-4">
                <p className="text-2xl sm:text-3xl font-sm">{AboutData.year2}</p>
                <p className="font-medium text-xl sm:text-2xl pt-1">{AboutData.edu2}</p>
                <p className="font-normal text-lg sm:text-xl pt-1">{AboutData.col2}</p>
              </div>
              <div className="py-4">
                <p className="text-2xl sm:text-3xl font-sm">{AboutData.year0}</p>
                <p className="font-medium text-xl sm:text-2xl pt-1">{AboutData.edu0}</p>
                <p className="font-normal text-lg sm:text-xl pt-1">{AboutData.col0}</p>
              </div>
              <div className="py-4">
                <p className="text-2xl sm:text-3xl font-sm">{AboutData.year3}</p>
                <p className="font-medium text-xl sm:text-2xl pt-1">{AboutData.edu3}</p>
                <p className="font-normal text-lg sm:text-xl pt-1">{AboutData.col3}</p>
              </div>
            </div>
          </div>

          <div className="w-full min-h-screen lg:h-screen pt-10 px-6 sm:px-30 flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2">
              <h1 className="text-4xl sm:text-7xl font-bold text-center sm:text-left pl-10">{AboutData.title || 'Experience'}</h1>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center sm:pl-10 mt-6 sm:mt-0">
              <div className="py-6">
                <p className="text-2xl sm:text-3xl font-sm">{AboutData.expy1}</p>
                <p className="font-medium text-base sm:text-xl pt-1">{AboutData.expd1}</p>
                <p className="font-normal text-base sm:text-lg pt-1">{AboutData.expp11}</p>

                <p className="pt-4 text-2xl sm:text-3xl font-sm">{AboutData.expy2}</p>
                <p className="font-medium text-base sm:text-xl pt-1">{AboutData.expd2}</p>
                <p className="font-normal text-base sm:text-lg pt-1">{AboutData.expp2}</p>

                <p className="pt-4 text-2xl sm:text-3xl font-sm">{AboutData.expy3}</p>
                <p className="font-medium text-base sm:text-xl pt-1">{AboutData.expd3}</p>
                <p className="font-normal text-base sm:text-lg pt-1">{AboutData.expp3}</p>

                <p className="pt-4 text-2xl sm:text-3xl font-sm">{AboutData.expy4}</p>
                <p className="font-medium text-base sm:text-xl pt-1">{AboutData.expd4}</p>
                <p className="font-normal text-base sm:text-lg pt-1">{AboutData.expp4}</p>

                <p className="pt-4 text-2xl sm:text-3xl font-sm">{AboutData.expy5}</p>
                <p className="font-medium text-base sm:text-xl pt-1">{AboutData.expd5}</p>
                <p className="font-normal text-base sm:text-lg pt-1">{AboutData.expp5}</p>
              </div>
            </div>
          </div>



          <div className="min-h-screen bg-amber-50 text-[#5C4033] py-16 px-6 sm:px-20 flex justify-center items-center">
            <div className="max-w-6xl w-full flex flex-col gap-16">

              <div className="flex flex-col md:flex-row gap-16">
                {/* Affiliations Section */}
                <div className="flex-1 bg-white shadow-2xl rounded-2xl p-10">
                  <h2 className="text-4xl font-bold text-[#5C4033] mb-8">Affiliations</h2>
                  <ul className="list-disc list-inside space-y-5">
                    {affiliations.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Awards and Achievements Section */}
                <div className="flex-1 bg-white shadow-2xl rounded-2xl p-10">
                  <h2 className="text-4xl font-bold text-[#5C4033] mb-8">Awards and Achievements</h2>
                  <ul className="list-disc list-inside space-y-5">
                    {awards.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.description && ` - ${item.description}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 px-6 flex justify-center items-center">
            <div className="max-w-4xl text-center p-5">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
                Beyond his professional achievements, Navnit Kumar Shukla finds solace in the art of
                <span className="font-semibold"> poetry</span>, the discipline of
                <span className="font-semibold"> yogasanas</span>, and the strategic depth of
                <span className="font-semibold"> chess</span>. These passions not only fuel his creativity but also reflect
                his thoughtful and balanced approach to life and academia.
              </p>
            </div>
          </div>


        </div>
      )}
    </>
  );
}

export default About;
