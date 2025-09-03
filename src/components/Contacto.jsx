import React from 'react'
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import "../assets/css/contacto.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Contacto() {
  return (
    <div>



<div className="b-example-divider " style={{ paddingTop: 24 }}></div>
<div className='container d-flex justify-content-center'>
<section id="contacto" class="py-5">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-lg-8 text-center">
       <div className="pb-4">
            <h2>
              <ShinyText
                text="Contacto"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h2>
          </div>
        <p class="text-muted">
          ¿Tienes un proyecto en mente o solo consultar?  
          Escríbeme y estaré encantado de responderte.
        </p>
      </div>
    </div>

    <div class="row contacto-card p-4">
  
      <div class="col-lg-6 mb-4">
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" placeholder="Tu nombre"></input>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="tu@email.com"></input>
          </div>
          <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje</label>
            <textarea class="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Enviar mensaje</button>
        </form>
      </div>

   
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <DotLottieReact
          src="https://lottie.host/21d20250-26d9-4a3d-8c61-4f9fb5046b1e/Xb00TOPJxL.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  </div>
</section>



  




    </div>
    </div>
  )
}
