import React from 'react';
import brunoPicture from '../images/bruno-picture.jpg';
import ufrn from '../images/ufrn.png';
import trybe from '../images/trybe.png';
import gamerBadge from '../images/gamer-badge.png';
import readerBadge from '../images/book-badge.png';
import './SectionWhoIsMe.css';
import '../styles/generalStyles.css';

function SectionWhoIsMe() {
  const currentDate = new Date();
  const bornDate = new Date('10-06-1990')
  const age = Math.floor((currentDate.getTime() - bornDate.getTime()) / (1000*60*60*24*365))
  return (
    <section className="d-flex align-items-start mt-3 mb-3">
      <div>
        <ol className="m-0 mb-3 ol-general">
          <li><h1 className="name">Bruno Henrique Madruga de Almeida Rodrigues</h1></li>
          <li><strong>Nacionalidade:</strong> Brasileiro</li>
          <li><strong>Residindo:</strong> Natal/RN</li>
          <li><strong>Idade:</strong> {age} Anos</li>
          <li className="d-flex align-items-center"><strong>Formação:</strong> 
            <ol className="d-flex flex-column justify-content-start ol-general">
              <li className="m-1">Engenharia de Produção (2009-2015) - UFRN <img src={ufrn} alt="UFRN symbol" className="formation-symbol" /></li>
              <li className="m-1">Desenvolvedor Full Stack (2022- Em curso) - Trybe <img src={trybe} alt="Trybe symbol" className="formation-symbol" /></li>
            </ol>
          </li>
          <li></li>
        </ol>
        <hr className="hr-aboutme" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3>Estudante de Desenvolvimento WEB Full Stack</h3>
          <article className="text-center">Atualmente cursando a Trybe com objetivo de transição de carreira para a área de Desenvolvimento WEB (Full Stack). No momento me encontro no módulo de Front-End, já proximo do fim (Módulos completados: Fundamentos)</article>
        </div>
        <hr className="hr-aboutme" />
      </div>
      <div className="w-100 h-100">
        <img src={brunoPicture} alt="Bruno profile" className="w-100 h-100 rounded-5 border-double" />
        <div>
          <ol className="d-flex ol-general">
            <li><img src={gamerBadge} alt="Gamer badge" className="m-1 rounded-circle badges" /></li>
            <li><img src={readerBadge} alt="Book reader badge" className="m-1 rounded-circle badges" /></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default SectionWhoIsMe;