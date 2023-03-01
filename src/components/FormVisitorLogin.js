import React, { useContext, useEffect } from 'react';
import VisitorContext from '../context/VisitorContext';
import './FormVisitorLogin.css';
import '../styles/generalStyles.css';
import profileUser from '../images/login-user.png';
import profileAnonymous from '../images/anonymous.png';

function FormVisitorLogin() {
  const visitorMsg = 'Seja bem-vindo ao meu portifólio. Meu nome é Bruno. como você se chama?';
  const {visitor, setVisitor, history} = useContext(VisitorContext);

  useEffect(() => {
    setVisitor('');
  }, [setVisitor]);
  const handleVisitor = ({ target }) => {
    setVisitor(target.value);
  }

  const handleGoHome = () => {
    history.push('/home');
  }
  return (
    <main
      className="d-flex flex-column p-5 rounded-5 border border-light form-visitor-login"
    >
      <h4 className="font-white m-3">{ visitorMsg }</h4>
      <input
        placeholder="Informe seu nome"
        onChange={handleVisitor}
        className="m-3 text-center"
      />
      <section className="d-flex flex-column align-items-center">  
        <button
          type="button"
          onClick={handleGoHome}
          className={visitor
          ? 'btn btn-primary w-50'
          : 'btn btn-secondary w-50'}
        >
          {visitor ? visitor : 'Anônimo'}
        </button>                   
        <img
          src={visitor ? profileUser : profileAnonymous}
          alt={visitor ? 'Profile user' : 'Profile Anonymous user'}
          className="profile-image m-2"
        />
        {
          <p className="font-white m-3">
            {visitor ? `Entrar como: ${visitor}` : 'Entrar como: Anônimo'}
          </p>
        }
      </section>
    </main>
  );
}

export default FormVisitorLogin;