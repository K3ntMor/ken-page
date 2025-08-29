import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Perfil() {
  return (
    <div className=" d-flex flex-wrap px-5 py-5 gap-5 col-xxl-12 justify-content-center">



      <div className="position-relative d-grid d-xxl-flex col-xxl-9 ">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(118, 155, 211, 0.2)"
        >
          <p>
            <span
              lang="es"
              dir="ltr"
              className="display-6 fw-bold text-body-emphasis lh-1 mb-3"
            >
              Sobre Mí
            </span>
          </p>
          <p className="lead">
            Mi nombre es <strong className="text-primary">Kenny Morales</strong>, soy desarrollador <strong>Full Stack</strong> y{" "}
            <strong >
              Consultor IT
            </strong>{" "}
            con experiencia en el diseño y desarrollo de soluciones
            tecnológicas.
            <br></br>
            Me apasiona convertir ideas en software funcional y ayudar a
            empresas a superar retos tecnológicos con soluciones innovadoras,
            escalables y seguras.
          </p>
        </SpotlightCard>   

         <DotLottieReact
          src="https://lottie.host/5d5ad63c-2168-4069-8b35-dc2b064f58bf/kAa3Jxmygq.lottie"
          loop
          autoplay
        />
             
      </div>

      
      
{/*       <div
        className="col-md-5 position-absolute"
        style={{ left: -95, padding: 0 }}
      >
        <DotLottieReact
          src="https://lottie.host/b93599f1-00c0-4733-bb5e-7c1501ac462d/3P4Jb9vCuM.lottie"
          loop
          autoplay
        />
        
      </div> */}
    </div>
    
  );
}
