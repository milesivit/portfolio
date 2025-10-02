import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Typewriter from 'typewriter-effect';

import javaLogo from './img/java.png';
import frontendLogo from './img/ant.png';
import sqlLogo from './img/sqlserver.png';
import cicdLogo from './img/github.png';
import clickupLogo from './img/clickup3.png';
import vboxLogo from './img/virtualbox.png';

function App() {
  const [language, setLanguage] = useState('EN');
  const [visible, setVisible] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const cvLinkEN = "https://drive.google.com/file/d/1465E_bdExknG0O735UG5WSJXpaM6J0ff/view?usp=sharing";
  const cvLinkES = "https://drive.google.com/file/d/1tpT3AEMFhMmYz7zRk4ZzWEvgVfa7-Ah1/view?usp=sharing";

  //skills en un array
  const skills = [
    {
      id: 1,
      titleEN: "Back-end",
      img: javaLogo,
      titleES: "Back-end",
      descEN: "I worked as a back-end developer with Java Spring Boot. I also have experience with Node.js, Python, Flask, and Django, which is the area I am most passionate about.",
      descES: "Me desempeñé como desarrolladora back-end, trabajando con Java Spring Boot. Cuento además con conocimientos de Node.js, Python, Flask y Django, área en la que más disfruto trabajar."
    },
    {
      id: 2,
      titleEN: "Front-end",
      titleES: "Front-end",
      img: frontendLogo,
      descEN: "I have worked on the design and development of websites with varying levels of complexity, from static sites to interactive applications. I use core technologies such as HTML, CSS, and JavaScript, and work with modern frameworks and tools like React, Bootstrap, Ant Design, Vite, Tauri, and TypeScript.",
      descES: "He trabajado en el diseño y desarrollo de sitios web con distintos niveles de complejidad, desde páginas estáticas hasta aplicaciones interactivas. Utilizo tecnologías base como HTML, CSS y JavaScript, y trabajo con frameworks y herramientas modernas como React, Bootstrap, Ant Design, Vite, Tauri y TypeScript."
    },
    {
      id: 3,
      titleEN: "Database",
      titleES: "Base de datos",
      img: sqlLogo,
      descEN: "Designed and managed databases following best practices in modeling, normalization, and optimization to ensure system performance and data consistency. Experienced with SQLite, SQL Server, and MongoDB.",
      descES: "Diseñé y gestioné bases de datos siguiendo las mejores prácticas de modelado, normalización y optimización para garantizar el rendimiento del sistema y la consistencia de los datos. Experiencia con SQLite, SQL Server y MongoDB."
    },
    {
      id: 4,
      titleEN: "CI/CD Pipelines",
      titleES: "Pipelines CI/CD",
      img: cicdLogo,
      descEN: "Implementation of continuous integration and deployment pipelines with GitHub Actions and Jenkins.",
      descES: "Implementación de pipelines de integración y despliegue continuo con GitHub Actions y Jenkins."
    },
    {
      id: 5,
      titleEN: "Tools and Platforms",
      titleES: "Herramientas y plataformas",
      img: clickupLogo,
      descEN: "Experience with Microsoft Office, proficient in GitHub for version control and collaboration, Postman for API testing and documentation, ClickUp for project management, remote support tools like AnyDesk and TeamViewer, finally Figma for specialized designs..",
      descES: "Experiencia con Microsoft Office, manejo de GitHub para control de versiones y colaboración, Postman para pruebas y documentación de APIs, ClickUp para gestión de proyectos, herramientas de soporte remoto como AnyDesk y TeamViewer, por último Figma para diseños especializados."
    },
    {
      id: 6,
      titleEN: "Virtualized Environments",
      titleES: "Entornos virtualizados",
      img: vboxLogo,
      descEN: "I have experience and knowledge in virtualization software such as VirtualBox  and Proxmox, having run operating systems like Windows, Ubuntu, Raspberry Pi OS, among others.",
      descES: "Tengo experiencia y conocimientos en software de virtualización como VirtualBox y Proxmox, habiendo ejecutado sistemas operativos como Windows, Ubuntu, Raspberry Pi OS, entre otros."
    }
  ];

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
    
        {/* home */}
        <section id="home" className={`home-section ${language === 'EN' ? 'bg-en' : 'bg-es'}`}>
        </section>
    
       {/* Skills */}
        <section id="skills" className="skills-section">
          <div className="container py-5">
          
            <h2 className="mb-4 typewriter-heading">
            <Typewriter
                options={{
                  strings: ['Skills', 'Habilidades', 'スキル'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
              </h2>
            <div className="row g-4">
              {skills.map(skill => (
                <div key={skill.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5>{language === 'EN' ? skill.titleEN : skill.titleES}</h5>
                      <img src={skill.img} alt={skill.titleEN} style={{ width: "60px", marginBottom: "15px" }} />
                      <Button 
                        label={language === 'EN' ? "Show more" : "Ver más"} 
                        onClick={() => setVisible(skill.id)} 
                        className="custom-skill-btn mt-3"
                      />
                    </div>
                  </div>

                  {/* Modal para cada skill */}
                  <Dialog 
                    header={language === 'EN' ? skill.titleEN : skill.titleES} 
                    visible={visible === skill.id} 
                    className="skill-dialog"
                    onHide={() => setVisible(null)}
                  >
                    <div className="dialog-content">
                      <p>{language === 'EN' ? skill.descEN : skill.descES}</p>
                    </div>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
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
