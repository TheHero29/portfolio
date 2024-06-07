import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProgressBar from "../ProgressBar/ProgressBar";
import './Skills.css'
import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { DiMysql} from 'react-icons/di';

function Skills(){
    return (
        <div>
            <Header />
            <h1>Skills</h1>
            <div className="skills-main-container">
            
                    <div class="card"><div class="iconContainer"><FaJava class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><DiMysql class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><FaPython class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><FaHtml5 class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><FaCss3 class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><FaJs class="icon" size={50} /></div></div>
                    <div class="card"><div class="iconContainer"><FaReact class="icon" size={50} /></div></div>
            </div>
            <Footer />
        </div>
    );
}
export default Skills;