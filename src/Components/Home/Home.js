import './Home.css'
import coding_img from '../../assets/coding_img.svg' 
import coding_img2 from '../../assets/coding_img2.svg'
import thinking_img from '../../assets/undraw_code_thinking_re_gka2.svg'
import coding_img3 from '../../assets/undraw_firmware_re_fgdy.svg'
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter} from 'react-icons/fa6';

function Home(){
    return (
        <div>
            <div class="about-me">
                <div class="text">
                    <div className='intro'>
                    <h1>
                        Hello All! I am Loukik
                    </h1>
                    </div>
                    <div>
                    <p>I like computers</p>
                    </div>
                    <div className='icons-container' target="_blank">
                    <a href="https://www.instagram.com">
                        <FaInstagram className='icons'/>
                    </a>
                    <a href="https://www.github.com" target="_blank">
                        <FaGithub  className='icons'/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                        <FaLinkedin className='icons'/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <FaXTwitter className='icons' />
                    </a>
                    </div>
                </div>
                <div class="img">
                    <span>
                    <img src={coding_img}></img>
                    </span>
                </div>
            </div>
            <div class="what-I-do">
                <h1>What I do?</h1>
                <div className="dsa card">
                    <div className='img'>
                        <div className='img-container'>
                            <img src = {thinking_img}></img>
                        </div>
                    </div>
                    <div className='text'>
                    <h2>
                        Data stucture and Algorithms
                    </h2>
                    <p>
                        I solve questions on leetcode, codechef. I use java.
                    </p>
                    </div>
                </div>
                <div className="web-dev card">
                    <div className='text'>
                    <h2>
                        Web Development
                    </h2>
                    <p>
                        Learning web development. I know HTML,CSS and javascript. Currently learning React.
                    </p>
                    </div>
                    <div className='img'>
                        <div className='img-container'>
                            <img src = {coding_img2}></img>
                        </div>
                    </div>
                </div>
                <div className="backend card">
                    <div className='img'>
                        <div className='img-container'>
                            <img src = {coding_img3}></img>
                        </div>
                    </div>
                    <div className='text'>
                    <h2>
                        Backend and Databases
                    </h2>
                    <p>
                        I've used sping-boot and currently leaning MySQL.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
