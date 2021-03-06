import React from 'react'
import './projects.css'
import { motion } from "framer-motion";
import data_projects from "../data/project_data";
import Projectcard from '../Projectcard';

function Projects() {

    const projectMotionVariant = {
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
        <motion.div className="container projects"
            variants={projectMotionVariant}
            initial='initial'
            animate='animate'
            exit="exit"
        >
           <div className="row">
            {
                data_projects.map(project => 
                    <Projectcard key={project.name} project={project} />                              
                )
            }
           </div>
        </motion.div>
    )
}

export default Projects
