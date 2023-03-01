import React, { useContext } from 'react';
import VisitorContext from '../context/VisitorContext';
import './Home.css';
import '../styles/generalStyles.css';
import Navigation from '../components/Navigation';
import ContactsIcons from '../components/ContactsIcons';

function Home() {
  const {visitor} = useContext(VisitorContext);
  const visitorName = visitor ? visitor : 'Visitante';

  return (
    <section className="home-page">
      <main className="d-flex flex-column justify-content-center align-items-center w-50 h-50  p-5 rounded-5 border border-light container-home">
        <Navigation />
        <section className="d-flex justify-content-center align-items-start font-white m-3 font-20">
          <div className="w-50 text-center">
            <article className="mb-3">{`Bem vindo, ${visitorName}! Fico feliz que você esteja aqui. Criei essa página como um portifólio do meu trabalho e a atualizarei conforme meu desenvolvimento na área.`}</article>
            <article className="font-white">{`${visitorName}, espero que você goste e, se estiver disponível, por que não me dar um feedback de sua experiência? Você pode fazê-lo clicando no botão de carta a seguir, ou na aba de contato. Obrigado por sua visita!`}</article>
          </div>
        </section>
            <ContactsIcons />
      </main>
    </section>
  );
}

export default Home;