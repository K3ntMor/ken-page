import React from 'react'
import LogoLoop from '../Animations/LogoLoop/LogoLoop'
import '../Animations/LogoLoop/LogoLoop.css'


import { SiGooglecloud, SiFirebase, SiMysql, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiUnity, SiN8N, SiSharp , SiDocker, SiFlutter, SiJavascript, SiUnrealengine, SiPostgresql } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },  
  { node: <SiUnity />, title: "Unity 3D", href: "https://unity.com/es/" },
  { node: <SiN8N />, title: "N8N", href: "https://n8n.io/" }, 
  { node: <SiSharp />, title: "NET", href: "https://dotnet.microsoft.com/es-es/" },
  { node: <SiDocker />, title: "Dockers", href: "https://www.docker.com/" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/" },
  { node: <SiUnrealengine />, title: "Unreal Engine", href: "https://www.unrealengine.com/es-ES" },
  { node: <SiPostgresql />, title: "PostgresSQL", href: "https://www.unrealengine.com/es-ES" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.unrealengine.com/es-ES" },
  { node: <SiFirebase />, title: "Firebase", href: "https://www.unrealengine.com/es-ES" },
  { node: <SiGooglecloud />, title: "GoogleCloud", href: "https://www.unrealengine.com/es-ES" },

];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function Conocimientos() {
  return (
<>
  <div className="b-example-divider "  style={{paddingTop: 24, }}  ></div>
  
<div style={{ height: '100px', width: '100%', position: 'static', overflow: 'hidden', padding: 20, }}>
      <LogoLoop
        logos={techLogos}
        speed={30}
        direction="left"
        logoHeight={50}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#212529"
        ariaLabel="Conocimientos"
        
      />
    </div>
     <div className="b-example-divider"></div>




</>  
  )
}


export default Conocimientos;