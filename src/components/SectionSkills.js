import React, { useState } from 'react';
import './SectionSkills.css';
import '../styles/generalStyles.css';

function SectionSkills() {
  const [abilityInfoIsVisible, setAbilityInfoIsVisible] = useState('');
  const handleOverAbility = ({target}) => {
    setAbilityInfoIsVisible(target.id);
  }
  const handleOnMouseOutAbility = () => {
    setAbilityInfoIsVisible('');
  }
  return (
    <div className="p-3 rounded-5 mb-3 border-double">
      <h3 className="text-center bouncing">Habilidades:</h3>
      <div className="d-flex">
        <ul className="skills-list w-50">
            <li className="li-emphasis-high" id="criativity" onMouseOver={handleOverAbility} onMouseOut={handleOnMouseOutAbility}> Criatividade </li>
            <li className="li-emphasis-medium">Responsabilidade</li>
            <li className="li-emphasis-medium">Adaptabilidade</li>
            <li className="li-emphasis-medium">Inteligência Emocional</li>
            <li className="li-emphasis-medium">Comunicação</li>
            <li className="li-emphasis-medium">Colaboração</li>
            <li>Pensamento Crítico</li>
            <li>Empatia</li>
            <li>Inglês (Intermediário)</li>
            <li>Microsoft Office</li>
            <li>Excel com VBA</li>
            <li>Sketchup</li>
            <li>Enscape</li>
        </ul>
        <div className="d-flex flex-column align-items-center w-50">
          {abilityInfoIsVisible === 'criativity' && <article>Criatividade é...</article>}
        </div>
      </div>
    </div>
  )
}

export default SectionSkills;