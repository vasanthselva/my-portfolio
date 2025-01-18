
import React from 'react';
import EducationImg from '../assets/education.png';

const Education = () => {
  const educationData = [
    {
      institution: "Chendhuran College of Engineering and Technology",
      degree: "Bachelor of Engineering",
      date: "2020-2024",
      description: " Computer Science and Engineering - FIRST CLASS - 7.58 CGPA"
    }
  ];

  return (
    <section className='flex flex-col md:flex-row  px-5 py-5 justify-items-center' id='education' style={styles.section}>
    <div className='md:w-1/2 flex justify-center'>
            <img className='w-[250px]' src={EducationImg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex justify-center bg-text'>
            <div className='md:w-1/2 flex flex-col justify-center bg-'>
            <h1 className='text-4xl  border-b-4 border-[#ddaf69] mb-5 w-[174px] font-bold'>Education</h1>
      {educationData.map((edu, index) => (
        <div key={index} style={styles.educationItem}>
          <h3 className='pb-5 font-home-font' style={styles.institution}>{edu.institution}</h3>
          <p style={styles.degree}>
            <em>{edu.degree}</em> &nbsp;•&nbsp; {edu.date}
          </p>
          <p style={styles.description}>{edu.description}</p>
        </div>
      ))}
      </div>
      </div>
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
  educationItem: {
    marginBottom: '30px'
  },
  institution: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  degree: {
    fontSize: '16px',
    color: '#777'
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginTop: '10px'
  }
};

export default Education;
