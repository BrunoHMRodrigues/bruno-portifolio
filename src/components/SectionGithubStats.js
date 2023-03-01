import React, { useState } from 'react';
import '../styles/generalStyles.css';

function SectionGithubStats() {
  const [gitStatsIsVisible, setGitStatsIsVisible] = useState(false);
  const handleGitShow = () => {
    setGitStatsIsVisible(!gitStatsIsVisible);
  }
  return (
    <section>
      <button
        type="button"
        onClick={handleGitShow}
        hidden={gitStatsIsVisible}
        className="w-100 button-show"
      >
        Mostrar Github Stats<i className="bi bi-caret-down-fill"></i>
      </button>

      <section hidden={!gitStatsIsVisible} className="p-5 rounded-5 border-double">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center bouncing">Github Stats:</h3>
          <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=BrunoHMRodrigues" alt="Github Stats" className="w-75 m-3" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrunoHMRodrigues" alt="Most used Languages Github" className="w-75 m-3" />
          <img src="https://github-profile-trophy.vercel.app/?username=BrunoHMRodrigues" alt="Most used Languages Github" className="w-75 m-3" />
        </div>
      </section>

      <button
        type="button"
        onClick={handleGitShow}
        hidden={!gitStatsIsVisible}
        className="w-100 button-show"
      >
        <i className="bi bi-caret-up-fill"></i>
      </button>
    </section>
  )
}

export default SectionGithubStats;