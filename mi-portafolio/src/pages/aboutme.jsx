import { Card, ListBox, ListBoxItem } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";
import presentacionAnimation from "../assets/guy.lottie";
import ExperienceTimeline from "../components/timeline";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion, useAnimation, useInView } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";

function AboutMe() {
  const [selected, setSelected] = useState(new Set(["1"]));
  const [loading, setLoading] = useState(true);
  const [whoIamData, setWhoIamData] = useState(null);
  const [softSkillsData, setSoftSkillsData] = useState(null);
  const [estudiosData, setEstudiosData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        // Fetch data from Firestore (WHO I AM)
        const aboutmeCollectionRef = collection(db, 'aboutme');
        const querySnapshot = await getDocs(aboutmeCollectionRef);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setWhoIamData(data);

        // Fetch data from Firestore (SOFT SKILLS)
        const softSkillsCollectionRef = collection(db, 'softskill');
        const softSkillsSnapshot = await getDocs(softSkillsCollectionRef);
        const softSkillsData = softSkillsSnapshot.docs.map((doc) => doc.data());
        setSoftSkillsData(softSkillsData);

        // Fetch data from Firestore (ESTUDIOS)
        const estudiosCollectionRef = collection(db, 'formacion-experiencia');
        const estudiosSnapshot = await getDocs(estudiosCollectionRef);
        const estudiosData = estudiosSnapshot.docs.map((doc) => doc.data());
        setEstudiosData(estudiosData);
      } catch (error) {
        console.error("Error fetching about me data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const Datos = [
    { id: "1", component: <PresentacionCard whoIamData={whoIamData} loading={loading} /> },
    { id: "2", component: <EstudiosCard estudiosData={estudiosData} loading={loading} /> },
    { id: "3", component: <SoftSkillsCard softSkillsData={softSkillsData} loading={loading} /> }
  ];


  return (
    <motion.div 
      id="aboutme" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 scroll-mt-20 py-10 px-4">
      <div className=" flex flex-col items-center justify-center gap-4 w-full max-w-5xl">
        <ListBox
          aria-label="Mi información"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          selectionMode="single"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-xl shadow-md w-full p-4 sticky top-20 z-30"
        >
          <ListBoxItem id="1"  textValue="presentacion" className={`p-4 cursor-pointer text-center rounded-md ${Array.from(selected)[0] === "1" ? "bg-blue-500 text-white" : ""}`}>
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
    </motion.div>
  );
}

function PresentacionCard({ whoIamData, loading }) {
  if (loading) {
    return (
      <Card className="p-5 w-full h-auto justify-center items-center text-center">
        <div className="animate-pulse w-full">
          <div className="h-8 bg-gray-300 rounded-md w-1/4 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 w-full h-56 bg-gray-300 rounded-lg"></div>
            <div className="md:col-span-2 space-y-4">
              <div className="h-4 bg-gray-300 rounded-md w-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  return (
    <Card className="p-5 w-full h-auto justify-center items-center text-center">
      <div>
        <p className="text-3xl font-bold mb-10">¿Quien soy?</p>
        <div className="text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <DotLottieReact
            src={presentacionAnimation}
            className="col-span-1 w-full h-auto"
            autoplay
            loop
          />
          <p className="md:col-span-2 text-xl font-light text-justify text-gray-700">
            {whoIamData && whoIamData.length > 0 ? whoIamData[0].whoIam : "No se pudo cargar la información."}
          </p>
        </div>
      </div>
    </Card>
  );
}

function EstudiosCard({ estudiosData, loading }) {
  return (
    <Card className="p-2 md:p-5 container w-full col-span-4 justify-around items-center min-h-screen">
      <ExperienceTimeline data={loading ? Array(3).fill({}) : estudiosData} loading={loading} />
    </Card>
  );
}
function SoftSkillsCard( { softSkillsData, loading }) {
  if (loading) {
    return (
      <Card className="p-8 md:p-20 w-full min-h-screen justify-center items-center text-center">
        <div className="animate-pulse w-full">
          <div className="h-8 bg-gray-300 rounded-md w-1/3 mx-auto mb-10"></div>
          <div className="flex flex-col gap-12 justify-around w-full">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className={`flex flex-col gap-2 ${index % 2 === 0 ? "items-start" : "items-end"}`}>
                <div className="h-10 bg-gray-300 rounded-md w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

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
    <Card className="p-8 md:p-20 w-full min-h-screen justify-center items-center text-center">
      <div>
      <p className="text-3xl font-bold mb-10 text-center">Soft skills</p>
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col gap-12 justify-around w-full"
      >
        {
          softSkillsData && softSkillsData.length > 0 ? (
            softSkillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
                className={`flex flex-col gap-2 justify-center items-start ${index % 2 === 0 ? "md:items-start" : "md:items-end"} md:text-left text-center`}
              >
                <AuroraText className="text-4xl md:text-5xl font-bold">{skill.skill}</AuroraText>
                <p className="text-gray-600 italic text-left">{skill.description}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 italic text-left">No se pudo cargar la información.</p>
          )
        }        

      </motion.div>
      </div>
    </Card>
  );
}

export default AboutMe;
