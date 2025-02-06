import ProjectsData from "../../Data/Projects/ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-white text-[#8B4513]">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg mt-4">
            I am Dr. Navnit Kumar Shukla, a passionate speaker and author,
            dedicated to innovation and personal branding.
          </p>
          <Link to="/about">
            <button className="mt-6 px-6 py-3 bg-[#8B4513] text-white font-semibold rounded-lg shadow-md hover:bg-brown-700 hover:text-white transition">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-8 py-16 bg-brown-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-brown-800">
              Featured Project
            </h2>
            <p className="text-lg text-brown-600">
              Explore my latest work, research, and contributions to marketing
              and branding.
            </p>
            <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:bg-brown-700 transition">
              Explore
            </button>
          </div>
          <img
            src={ProjectsData[0].image}
            alt={ProjectsData[0].title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-16 bg-white">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brown-800">
                {project.title}
              </h3>
              <p className="text-brown-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
