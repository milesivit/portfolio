import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Typewriter from 'typewriter-effect';
import { Carousel } from 'primereact/carousel';

import javaLogo from './img/java.png';
import frontendLogo from './img/ant.png';
import sqlLogo from './img/sqlserver.png';
import cicdLogo from './img/github.png';
import clickupLogo from './img/clickup3.png';
import vboxLogo from './img/virtualbox.png';
import git from './img/git.png';
import ferre from './img/ferre.png';
import remate from './img/logo.png';
import bajitos from './img/bajitos.jpeg'
import foto1 from './img/foto1.jpeg';
import foto2 from './img/foto2.jpeg';
import foto3 from './img/foto3.jpeg';
import foto4 from './img/foto4.jpeg'
import itec from './img/itec.jpeg';
import belisario from './img/belisario.png';

function App() {
  const [language, setLanguage] = useState('EN');
  const [visible, setVisible] = useState(null);
  const [visibleWork, setVisibleWork] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  const cvLinkEN = "https://drive.google.com/file/d/19C3u8Y6jMBlat7LDfva_gKBk4aT85j6F/view?usp=sharing";
  const cvLinkES = "https://drive.google.com/file/d/15dBlfg8vT6c87HQmQ5Z6PJ0YXYKZyJiA/view?usp=sharing";

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

  const experiences = [
    {
      id: 2,
      titleEN: "Desktop Application – Remate Celada (Remote task)",
      titleES: "Aplicación de escritorio – Remate Celada (Tarea remota)",
      periodEN: "Jan/2025 – Apr/2025",
      periodES: "Enero/2025 – Abril/2025",
      descEN: "I worked with a colleague who assigned me tasks for a desktop application for Remate Celada. Implemented features like machinery visualization, user management, and data queries using Tauri, TypeScript, and SQLite database.",
      descES: "Trabajé con un colega que me derivó tareas de una aplicación de escritorio para Remate Celada. El proyecto incluyó la implementación de funcionalidades como visualización de maquinaria, gestión de usuarios y consultas de datos, utilizando tecnologías como Tauri, TypeScript y una base de datos SQLite correspondiente.",
      img: remate
    },
    {
      id: 1,
      titleEN: "Programmer – Ferretera Central",
      titleES: "Programadora – Ferretera Central",
      periodEN: "Feb/2025 – Aug/2025",
      periodES: "Febrero/2025 – Agosto/2025",
      descEN: "Back-end development: implemented endpoints covering the full flow from object layer to controller, allowing front-end consumption using Java Spring Boot. Also worked on front-end with Java Spring Boot, consuming API endpoints. Collaborated on efficient data access and integration between the database and application layers. Managed and resolved tickets on time using the osTicket support tool.",
      descES: "En desarrollo back-end, programé endpoints implementando el flujo completo desde la capa de objetos hasta el controlador, permitiendo que el front-end los consuma, utilizando Java Spring Boot. También trabajé en front-end con Java Spring Boot, consumiendo los endpoints de la API. Colaboré en el diseño de un acceso eficiente a los datos e integración entre la base de datos y las capas de la aplicación. Además, gestioné y resolví tickets en tiempo y forma mediante la herramienta de soporte osTicket.",
      img: ferre
    },
    {
      id: 3,
      titleEN: "Desktop Application – Esos Locos Bajitos (Part-time remote work)",
      titleES: "Sistema de gestión de stock – Esos Locos Bajitos (Trabajo remoto a tiempo parcial)",
      periodEN: "Dec 2025 – Present",
      periodES: "Diciembre/2025 – Actualidad",
      descEN: "Comprehensive development of a stock management system for a local business, carried out individually from scratch. The project includes database design and modeling, backend and frontend development, and the implementation of validations and business logic. Throughout the process, I gained experience working with direct client feedback, adjusting features based on real business needs.",
      descES: "Desarrollo integral de un sistema de gestión de stock para el local, realizado de manera individual desde cero. El proyecto incluye el diseño y modelado de la base de datos, desarrollo del backend y frontend, implementación de validaciones y lógica de negocio. Durante el proceso, adquiero experiencia trabajando con feedback directo de clientes, ajustando funcionalidades según necesidades reales del negocio.",
      img: bajitos
    }
  ];
  

  // works en un array
  const works = [
    {
      id: 1,
      titleEN: "Retrocinema with Bootstrap",
      titleES: "Cine retro con Bootstrap ",
      repo: "https://github.com/milesivit/Cine",
      descEN: "Bootstrap web application that simulates the experience of a cinema website. It includes sections such as movie listings, ticketing, combos, promotions, and user profile. The design is fully responsive, adapting to both mobile devices and desktops.",
      descES: "Aplicación web Bootstrap que simula la experiencia de una página de cine. Incluye secciones como cartelera, boletería, combos, promociones y perfil de usuario. El diseño es totalmente responsivo, adaptándose a dispositivos móviles y escritorios."
    },
    {
      id: 2,
      titleEN: "De camino a casa with Ant Desing and React",
      titleES: "De camino a casa con Ant Desing y React",
      repo: "https://github.com/milesivit/de_camino_a_casa",
      descEN: "Web application built with React and Ant Design to facilitate animal adoption. It allows users to view available pets and see their details. It includes a test to help find your best friend, as well as information about foundations and responsible adoption.",
      descES: "Aplicación web en React y Ant Design para facilitar la adopción de animales. Permite ver mascotas disponibles y conocer sus detalles. Incluye un test para encontrar a tu mejor amigo, además de información sobre fundaciones y adopción responsable."
    },
    {
      id: 3,
      titleEN: "Airline System with Django",
      titleES: "Sistema de aerolinea con Django",
      repo: "https://github.com/milesivit/EFI-Aviones-ing",
      descEN: "Web application that simulates an airline management system. Users can register, log in, and purchase tickets. Administrators have access to advanced features such as creating airplanes, managing flights, and overseeing system information.",
      descES: "Aplicación web que simula un sistema de gestión de aerolíneas. Los usuarios pueden registrarse, iniciar sesión y comprar pasajes. Los administradores tienen acceso a funcionalidades avanzadas como crear aviones, gestionar vuelos y administrar la información del sistema."
    },
    {
      id: 4,
      titleEN: "Inventory management system with Flask",
      titleES: "Sistema de gestión de inventario con Flask",
      repo: "https://github.com/milesivit/gestion-de-inventario",
      descEN: "Web application built with Flask that implements a full CRUD for product management. The system tracks stock in real time: whenever a sale is made, the available quantity is automatically reduced.",
      descES: "Aplicación web desarrollada con Flask que implementa un CRUD completo para la gestión de productos. El sistema controla el stock en tiempo real: cada vez que se registra una venta, la cantidad disponible se descuenta automáticamente."
    },
    {
      id: 5,
      titleES: "Frontend: React consumiendo API REST para un sistema de reserva de containers",
      titleEN: "Frontend: React consuming a REST API for a container reservation system",
      repo: "https://github.com/milesivit/no-me-la-container-front",
      descEN: "Web application developed in React that consumes a REST API to build a reservation system. It includes a chatbot, integrates a real-time weather API, features well-implemented CRUD operations, and clearly defined user, client, and employee roles.",
      descES: "Aplicación web desarrollada en React que consume una API REST para realizar un sistema de reserva. Incluye Chatbot, consume una API de clima a tiempo real, buena implementación en CRUDS, rol de usuario, cliente y empleado bien detallado."
    },
    {
      id: 6,
      titleES: "Backend: API REST con Node.js y Express para sistema de reserva de containers",
      titleEN: "Backend: REST API with Node.js and Express for a container reservation system",
      repo: "https://github.com/milesivit/no-me-la-container-back",
      descEN: "REST API built with Node.js and Express, handling the system’s logic for users. It provides endpoints for full CRUD operations, manages authentication and validations, and sends errors to the frontend for proper notification handling.",
      descES: "API REST desarrollada con Node.js y Express, que gestiona la lógica del sistema. Provee endpoints para realizar un CRUD completo, maneja autenticación y validaciones, y envía los errores al frontend para un manejo correcto de las notificaciones."
    }
  ];

  const aboutPhotos = [
    { id: 1, src: foto1, alt: "Childhood" },
    { id: 2, src: foto2, alt: "School years" },
    { id: 3, src: foto3, alt: "Current" },
    {id: 4, src: foto4, alt: "title"}
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
                <li className="nav-item"><a className="nav-link" href="#experience">{language === 'EN' ? 'Experience' : 'Experiencia'}</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">{language === 'EN' ? 'About me' : 'Sobre mi'}</a></li>
                <li className="nav-item"><a className="nav-link" href="#works">{language === 'EN' ? 'Works' : 'Proyectos'}</a></li>
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
                  strings: ['Skills', 'Habilidades'],
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

        <section id="experience" className="experience-section">
          <div className="container py-5">
            <h2 className="mb-4 typewriter-heading">
              <Typewriter
                options={{
                  strings: ['Experience', 'Experiencia'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h2>

            <div className="row g-4">
              {experiences.map(exp => (
                <div key={exp.id} className="col-md-6">
                  <div className="experience-card shadow-sm p-4">
                    <h5>{language === 'EN' ? exp.titleEN : exp.titleES}</h5>
                    <h7>{language === 'EN' ? exp.periodEN : exp.periodES}</h7>
                    <p className="text-muted">{exp.period}</p>
                    <p>{language === 'EN' ? exp.descEN : exp.descES}</p>
                    <img
                      src={exp.img}
                      style={{
                        width: exp.id === 3 ? "50px" : "100px"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* About */}
         <section id="about" className="about-section">
          <div className="container py-5">
            <h2 className="mb-4 typewriter-heading">
              <Typewriter
                options={{
                  strings: ['About me','Sobre mí'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h2>

            <div className="row align-items-center">
              {/* Columna del carrusel */}
              <div className="col-md-4">
                <Carousel
                  value={aboutPhotos}
                  numVisible={1}
                  numScroll={1}
                  circular
                  autoplayInterval={3000}
                  itemTemplate={(photo) => (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="img-fluid rounded shadow-sm"
                      style={{ cursor: "pointer" }}
                      onClick={() => setVisibleWork(photo.id)}
                    />
                  )}
                />
              </div>

              {/* Columna de texto */}
              <div className="col-md-8">
                <div className="about-card">
                  <p style={{textAlign: "justify"}}>
                    {language === 'EN' ? (
                      <>
                        Since I was little, I’ve been passionate about computing, and that
                        curiosity led me to study programming. At 18, I began my career, and by 20,
                        I joined a company as a backend developer.  
                        I’m always eager to learn, take on new challenges, and grow as a professional.
                        <br /><br />
                        I graduated from high school in 2022, where I served as flag bearer in
                        primary school and as second-in-command (escort) in secondary school.  
                        <br /><br />

                        Technical Degree in Software Development, completed on December 4, 2025.

                        {/* Imágenes de educación */}
                        <div className="education-images mt-3 d-flex gap-3">
                          <div className="edu-item text-center">
                            <img src={belisario} alt="Belisario" className="edu-img" />
                            <p>Belisario R. – High School</p>
                          </div>
                          <div className="edu-item text-center">
                            <img src={itec} alt="ITEC" className="edu-img" />
                            <p>ITEC – Software Development</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        Desde chica me apasiona la informática, y esa curiosidad me llevó a estudiar
                        programación. A los 18 comencé mi carrera y, a los 20, me incorporé a una
                        empresa como desarrolladora backend.  
                        Siempre busco aprender, asumir nuevos desafíos y crecer profesionalmente.
                        <br /><br />
                        Egresé del secundario en 2022, donde fui abanderada en la primaria y escolta
                        en la secundaria.  <br /><br />
                        Tecnicatura en Desarrollo de Software, finalizada el 4 de diciembre de 2025. 

                        {/* Imágenes de educación */}
                        <div className="education-images mt-3 d-flex gap-3">
                          <div className="edu-item text-center">
                            <img src={belisario} alt="Belisario" className="edu-img" />
                            <p>Belisario R. – Secundario</p>
                          </div>
                          <div className="edu-item text-center">
                            <img src={itec} alt="ITEC" className="edu-img" />
                            <p>ITEC – Tecnicatura en Software</p>
                          </div>
                        </div>
                      </>
                    )}
                  </p>
                </div>
              <div className="social-buttons mt-4 d-flex gap-3 justify-content-center">
                <Button 
                  icon="pi pi-whatsapp" 
                  className="custom-social-btn"
                  onClick={() => window.open("https://wa.me/543463645091", "_blank")}
                  tooltip={language === 'EN' ? "WhatsApp" : "WhatsApp"}
                />
                <Button 
                  icon="pi pi-linkedin" 
                  className="custom-social-btn"
                  onClick={() => window.open("https://www.linkedin.com/in/milena-sivit/", "_blank")}
                  tooltip={language === 'EN' ? "LinkedIn" : "LinkedIn"}
                />
                <Button 
                  icon="pi pi-github" 
                  className="custom-social-btn"
                  onClick={() => window.open("https://github.com/milesivit", "_blank")}
                  tooltip={language === 'EN' ? "GitHub" : "GitHub"}
                />
              </div>
              </div>
            </div>
          </div>
          

        </section>


                {/* Works */}
        <section id="works" className="works-section">
          <div className="container py-5">
            <h2 className="mb-4 typewriter-heading">
              <Typewriter
                options={{
                  strings: ['Works', 'Proyectos'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h2>

            <div className="row g-4">
              {works.map(work => (
                <div key={work.id} className="col-md-4">
                  <div className="work-card shadow-sm d-flex flex-column align-items-center">
                    <h5>{language === 'EN' ? work.titleEN : work.titleES}</h5>

                    {/* Cuadrado clickeable al repo */}
                    <div 
                      onClick={() => window.open(work.repo, "_blank")}
                      className="repo-box"
                    >
                        <img 
                          src={git}   // importa tu PNG o SVG de GitHub arriba
                          alt="GitHub Repo"
                          style={{ width: '100px', height: '37px' }}
                        />
                    </div>

                    {/* Botón para abrir modal */}
                    <Button 
                      label={language === 'EN' ? "Information" : "Información"} 
                      onClick={() => setVisibleWork(work.id)} 
                      className="custom-work-btn mt-3"
                    />
                  </div>

                  {/* Modal para cada work */}
                  <Dialog 
                    header={language === 'EN' ? work.titleEN : work.titleES} 
                    visible={visibleWork === work.id} 
                    className="work-dialog"
                    onHide={() => setVisibleWork(null)}
                  >
                    <div className="dialog-content">
                      <p>{language === 'EN' ? work.descEN : work.descES}</p>
                    </div>

                    {(work.id === 1 || work.id === 2) && (
                      <Button
                        label={language === 'EN' ? "Live demo" : "Ver página"}
                        onClick={() => {
                          const liveLink = work.id === 1 
                            ? "https://retrocine.netlify.app/" 
                            : "https://decaminoacasa.vercel.app/";
                          window.open(liveLink, "_blank");
                        }}
                        className="custom-work-btn mt-3"
                      />
                    )}
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
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
