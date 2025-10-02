import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Typewriter from 'typewriter-effect';

function App() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const cvLinkEN = "https://drive.google.com/file/d/1465E_bdExknG0O735UG5WSJXpaM6J0ff/view?usp=sharing";
  const cvLinkES = "https://drive.google.com/file/d/1tpT3AEMFhMmYz7zRk4ZzWEvgVfa7-Ah1/view?usp=sharing";

  return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Typewriter
                options={{
                  strings: ['Milena Sivit'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </a>
    
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#skills">{language === 'EN' ? 'Skills' : 'Habilidades'}</a></li>
                <li className="nav-item"><a className="nav-link" href="#works">{language === 'EN' ? 'Works' : 'Proyectos'}</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">{language === 'EN' ? 'Experience' : 'Experiencia'}</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">{language === 'EN' ? 'About me' : 'Sobre mi'}</a></li>
                <li className="nav-item">
                  <a 
                    className="nav-link"
                    href={language === 'EN' ? cvLinkEN : cvLinkES}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === 'EN' ? 'Read.cv' : 'Leer.cv'}
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={toggleLanguage}>
                    {language}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
        {/* Secciones */}
        <section id="home" className={`home-section ${language === 'EN' ? 'bg-en' : 'bg-es'}`}>
        </section>
    
        <section id="skills" className="skills-section">
          <h2>{language === 'EN' ? 'Skills' : 'Habilidades'}</h2>
          {/* acá van tus cards con modales */}
        </section>
    
        <section id="works" className="works-section">
          <h2>{language === 'EN' ? 'Works' : 'Proyectos'}</h2>
        </section>
    
        <section id="experience" className="experience-section">
          <h2>{language === 'EN' ? 'Experience' : 'Experiencia'}</h2>
        </section>
    
        <section id="about" className="about-section">
          <h2>{language === 'EN' ? 'About me' : 'Sobre mi'}</h2>
        </section>

        <footer className="footer bg-body-tertiary text-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Milena Sivit — {language === 'EN' ? 'All rights reserved' : 'Todos los derechos reservados'}
          </p>
        </footer>
        
      </div>
    );
}

export default App;
