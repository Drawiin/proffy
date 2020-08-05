import React from 'react'

import whatsapp from '../../assets/images/icons/whatsapp.svg'


import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
                    <header>
                        <img 
                            src="https://pbs.twimg.com/profile_images/1284301683380625409/9aNFXowQ_400x400.jpg"
                            alt="avatar"
                        />

                        <div>
                            <strong>Vinicius Santos</strong>
                            <span>Biologia</span>
                        </div>
                    </header>
                    <p>
                       Entusiasta das mais modernas descobertas em microbiologia
                       <br/><br/>
                        Apaixonado pelas maravilhas que a a natureza e a evolução nos proporcionam
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        
                        <button type="button">
                                <img src={whatsapp} alt=""/>
                                Entrar em contato
                            </button>
                    </footer>
               </article>
    )
}

export default TeacherItem