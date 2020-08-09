import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import hero from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'


import './styles.css'
import api from '../../services/api'

export default function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
    api.get('connections').then(response => {
        const { total } = response.data;

        setTotalConnections(total);
    })
    }, []);


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo proffy"/>
                    <h2>Sua platafroma de estudos online</h2>
                </div>

                <img 
                    src={hero} 
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to={"/study"} className="study">
                        <img src={study} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to={"/give-classes"} className="give-classes">
                        <img src={giveClasses} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões <img src={purpleHeart} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}