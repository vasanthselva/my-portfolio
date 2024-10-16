import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "In plant trainee",
      company: "Lucas TVS, Chennai",
      date: "Feb 2024 - May 2024",
      description: `During my three-month internship at Lucas TVS, I gained comprehensive hands-on experience within a leading manufacturing company specializing in automotive components. 
                    Actively participated in daily production activities, including the assembly and testing of automotive parts. I observed and assisted in optimizing production workflows to enhance efficiency and reduce downtime. 
                    Technical Skills: Acquired practical knowledge in operating manufacturing machinery and utilizing quality control tools. Gained familiarity with industry software used for monitoring production metrics and managing quality data.`
    },
    {
      title: "React development practical insights into modern web development",
      company: "DLK Career Development",
      date: "July 2023",
      description: `Industrial visit Certificate for “React” domain from DLK career development participated and
                focused on React development, gaining practical insights into modern web development
                practices and technologies acquired valuable knowledge.`
    },
    {
        title: "Web Application Development",
        company: "Nimatooz Smile Mobility Private Limited",
        date: "July 2022",
        description: `Industrial visit: web Application development different modules of company projects and software services based works from other country’s. From Nimatooz smile mobility private limited. Founded with the vision of leveraging technology to enhance business efficiency, Nimatooz Smile Mobility has grown to become a significant contributor to the global IT landscape. Their projects span multiple sectors, demonstrating their versatility and adaptability in addressing diverse client needs.
                Web Application Development`
      },
      {
        title: "Self projects",
        company: "projects",
        date: "Till date",
        description: `I have done two portfolio web sites and chatbot web application in  web development. started with basic html, css, javascript, tailwindcss and react js like a javascript libraries and frameworks.
                     For a chatbot i used python flask framework and libraries (NLtk, Tensorflow, pickle) for a data preparation creates a bag of words representation for the trainning data`
      }
  ];

  return (
    <div className="p-8" >
      <h2 className='text-4xl  border-b-4 border-[#ddaf69] mb-5 w-[190px] font-bold '>
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-[#0b192e]">
            {experience.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {experience.company} | {experience.date}
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed justify-items-center bg-text">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;