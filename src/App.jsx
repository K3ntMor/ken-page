import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headercomp  from './components/Headercomp'
import Conocimientos from './components/Conocimientos'
import Perfil from './components/Perfil'
import Servicios from './components/Servicios'





function App() {


  return (
    <>
 

    <Headercomp />
    <Conocimientos /> 
    <Perfil/>
    <Servicios/>

    </>
  )
}

export default App
