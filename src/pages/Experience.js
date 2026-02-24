

import React from 'react';

const Work = () => {
  const workData = [
    {
      company: "Orbit solar India Pvt Ltd",
      position: "System admin",
      date: "June 2024 - Jan 2026",
      description: At Orbit Solar Company, I manage system administration and oversee daily IT operations to ensure smooth and secure performance. I monitor solar cloud platforms, analyze system data, and troubleshoot technical issues to maintain uninterrupted service. Additionally, I handle expense reporting and operational documentation, supporting efficient business processes and informed decision-making."
    },
    {
      company: "DLK Career Development",
      position: "Industrial visit",
      date: "July 2023",
      description: "Industrial visit Certificate for “React” domain from DLK career development participated and focused on React development, gaining practical insights into modern web development practices and technologies acquired valuable knowledge."
    },
    {
      company: "Nimatooz Smile Mobility Private Limited",
      position: "Industrial visit",
      date: "July 2022",
      description: "web Application development different modules of company projects and software services based works from other country’s."
    },
    {
      company: "Self projects",
      position: "projects",
      date: "Till date",
      description: "I have done two portfolio web sites and chatbot web application in  web development. started with basic html, css, javascript, tailwindcss and react js like a javascript libraries and frameworks. For a chatbot i used python flask framework and libraries (Nltk, Tensorflow, pickle) for a data preparation creates a bag of words representation for the trainning data"
    }
  ];

  return (
    <section style={styles.section}>
     <h2 className='text-4xl  border-b-4 border-[#ddaf69] mb-5 w-[190px] font-bold '>
        Experience
      </h2>
      {workData.map((job, index) => (
        <div key={index} style={styles.workItem}>
          <h3 style={styles.company}>{job.company}</h3>
          <p style={styles.position}>
            <em>{job.position}</em> &nbsp;•&nbsp; {job.date}
          </p>
          <p style={styles.description}>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '20px'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  underline: {
    width: '50px',
    height: '2px',
    backgroundColor: '#007bff', // Adjust color as needed
    margin: 'auto',
    marginBottom: '20px'
  },
  workItem: {
    marginBottom: '30px'
  },
  company: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  position: {
    fontSize: '16px',
    color: '#777'
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginTop: '10px'
  }
};

export default Work;
