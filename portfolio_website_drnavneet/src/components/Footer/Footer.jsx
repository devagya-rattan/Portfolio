import { Facebook, Twitter, Mail, Linkedin } from "lucide-react";
//footer
const Footer = () => {
  return (
    <footer className="bg-[#5C4033] text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4 z-30">
        {/* First Row: Contact Me & Icons */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-md font-semibold">Contact Me:</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 space-y-4 md:space-y-0">
            <a href="https://x.com/navneetdth" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-7 h-7 hover:text-blue-400 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/navneetdth/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-7 h-7 hover:text-blue-600 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=navneetdth@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-7 h-7 hover:text-red-500 transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.researchgate.net/profile/Navnit-Shukla" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg"
                alt="ResearchGate"
                className="w-7 h-7 hover:opacity-80 transition-transform transform hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/navnit-kumar-shukla-53470233/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 hover:text-blue-500 transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Second Row: Copyright */}
        <p className="text-sm font-medium mt-6 text-center">&copy; 2024 Trikor Technologia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
