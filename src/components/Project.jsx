const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#008080]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Blog Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#008080] font-extrabold text-[32px] mb-4">
              Blog Project
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            A Blog Website that allows users to read and engage with posts across various categories,
             featuring a user-friendly interface for content management and an admin panel for 
             efficient administration. Built using Bootstrap, Django, and MySQL.
            </p>
            <a
              href=""
              className="text-[#008080] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Weather Application */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#008080] font-extrabold text-[32px] mb-4">
              Weather Application
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            A Weather Application that provides real-time weather updates based on user input,
             featuring a simple, intuitive interface. Built using Bootstrap, Django, and MySQL.
            </p>
            <a
              href=""
              className="text-[#008080] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
       

      

        
      </div>
    </div>
  );
};

export default Project;
