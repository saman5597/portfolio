import React from 'react'
import github from "../assets/icons/github.svg";

function Projectcard({project : {name, image, deployedUrl, githubUrl, category}}) {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a href={deployedUrl} rel="noopener noreferrer"  target="_blank" >
                    <img src={image} alt={name} className="projectCard__img mt-2" />
                </a>
                <div className="projectCard__title mb-3">
                    <a href={githubUrl} rel="noopener noreferrer"  target="_blank" >
                        <img src={github} alt="github link" className="projectCard__icon mr-2" />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    )
}

export default Projectcard
