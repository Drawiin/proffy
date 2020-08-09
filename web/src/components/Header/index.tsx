import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/icons/back.svg'

import './styles.css'


interface PageHeaderProps {
    title: string,
    description?: string;
}

const Header: React.FC<PageHeaderProps> = ({title, children, description}) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back} alt="voltar"/>
                </Link>
                <img src={logo} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                { description && <p>{description}</p> }

                {children} 
            </div>
        </header>
    )
}

export default Header