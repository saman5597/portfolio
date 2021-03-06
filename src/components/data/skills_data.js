import React from 'react'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import api from '../../assets/icons/api.svg'

const data_skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can built a beautiful and scalable SPA using ", <strong key={1}>HTML,CSS</strong>, " and ", <strong key={1}>React</strong>]
    },
    {
        icon: repair,
        title: "Backend Development",
        about: ["handle database, server, api using ", <strong key={1}>Node.js</strong> , " and databases - " , <strong key={2}>MongoDB/MySQL</strong>]
    },
    {
        icon: api,
        title: "API Development",
        about: ["develop robust REST API using ", <strong key={1}>Express.js</strong>]
    }
]

export default data_skills