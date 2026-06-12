import { Card, ListBox, ListBoxItem } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";
import presentacionAnimation from "../assets/guy.lottie";
import ExperienceTimeline from "../components/timeline";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion, useAnimation, useInView } from "framer-motion";

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
    <Card className="p-5 w-full h-svh justify-center items-center text-center">
      <div>
      <p className="text-3xl font-bold mb-10">¿Quien soy?</p>
      <div className="text-gray-700 grid grid-cols-3 gap-4 items-center">
        <DotLottieReact
          src={presentacionAnimation}
          className="col-span-1 w-full h-auto"
          autoplay
          loop
        />
        <p className="col-span-2 text-xl font-light text-justify me-12">
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" }); // Anima cuando el contenedor está 100px antes de entrar en la vista
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre la animación de cada hijo
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <Card className="p-20 w-full min-h-screen justify-center items-center text-center">
      <div>
      <p className="text-3xl font-bold mb-10 text-center">Soft skills</p>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col gap-4 justify-around w-full space-y-20"
      >
        <motion.div 
          variants={itemVariantsLeft}
          className="flex flex-col gap-2 justify-center items-start"
        >
          <AuroraText className="text-5xl font-bold">RESILIENCIA</AuroraText>
          <p className="text-gray-600 italic text-left">Anfronto los desafíos técnicos, aprendo de los errores, manteniendo la motivación ante problemas complejos.</p>
        </motion.div>
        <motion.div 
          variants={itemVariantsRight}
          className="flex flex-col gap-2 justify-center items-end"
        >
          <AuroraText className="text-5xl font-bold">AUTODIDACTA</AuroraText>
          <p className="text-gray-600 italic text-right ">Me apasiona el aprendizaje continuo, siempre buscando nuevas habilidades y conocimientos para dominar nuevas tecnologías y frameworks de forma independiente.</p>
        </motion.div>
        <motion.div 
          variants={itemVariantsLeft}
          className="flex flex-col gap-2 justify-center items-start"
        >
          <AuroraText className="text-5xl font-bold">COMUNICACIÓN EFECTIVA</AuroraText>
          <p className="text-gray-600 italic text-left ">Habilidad para transmitir ideas técnicas complejas de forma clara y colaborar armoniosamente en equipos multidisciplinarios.</p>
        </motion.div>
        <motion.div 
          variants={itemVariantsRight}
          className="flex flex-col gap-2 justify-center items-end"
        >
          <AuroraText className="text-5xl font-bold">RESPONSABILIDAD</AuroraText>
          <p className="text-gray-600 italic text-right">Me comprometo totalmente con la calidad del código, el cumplimiento de los plazos de entrega y el éxito global de los proyectos.</p>
        </motion.div>
        <motion.div 
          variants={itemVariantsLeft}
          className="flex flex-col gap-2 justify-center items-start"
        >
          <AuroraText className="text-5xl font-bold">ADAPTABILIDAD</AuroraText>
          <p className="text-gray-600 italic text-left">Poseo la capacidad para integrarse rápidamente a nuevos entornos de trabajo, metodologías y cambios en los requisitos del software.</p>
        </motion.div>

      </motion.div>
      </div>
    </Card>
  );
}

export default AboutMe;
