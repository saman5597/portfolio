import React from 'react'
import './resume.css'
import { motion } from "framer-motion";
import Bar from '../Bar'
import {data_languages, data_tools} from "../data/resume_data";

function Resume() {

    const resumeMotionVariant = {
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
        <motion.div className="container resume"
            variants={resumeMotionVariant}
            initial='initial'
            animate='animate'
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-card__name">
                            AP Goyal Shimla University (2014-2018) 
                        </p>
                        <p className="resume-card__details">
                            Experienced Software Developer with a demonstrated history in IT industry. Skilled in Javascript, Microsoft Kaizala SDK, Microsoft Flows and Connectors, Node.js (Express.js), React, PHP (Codeigniter) and databases (MongoDB, MySQL). 
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Full Stack Developer
                        </h5>
                        <p className="resume-card__name">
                            AgVa Healthcare Pvt. Ltd. (Oct'20 - till date)
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Web Developer
                        </h5>
                        <p className="resume-card__name">
                            Proprofs Pvt. Ltd. (Mar'20 - Sep'20)
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Software Developer
                        </h5>
                        <p className="resume-card__name">
                            PC Solutions Pvt. Ltd. (Sep'19 - Mar'20)
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Languages, Libraries & Frameworks
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            data_languages.map(language => 
                                <Bar key={language.name} software={language} />                          
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools, Databases & Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            data_tools.map(tool => 
                                <Bar key={tool.name} software={tool} />                              
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
