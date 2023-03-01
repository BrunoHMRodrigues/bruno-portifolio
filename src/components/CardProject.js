import React from 'react';
import propTypes from 'prop-types';
import './CardProject.css';
import '../styles/generalStyles.css';

function CardProjects(props) {
  const {project} = props;
  return (
    <div className="d-flex font-white font-20 rounded-5 container-project">
      <div className="w-50 d-flex align-items-center">
        <img src={project.image} alt={`${project.name} main page`} className="p-4 w-100" />
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center p-3 w-50">
        <h3>Projeto: {project.name}</h3>
        <p>Descrição: {project.description}</p>
        <p>Tecnologias: {project.tecnologies}</p>
        <a href={project.link} target="_blank" rel="noreferrer">Ver Projeto</a>
        <a href={project.github} target="_blank" rel="noreferrer">Abrir Github do projeto</a>        
      </section>
    </div>
  );
}

CardProjects.propTypes = {
  project: propTypes.shape({
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    tecnologies: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    github: propTypes.string.isRequired,
  }).isRequired,
}

export default CardProjects;