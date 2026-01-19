import AboutImg from '../assets/about.svg';
const About = () => {
    const config = {
        line1:'I am a computer science Engineer, who enjoys learning and scraping new stuff. I started coding when I was in college second year doing very basic stuff, like building static website with html.',
        line2:'I am proficient in Front end like Reactjs, Html-5, css-3, Javascript, Typescript Tailwindcss, bootstrap and Figma.',
        line3:'I am proficient in Back end Python frameworks like Flask, Django and node js, Express js and mangoDB.'
    }
    return(
        <section className='flex flex-col md:flex-row  px-5 py-5'id='about'>
            <div className='md:w-1/2 flex justify-center'>
                  <img
  src={AboutImg}
  alt="About illustration"
  className="w-[200px]"
/>
            </div>
            <div className='md:w-1/2 flex justify-center bg-text'>
            <div className='md:w-1/2 flex flex-col justify-center bg-'>
            <h1 className='text-4xl  border-b-4 border-[#ddaf69] mb-5 w-[166px] font-bold'>About me</h1>
                    <p className='pb-5 font-home-font'>{config.line1}</p>
                    <p className='pb-5 font-home-font'>{config.line2}</p>
                    <p className='font-home-font'>{config.line3}</p>
    
            <h2 className='text-4xl  font-bold' style={styles.heading}>Contact Details</h2>
                     <p>s/o: kr.selvakumar</p>
                     <p>(vengatramapuram stop)</p>
                     <p>(karaikudi) (Tamilnadu), (630313)</p>
                     <p>(+91) 7094988549</p>
                     <p>cssvasanth@gmail.com</p>
            </div>
            
            </div>
        </section>
    );
};
    const styles = {
        heading: {
          fontWeight: 'bold',
          fontSize: '1.5em',
          marginBottom: '15px',
        }
      };

export default About;
