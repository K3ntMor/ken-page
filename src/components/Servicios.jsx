import React from 'react'

export default function Servicios() {
  return (
    <div>
        
        
   
<div class="container my-5">
   <ShinyText 
  text="Just some shiny text!" 
  disabled={false} 
  speed={3} 
  className='custom-class' 
/>
  <h2 class="text-center mb-4 ">Servicios</h2>
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card h-100 text-center p-3">
        <div class="card-body">
          💻 <h5 class="card-title">Desarrollo de Software</h5>
          <p class="card-text">Apps web, móviles y sistemas a medida.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card h-100 text-center p-3">
        <div class="card-body">
          ☁️ <h5 class="card-title">Consultoría IT</h5>
          <p class="card-text">Cloud, seguridad e infraestructura.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card h-100 text-center p-3">
        <div class="card-body">
          ⚙️ <h5 class="card-title">Automatización</h5>
          <p class="card-text">Optimización de procesos con scripts y RPA.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card h-100 text-center p-3">
        <div class="card-body">
          📊 <h5 class="card-title">Análisis & Estrategia</h5>
          <p class="card-text">Roadmaps tecnológicos para empresas.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
