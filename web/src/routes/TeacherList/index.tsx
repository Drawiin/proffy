import React from 'react'

import './styles.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/icons/back.svg'

export default function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={back} alt="voltar"/>
                    </Link>
                    <img src={logo} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>Esses são os proffys disponíveis.</strong>
                </div>
            </header>
        </div>
    )
}