import React from 'react';
import './ContactsIcons.css';

function ContactsIcons() {
  return (
    <div className="d-flex align-items-center container-contact-icons">
      <a href="https://github.com/BrunoHMRodrigues" target="_blank" className="github" rel="noreferrer"><i className="bi bi-github m-1 contact-icon"></i></a>
      <a href="https://linkedin.com/in/bruno-hm-rodrigues" target="_blank" className="linkedin" rel="noreferrer"><i className="bi bi-linkedin m-1 contact-icon"></i></a>
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5584996037363" target="_blank" className="whatsapp" rel="noreferrer"><i className="bi bi-whatsapp m-1 contact-icon"></i></a>
      <a href="mailto:brunohmrodrigues1@hotmail.com" className="whatsapp"><i className="bi bi-envelope m-1 contact-icon"></i></a>  
    </div>      
  )
}

export default ContactsIcons;
