import React from 'react'

function Skillcard({skill: {icon, title, about}}) {
    return (
        <div className="col-lg-6">
            <div className="skillcard">
                <img src={icon} alt="icon" className="skillcard__icon" />
                <div className="skillcard__body">
                    <h6 className="skillcard__title">{title}</h6>
                    <p className="skillcard__content">{about}</p>
                </div>
            </div>
        </div>  
    )
}

export default Skillcard
