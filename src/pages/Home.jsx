import CarouselComponent from '../components/CarouselComponent';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import ProjectList from '../components/ProjectList';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import { data } from '../data';

const Home = () => {
  const { projects, skills } = data;

  return (
    <div>
      <CarouselComponent />
      <About />
      <Education />
      <Skills skills={skills} />
      <ProjectList projects={projects.slice(0, 3)} />
      <Experience />
      <Contact />
    </div>
  );
};
export default Home;
