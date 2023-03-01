// import React, { useContext } from 'react';
import React from 'react';
// import VisitorContext from '../context/VisitorContext';
import './FormVisitorLogin.css';
import '../styles/generalStyles.css';
import './Navigation.css';

function Navigation() {

  return (
    <nav className="container-navigation">
      <ol className="d-flex justify-content-center align-items-center p-0 list-navigation">
        <li><a href="/home" className="navigation">Home</a></li>
        <li><a href="/aboutme" className="navigation">Sobre Mim</a></li>
        <li><a href="/projects" className="navigation">Projetos</a></li>
        <li><a href="/contact" className="navigation">Contato</a></li>
      </ol> 
    </nav>
  );
}

export default Navigation;