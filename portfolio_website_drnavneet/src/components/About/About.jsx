import AboutData from "../../Data/About/AboutData";

const About = () => {
    return (
        <div>
            {/* first page about */}
            <div className="w-full h-screen  pt-10 px-20 flex items-center">
                <div className="w-1/2 px-10">
                    <h1 className="text-7xl font-light">About</h1>
                    <p className="pt-4  font-light">{AboutData.para1}</p>
                    <p className="font-light pt-1">{AboutData.para2}</p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" 
                        alt="Profile" 
                        className="w-3/4 h-auto max-w-md"
                    />
                </div>
            </div>
            <div className="w-full h-screen bg-amber-50 text-[#5C4033] pt-10 px-30 flex items-center">
                <div className="w-1/2 px-10">
                    <h1 className="text-7xl font-light">Education</h1>
                </div>
                <div className="w-1/2 flex-col justify-center">
                <div className="py-4">
                <p className="pt-4 text-3xl  font-light">{AboutData.year1}</p>
                <p className="font-light text-2xl pt-1">{AboutData.edu1}</p>
                <p className="font-light text-xl pt-1">{AboutData.col1}</p>
                </div>
                <div className="py-4">
                <p className="pt-4 text-3xl font-light">{AboutData.year2}</p>
                <p className="font-light text-2xl pt-1">{AboutData.edu2}</p>
                <p className="font-light text-xl pt-1">{AboutData.col2}</p>
                </div>
                <div className="py-4">
                <p className="pt-4 text-3xl font-light">{AboutData.year3}</p>
                <p className="font-light text-2xl pt-1">{AboutData.edu3}</p>
                <p className="font-light text-xl pt-1">{AboutData.col3}</p>
                </div>
                </div>
            </div>

            <div className="w-full h-screen pt-10 px-30 flex items-center">
                <div className="w-1/2 flex-col justify-center">
                <div className="py-4">
                <p className="pt-4 text-2xl  font-light">{AboutData.expy1}</p>
                <p className="font-light text-base pt-1">{AboutData.expd1}</p>
                <p className="font-light text-base pt-1">{AboutData.expp2}</p>
               
                <p className="pt-4 text-2xl  font-light">{AboutData.expy2}</p>
                <p className="font-light text-base pt-1">{AboutData.expd2}</p>
                <p className="font-light text-base pt-1">{AboutData.expp2}</p>

                <p className="pt-4 text-2xl  font-light">{AboutData.expy3}</p>
                <p className="font-light text-base pt-1">{AboutData.expd3}</p>
                <p className="font-light text-base pt-1">{AboutData.expp3}</p>

                <p className="pt-4 text-2xl  font-light">{AboutData.expy4}</p>
                <p className="font-light text-base pt-1">{AboutData.expd4}</p>
                <p className="font-light text-base pt-1">{AboutData.expp4}</p>

                <p className="pt-4 text-2xl  font-light">{AboutData.expy5}</p>
                <p className="font-light text-base pt-1">{AboutData.expd5}</p>
                <p className="font-light text-base pt-1">{AboutData.expp5}</p>
                </div>
                </div>
                <div className="w-1/2 px-10 ">
                    <h1 className="text-7xl pl-20 font-light">Experience</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
