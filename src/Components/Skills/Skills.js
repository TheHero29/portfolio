import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProgressBar from "../ProgressBar/ProgressBar";
import './Skills.css'
import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { DiMysql} from 'react-icons/di';
import { FaLinux, FaNodeJs } from 'react-icons/fa';
import { SiMongodb,SiExpress,SiGnubash,SiTypescript, SiSpring } from 'react-icons/si';

function Skills(){
    return (
        <div>
            <Header />
            <h1>Skills</h1>
            <div className="skills-main-container">
                    <div class="scard"><div class="iconContainer"><FaJava className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><DiMysql className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaPython className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaHtml5 className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaCss3 className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaJs className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaReact className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><SiGnubash className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaNodeJs className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><SiTypescript className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><SiSpring className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><SiExpress className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><SiMongodb className="sicon" size={50} /></div></div>
                    <div class="scard"><div class="iconContainer"><FaLinux className="sicon" size={50} /></div></div>

            </div>
            <Footer />
        </div>
    );
}
export default Skills;