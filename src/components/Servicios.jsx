import React from "react";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

export default function Servicios() {
  return (
    <div>
      <div class="container my-5">
        <h2 class="text-center mb-4 ">
          <ShinyText
            text="Servicios"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </h2>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-3">
            <div class=" h-100 text-center p-3">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(118, 155, 211, 0.2)"
              >
                <div>
                  💻 <h5 class="card-title">Desarrollo de Software</h5>
                  <p class="card-text">
                    Apps web, móviles y sistemas a medida.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class=" h-100 text-center p-3">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(118, 155, 211, 0.2)"
              >
                <div class="card-body">
                  ☁️ <h5 class="card-title">Consultoría IT</h5>
                  <p class="card-text">Cloud, seguridad e infraestructura.</p>
                 
                 
                   
                </div>
              </SpotlightCard>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class=" h-100 text-center p-3">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(118, 155, 211, 0.2)"
              >
                <div class="card-body">
                  ⚙️ <h5 class="card-title">Automatización</h5>
                  <p class="card-text">
                    Optimización de procesos con scripts y RPA.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class=" h-100 text-center p-3">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(118, 155, 211, 0.2)"
              >
                <div class="card-body">
                  📊 <h5 class="card-title">Análisis & Estrategia</h5>
                  <p class="card-text">Roadmaps tecnológicos para empresas.</p>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
