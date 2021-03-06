import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    
    const [active, setActive] = useState("")

    useEffect(() => {
        let current_url = window.location.href
        if (current_url.endsWith('/')) {
            setActive("About")
        } else if (current_url.endsWith('projects')) {
            setActive("Projects")
        } else if (current_url.endsWith('resume')) {
            setActive("Resume")
        }
    }, [active])

    const navbarMotionVariant = {
        initial: {
            y: '-30vh',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbarMotionVariant}
            initial='initial'
            animate='animate'
        >
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {
                    active!== "About" && 
                    <Link to="/">
                        <div className="navbar__item" onClick={()=> setActive("About")}>About</div>
                    </Link>
                }
                
                {
                    active!== "Resume" && 
                    <Link to="/resume">
                        <div className="navbar__item" onClick={()=> setActive("Resume")}>Resume</div> 
                    </Link>
                }
                
                {
                    active!== "Projects" && 
                   <Link to="/projects">
                     <div className="navbar__item" onClick={()=> setActive("Projects")}>Projects</div>
                   </Link>
                }
            </div>
        </motion.div>
    )
}

export default Navbar