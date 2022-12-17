import React from 'react'
import './about.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default function AboutMe() {
    return (
        <div className='mainDiv' id="about" >
            <h2 className="pageHeadingA">About Me</h2>
            <div className='containerDiv'>

                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                        I have good set of skills in  HTML, CSS, JavaScript,
                        ReactJs , ExpressJs, MongoDB & NodeJs</p>
                    <ul>
                        <li>I have worked in several different projects and contributed  Self and as well as in team</li>
                        <li>Enthusiast Learner in new set of skills</li>
                        <li>Ability to translate business requirements into technical solutions</li>
                    </ul>
                    <p className="aboutme">Looking to start the career as a web developer</p>

                    <div className="colzs">
                        <div className="colz-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/saurabh-kumar-04b00b23a/"><FaLinkedin className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/srbhkumar624"><FaGithubSquare className='social-media-icon' /></a>
                        </div>
                    </div>
                    <div className='aboutBtnDiv'>
                        {/* <button className='hireMeBtn'>Hire Me</button> */}
                        <a href="saurabh_kumar_resume.pdf" download='saurabh_kumar_resume.pdf'>
                            <button className="getBtn">Get Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
