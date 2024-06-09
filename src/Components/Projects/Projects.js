import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
function Projects(){
    return (
        <div className='projects'>
            <Header />
            <div className='main-container'>
                <ProjectCard heading={"Image Editor"} desc={"Made image editor using java"} src={"https://github.com/TheHero29/ImageEditor"}/>
                <ProjectCard heading={"Quiz App"} desc={"Made Quiz App using HTML,CSS and javascript"} src={"https://github.com/TheHero29/Quiz-app"}/>
                <ProjectCard heading={"Web Scrapper"} desc={"Made web scrapper using python"} src={"https://www.google.com"}/>
                <ProjectCard heading={"Management-system"} desc={"Contributed to vehicle service management system using springboot"} src={"https://github.com/yasharya2901/VehicleServiceMangement"}/>
            </div>
            <Footer />
        </div>
    );
}
export default Projects;