import React from 'react';
import './AboutMe.css';
import '../styles/generalStyles.css';
import Navigation from '../components/Navigation';
import SectionWhoIsMe from '../components/SectionWhoIsMe';
import SectionMoreInfo from '../components/SectionMoreInfo';
import SectionSkills from '../components/SectionSkills';
import SectionTechnologies from '../components/SectionTechnologies';
import SectionGithubStats from '../components/SectionGithubStats';


function AboutMe() {
  return (
    <section className="aboutme-page">
      <main className="d-flex flex-column justify-content-center align-items-center w-75 p-5 m-5 rounded-5 border border-light aboutme-main">
        <Navigation />
        <section className="d-flex flex-column align-items-center justify-content-center align-items-start font-white m-3 font-20">
          <section>
            <h3 className="text-center bouncing">Quem sou eu?</h3>            
            <SectionWhoIsMe />
            <SectionMoreInfo />
            <SectionSkills />
            <SectionTechnologies />
            <SectionGithubStats />
          </section>       
          
        </section>
      </main>
    </section>
  );
}

export default AboutMe;