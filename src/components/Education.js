import EducationImg from '../assets/education.png';
export default function Education() {
    const config = {
        line1:'BE, Computer Science and Engineering-7.5 CGPA',
        line2:'Chendhuran College of Engineering and Technology.'
    }
    return(
        <section className='flex flex-col md:flex-row  px-5 py-5 justify-items-center' id='education'>
            <div className='md:w-1/2 flex justify-center'>
            <img className='w-[250px]' src={EducationImg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex justify-center bg-text'>
            <div className='md:w-1/2 flex flex-col justify-center bg-'>
            <h1 className='text-4xl  border-b-4 border-[#ddaf69] mb-5 w-[174px] font-bold'>Education</h1>
            <p className='pb-5 font-home-font'>{config.line1}<br/>
            {config.line2}</p>
            <h3 className='text-1x2 mb-5 w-[35px] font-bold'>Batch</h3>
            <p className='pb-5 font-home-font'>2020-2024</p>
            </div>
            </div>
        </section>
    );
}
