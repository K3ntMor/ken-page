import React from "react";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import "../assets/css/proyectos.css"

export default function Proyectos() {
  return (
   
      
    <div className="container justify-content-center px-5 py-5  ">
      
      <div className=" text-center">
        <div className="row">
          <div className="pb-4">
            <h2>
              <ShinyText
                text="Proyectos"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h2>
          </div>
        </div>
        <div className="row m-3">
          <div class="col-md-4">
            <div class="card d-flex shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />

              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div class="col-md-4">
            <div class="card d-flex shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />

              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card shadow-sm proyecto-card">
              <img
                src="./public/images/1.jpg"
                class="img-fluid rounded-top"
                alt="Test"
              />
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
