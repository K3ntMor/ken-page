import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headercomp  from './components/Headercomp'
import Conocimientos from './components/Conocimientos'
import Perfil from './components/Perfil'





function App() {


  return (
    <>
 

    <Headercomp />
    <Conocimientos /> 
   

    <Perfil/>

    </>
  )
}

export default App
