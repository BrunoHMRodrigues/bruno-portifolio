import React from 'react';
import ContactsIcons from '../components/ContactsIcons';
import Navigation from '../components/Navigation';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <main className="d-flex flex-column justify-content-center align-items-center w-50 h-50  p-5 rounded-5 border border-light container-contact">
        <Navigation />
        <ContactsIcons />
      </main>
    </section>
  );
}

export default Contact;