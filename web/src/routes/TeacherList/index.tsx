import React from 'react'

import './styles.css'
import Header from '../../components/Header'


export default function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
           <Header title={"Esses são os proffys disponíveis."}>
                <form id="search-teacher">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject"/>
                   </div>
                   
                   <div className="input-block">
                       <label htmlFor="week_day">Dia da semana</label>
                       <input type="text" id="week_day"/>
                   </div>
 
                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
           </Header>

           <main>
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
                   </p>
                   <br/><br/>
                   Apaixonado pelas maravilhas que a a natureza e a evolução nos proporcionam
               </article>
           </main>
        </div>
    )
}