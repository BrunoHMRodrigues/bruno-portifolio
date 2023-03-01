import React, { useState } from 'react';
import '../styles/generalStyles.css';

function SectionMoreInfo() {
  const [moreInfoIsVisible, setmoreInfoIsVisible] = useState(false);
  const handleShow = () => {
    setmoreInfoIsVisible(!moreInfoIsVisible);
  }
  return (
    <section className="m-3">
      <button
      type="button"
      onClick={handleShow}
      // hidden={!(buttonMoreInfoShow === 'showMore')}
      hidden={moreInfoIsVisible}
      className="w-100 button-show"
      >
      Mostrar mais informações<i className="bi bi-caret-down-fill"></i>
      </button>
      <section hidden={!moreInfoIsVisible} className="p-5 m-3 rounded-5 border-double">
      <h3 className="text-center">Experiência Profissional</h3>
      <article className="mb-2">Durante minha formação tive oportunidade de estagiar da Bonor, na área de Planejamento e Controle da Produção, e na Salina Soledade, na área administrativa, essa última onde também pude trabalhar.</article>

      <article className="mb-2">Nos últimos anos minha curiosidade e interesses criativos me levaram para a área de desenho 3D. Aprendi a usar softwares como o Sketchup e o Enscape e iniciei atividades autônomas trabalhando com desenhos 3D de projetos arquitetônicos e design de móveis.</article>

      <hr className="hr-aboutme" />
      <h3 className="text-center">Como vim parar aqui?</h3>
      <article className="mb-2">Em meio a minha formação acadêmica eu tive um breve contato com a programação, foi apenas por 1 semestre, entretanto pude começar a perceber o meu interesse e afinidade ao ver pela primeira vez C++, mas foi apenas alguns anos depois quando fiz um curso de Excel com VBA que pude perceber o real gosto pela área. </article>

      <article className="mb-2">Através do curso de Excel com VBA eu comecei a ganhar mais e mais experiência com a programação, pois durante meus estágios era comum a criação de planilhas e eu parecia sempre dar um jeito de incluir o Visual Basic mesmo quando não era realmente necessário. Ao me ver perdendo a noção do tempo e olhando o relógio e percebendo que o dia já estava para raia e eu estava programando um formulário de Excel eu pude perceber o quanto eu gostava da programação</article>

      <article className="mb-2">Embora eu tenha escolhido outros caminhos anteriormente, olhando para trás, eu acredito que era apenas uma questão de tempo até que eu acabasse por dar um jeito e entrasse nesse mercado. Dessa forma, aqui estou!</article>

      <hr className="hr-aboutme" />
      <h3 className="text-center">Curiosidades sobre mim</h3>
      <ul>
        <li className="mb-2">Eu gosto de escrever músicas: Tenho mais de 20 arquivos com letras de músicas que eu escrevi no meu computador (O que não quer dizer que sejam boas KKKK)</li>

        <li>Eu terminei de escrever um livro! Devo dizer que foi uma realização que me deixou bem feliz, entretanto ainda preciso tratar da revisão dele e possível comercialização</li>
      </ul>
      </section>

      <button
      type="button"
      onClick={handleShow}
      hidden={!moreInfoIsVisible}
      className="w-100 button-show"
      >
      <i className="bi bi-caret-up-fill"></i>
      </button>
    </section>
  )
}

export default SectionMoreInfo;