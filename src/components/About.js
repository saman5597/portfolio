import React from 'react'
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import api from "../assets/icons/api.svg";
import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can built a beautiful and scalable SPA using HTML,CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend Development",
        about: "handle database, server, api using Node.js and databases - MongoDB/MySQL"
    },
    {
        icon: api,
        title: "API Development",
        about: "develop robust REST API using Express.js"
    }
]

function About() {
    return (
        <div className="about">
            <h6 className="about__intro">
                Experienced Web Developer with a demonstrated history in IT industry. I describe my self as someone who's persistent, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill => 
                            <Skillcard skill={skill} />                              
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default About
