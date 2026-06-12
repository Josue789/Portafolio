import { Card, ListBox, ListBoxItem } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import presentacionAnimation from "../assets/guy.lottie";
import ExperienceTimeline from "../components/timeline";

function AboutMe() {
  const Datos = [
    { id: "1", component: <PresentacionCard /> },
    { id: "2", component: <EstudiosCard /> },
    { id: "3", component: <SoftSkillsCard /> }
  ];

  const [selected, setSelected] = useState(new Set(["1"]));

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 ">
      <div className=" flex flex-col items-center justify-center gap-4 p-10 w-full max-w-5xl">
        <ListBox
          aria-label="Mi información"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          selectionMode="single"
          className="grid grid-cols-3 gap-4 bg-white rounded-xl shadow-md w-full p-4 sticky top-15 z-50"
        >
          <ListBoxItem id="1"  textValue="presentacion" className={Array.from(selected)[0] === "1" ? "p-4 cursor-pointer bg-blue-500 text-white text-center" : "p-4 cursor-pointer text-center"}>
            ¿Quién soy?
          </ListBoxItem>
          <ListBoxItem id="2" textValue="estudios" className={Array.from(selected)[0] === "2" ? "p-4 cursor-pointer bg-blue-500 text-white text-center" : "p-4 cursor-pointer text-center"}>
            Formacion y experiencia
          </ListBoxItem>
          <ListBoxItem id="3" textValue="softskills" className={Array.from(selected)[0] === "3" ? "p-4 cursor-pointer bg-blue-500 text-white text-center" : "p-4 cursor-pointer text-center"}>
            Soft skills
          </ListBoxItem>
        </ListBox>
        
          {Array.from(selected)[0] === "1" && Datos[0].component}
          {Array.from(selected)[0] === "2" && Datos[1].component}
          {Array.from(selected)[0] === "3" && Datos[2].component}
        
       
      </div>
    </div>
  );
}

function PresentacionCard() {
  return (
    <Card className="p-5 w-full h-screen justify-center items-center">
      <div>
      <p className="text-3xl font-bold">¿Quien soy?</p>
      <div className="text-gray-700 grid grid-cols-3 gap-4 items-center">
        <DotLottieReact
          src={presentacionAnimation}
          className="col-span-1 p-10"
          autoplay
          loop
        />
        <p className="col-span-2 text-lg font-light text-justify me-12">
          Hola, soy un desarrollador apasionado por la tecnología y el diseño.
          Me encanta crear soluciones innovadoras y eficientes para resolver
          problemas complejos. Con una sólida experiencia en desarrollo web y
          móvil, siempre estoy buscando aprender nuevas tecnologías y mejorar
          mis habilidades. Mi objetivo es contribuir al éxito de proyectos
          emocionantes y colaborar con equipos talentosos para crear productos
          excepcionales.
        </p>
      </div>
      </div>
    </Card>
  );
}

function EstudiosCard() {
  return (
    <Card className="p-5 container w-full col-span-4 justify-around items-center min-h-screen">
          <ExperienceTimeline />
        
    </Card>
  );
}
function SoftSkillsCard() {
  return (
    <Card className="p-5 w-full col-span-4 justify-around items-center">
      <p className="text-3xl font-bold mb-1">Habilidades blandas</p>
      <div className="text-gray-700 grid grid-cols-3 gap-4 items-center">
        <p className="col-span-3 text-lg font-light text-justify me-12">
         
        </p>
      </div>
    </Card>
  );
}

export default AboutMe;
