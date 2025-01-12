import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,

  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNetlify,
  SiPython,
  SiDjango,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import df from "./assest/logo.png";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#008080]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#008080]">Lenin J</span>,
          I’m a Python Full Stack Developer with a deep passion for web development. I thrive on turning ideas into functional, user-friendly solutions, constantly pushing myself to learn new technologies and improve my skills. 
          
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#008080] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              < SiPython  size={40} color="#3776AB" className="text-[#e34c26]" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiDjango size={40} color="#092E20" className="text-[#e34c26]" />
              <span className="font-bold">Django</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              < SiMysql size={40} className="text-[#f7df1e]" />
              <span className="font-bold">MySql</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#563d7c]" />
              <span className="font-bold">Tailwind Css</span>
            </div>
  
            <div className="flex flex-col items-center space-y-2">
              <img src={df} style={{ width: '80px', height: 'auto' }}/>
              <span className="font-bold">Django REST</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
        
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
