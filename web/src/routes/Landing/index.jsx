import React from 'react'

import logo from '../../assets/images/logo.svg'
import hero from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'


import './styles.css'

export default function Landing(){
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
                    <a href="" className="study">
                        <img src={study} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClasses} alt="Dar Aulas"/>
                        Dar Aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões <img src={purpleHeart} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}