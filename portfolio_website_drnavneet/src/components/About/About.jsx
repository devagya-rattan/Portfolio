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
        </div>
    );
}

export default About;
