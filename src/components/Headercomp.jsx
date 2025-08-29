import React from "react";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import Silk from "../Backgrounds/Silk/Silk";

function Headercomp() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </symbol>
      </svg>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        {" "}
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          {" "}
          <svg className="bi my-1 theme-icon-active" aria-hidden="true">
            <use href="#circle-half"></use>
          </svg>{" "}
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>{" "}
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            {" "}
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              {" "}
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>
          <li>
            {" "}
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              {" "}
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>
          <li>
            {" "}
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              {" "}
              <svg className="bi me-2 opacity-50" aria-hidden="true">
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg className="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="bootstrap" width="36" height="36" viewBox="0 0 16 16">
          <title>Inicio</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5z"
          ></path>
        </symbol>
      </svg>
      <main>
        <h1 className="visually-hidden">Headers examples</h1>

        <div
        /* style={{ position: "static", left:"0", top: "0",  width: "100%", height: "150", backgroundColor: "rgba(33, 37, 41, 0)", zIndex: 1,   }}  */
        >
          <header className="d-flex flex-wrap justify-content-center py-3 px-5 mb-4 border-bottom">
            {" "}
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                aria-hidden="true"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>{" "}
              <span className="fs-4">Kenny Morales</span>{" "}
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contacto
                </a>
              </li>
            </ul>
          </header>
        </div>

        <div
          style={{
            position: "relative",
            top: 22,          
            width: "100%",
            
            
          }}
        >
          {/* Background a pantalla completa */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -0,

            }}
          >
            <Silk
              speed={5}
              scale={1}
              color="#212529"
              noiseIntensity={0.1}
              rotation={0}
            />
          </div>

          <div className="container col-xxl-12 px-4 py-0 position-relative z-1">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
              <div className="col-10 col-sm-8 col-lg-6">
                {" "}
                <img
                  src="/images/bootstrap-themes.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />{" "}
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  <p>
                    <span className="text-primary">Desarrollador</span>
                  </p>{" "}
                  Full Stack & Consultor IT
                </h1>
                <p className="lead">
                  Transformo ideas en software funcional y ayudo a empresas a
                  resolver retos tecnológicos.
                  <br></br>
                  <br></br>
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Contáctame
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-download"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>{" "}
                    CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </main>
    </>
  );
}

export default Headercomp;
