import React from 'react'
import './about.css'
import { motion } from "framer-motion";
import data_skills from "../data/skills_data";
import Skillcard from '../Skillcard';

function About() {

    const aboutMotionVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6
            }
        }, 
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="about"
            variants={aboutMotionVariant}
            initial='initial'
            animate='animate'
            exit="exit"
        >
            <h6 className="about__intro">
                Experienced Web Developer with a demonstrated history in IT industry. I describe my self as someone who's persistent, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        data_skills.map(skill => 
                            <Skillcard key={skill.title} skill={skill} />                              
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About
