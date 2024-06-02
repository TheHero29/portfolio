import {FaGithub} from 'react-icons/fa6';
import './ProjectCard.css';
function ProjectCard({heading,desc,src}){
    return(
        <div className="project-card">
            <div className="top">
            <h3>{heading}</h3>
            </div>
            <div className="mid">
            <p>{desc}</p>
            </div>
            <div className="bottom">
                <a href={src} target='_blank'>
                    <FaGithub  className='icon'/>
                </a>
            </div>
        </div>
    );
}
export default ProjectCard;