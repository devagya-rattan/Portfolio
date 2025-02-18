// Project.jsx
import { useState, useEffect, useRef } from "react";
import { HashLoader } from "react-spinners";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsData from "../../Data/Projects/ProjectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const projectsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-amber-50 to-white">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <HashLoader color="#8B4513" />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {!selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-screen flex items-center justify-center bg-white text-[#8B4513] px-6"
            >
              <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                  Welcome to My Portfolio
                </h1>
                <p className="text-lg mt-4 opacity-90">
                  I am Dr. Navnit Kumar Shukla, a passionate speaker and author,
                  dedicated to innovation and personal branding.
                </p>
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-8 py-3 bg-white text-[#8B4513] font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {!selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-6 md:px-16 py-16 bg-amber-50"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B4513] text-center mb-12">
                My Work & Contributions
              </h2>
              <div className="max-w-6xl mx-auto space-y-12">
                {ProjectsData.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex flex-col md:flex-row ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    } items-center bg-white shadow-lg rounded-lg overflow-hidden p-6`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full md:w-1/2 rounded-lg shadow-md"
                    />
                    <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:px-6">
                      <h3 className="text-3xl font-bold text-[#8B4513]">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mt-2">
                        {project.description.substring(0, 100)}...
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Full-Screen Project Detail View */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 flex justify-center items-center z-50 bg-black/50 backdrop-blur-md px-4 sm:px-8"
              >
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#8B4513] shadow-lg relative flex flex-col md:flex-row w-full max-w-5xl h-[95vh] md:h-[90vh] overflow-hidden rounded-lg"
                >
                  {/* Close Button (Fixed Position) */}
                  <AiOutlineClose
                    className="absolute top-4 right-4 text-white hover:text-black text-3xl cursor-pointer z-10"
                    onClick={() => setSelectedProject(null)}
                  />

                  {/* Left Section: Fixed Image */}
                  <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Right Section: Scrollable Content */}
                  <div className="w-full md:w-1/2 flex flex-col p-6 overflow-y-auto max-h-full md:max-h-[90vh]">
                    <h2 className="text-4xl font-extrabold text-white">
                      {selectedProject.title}
                    </h2>
                    <hr className="border-white my-3" />
                    <p className="text-lg text-gray-100 mt-4 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          {!selectedProject && (
            <motion.div
              ref={projectsRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-6 md:px-16 py-16 bg-white"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B4513] text-center mb-12">
                My Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {ProjectsData.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:shadow-xl"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#8B4513]">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mt-2">
                        {project.description.substring(0, 20)}...
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
