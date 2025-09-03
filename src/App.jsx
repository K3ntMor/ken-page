import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/proyectos.css";
import Headercomp from "./components/Headercomp";
import Conocimientos from "./components/Conocimientos";
import Perfil from "./components/Perfil";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Piepagina from "./components/Piepagina";

function App() {
  return (
    <>
      <Headercomp />
      <Conocimientos />
      <Perfil />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Piepagina />
    </>
  );
}

export default App;
