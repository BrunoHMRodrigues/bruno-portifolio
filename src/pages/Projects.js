import React, { useState } from 'react';
import CardProject from "../components/CardProject";
import Navigation from '../components/Navigation';
import './Projects.css';
import projects from '../data/projectsData';

function Projects() {
	const [currentProject, setCurrentProject] = useState(0);

	const handlePreviousProject = () => {
		if(currentProject > 0) {
			setCurrentProject(currentProject - 1);
		} else {
			setCurrentProject(projects.length - 1);
		}
	}

	const handleNextProject = () => {
		if(currentProject < (projects.length - 1)) {
			setCurrentProject(currentProject + 1);
		} else {
			setCurrentProject(0);
		}
	}
  return (
		<section className="projects-page">
			<main className="d-flex flex-column justify-content-center align-items-center w-75 p-5 m-5 rounded-5 border border-light container-projects">
				<Navigation />
					<div className="d-flex justify-content-center align-items-center">
						<button type="button" onClick={handlePreviousProject} className="m-3 p-0 btn"><i className="bi bi-arrow-left-square-fill font-white btn-control-projects"></i></button>
					
						<CardProject project={projects[currentProject]} />

						<button type="button" onClick={handleNextProject} className="m-3 p-0 btn"><i className="bi bi-arrow-right-square-fill font-white btn-control-projects"></i></button>
					</div>
					<p className="font-white font-30 m-4">Total de Projetos: {projects.length}</p>
			</main>
		</section>
  );
}

export default Projects;