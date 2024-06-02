import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
function Projects(){
    return (
        <div className='projects'>
            <Header />
            <div className='main-container'>
                <ProjectCard heading={"Image Editor"} desc={"Made image editor using java"} src={"https://www.google.com"}/>
                <ProjectCard heading={"Quiz App"} desc={"Made Quiz App using HTML,CSS and javascript"} src={"https://www.google.com"}/>
                <ProjectCard heading={"Web Scrapper"} desc={"Made web scrapper using python"} src={"https://www.google.com"}/>
                <ProjectCard heading={"Vehicle-management-system"} desc={"Made vehicle management system using springboot"} src={"https://www.google.com"}/>
            </div>
            <Footer />
        </div>
    );
}
export default Projects;