import React from 'react'
import { motion } from "framer-motion";
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import profile from '../assets/profile.jpg'
import resume from '../assets/SamanResume.pdf'

function Sidebar() {

    const emailMe = () => {
        window.open("mailto:saman.arshad97@gmail.com")
    }

    const sidebarMotionVariant = {
        initial: {
            x: '-20vw'
        },
        animate: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebarMotionVariant}
            initial='initial'
            animate='animate'
        > 
            <img src={profile} alt="Avatar" className="sidebar__avatar" />   
            <div className="sidebar__name">
                Saman <span>Arshad</span>
            </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                    <div className="sidebar__item sidebar__resume">
                        <img src={tie} alt="Resume" className="sidebar__icon" /> Download Resume
                    </div>
            </a>
            <figure className="sidebar__socialicons my-2">
                <a href="https://twitter.com/97saman"><img src={twitter} alt="Twitter" className="sidebar__icon mr-3" /></a>
                <a href="https://www.facebook.com/sam597"><img src={facebook} alt="Facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/saman-arshad-a03518125"><img src={linkedin} alt="Linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/saman_arshad5"><img src={instagram} alt="Instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/saman5597"><img src={github} alt="Github" className="sidebar__icon mr-3" />Github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="Location" className="sidebar__icon mr-3" />
                    Noida, India</div>
                <div className="sidebar__item">saman.arshad97@gmail.com</div>
                <div className="sidebar__item">8178587528</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={emailMe}>Email me</div>
        </motion.div>
    )
}

export default Sidebar
