import React from 'react';
import './SectionTechnologies.css';
import '../styles/generalStyles.css';

function SectionTechnologies() {
  return (
		<div className="tecnologias p-3 mb-3 rounded-5 border-double">
      <h3 className="text-center bouncing">Tecnologias:</h3>
      <ol className="d-flex flex-wrap justify-content-center align-items-center technologies-list ol-general">
        <li>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="JSON badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="Eslint badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VSCode badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js badge" />
        </li>
        <li>
          <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm badge" />
        </li>
        {/* <li>
          <img src="" />
        </li> */}
      </ol>
    </div>      
  )
}

export default SectionTechnologies;