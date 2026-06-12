import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      company: "Adl credinova",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      position: "Desarrollador freelance",
      duration: "Octubre 2025 - Enero 2026",
      achievements: [
        "Lidere el levantamiento de requeriemiento",
        "Diseñe el UI/UX asi como base de datos y sus apis",
        "Desarrolle y lidere el proyecto",
        "Maneje pruebas manuales de los componentes y funciones"
      ],
      skills: ["React native", "Node.js", "Firebase", "Android", "Tauri"]
    },
    {
      id: 2,
      company: "Madereria Villalobos",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      position: "Desarrollador freelance",
      duration: "Abril 2025 - Junio 2025",
      achievements: [
        "Participe en el desarrollo frontend de su app",
        "Participe en el desarrollo de apis",
        "Mejores interfaces y correccion de bugs"
      ],
      skills: ["React native", "Node.js", "Firebase", "android"]
    },
    {
      id: 3,
      company: "Astrobie",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      position: "Becario desarrollador",
      duration: "Julio 2024 - Diciembre 2024",
      achievements: [
        "Participe en el desarrollo frontend de su pagina principal",
        "Cree componentes con interacciones mas autodidactas",
        "Mejores formularios con un 60% mas eficientes"
      ],
      skills: ["React", "Node.js", "Firebase"]
    },
    {
      id: 4,
      company: "ITSUR",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      position: "Student",
      duration: "2020 - 2024",
      achievements: [
        "Estudie Ingenieria en Sistemas Computacionales",
        "Desarrolle proyecto extracurricular llamado SICOP",
        "Participe en competencias de programacion (Coding Cup)",
        "Asisti a congreso de verano Tecnm y realice una ponencia",
        "Asisti a congreso de INGECO y realice una publicacion en su revista"
      ],
      skills: ["JavaScript", "Python", "Docker", "HTML", "CSS", "Java", "Kotlin"]
    },
    {
      id: 5,
      company: "CBTis 217",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      position: "Student",
      duration: "2017 - 2020",
      achievements: [
        "Estudie bachiller fisico-matematico",
        "Curse carrera tecnica en programación",
        "Participe en la Olimpiada Regional de Informatica",
        "Participe en la Coding Cup"
      ],
      skills: ["HTML", "CSS", "C#"]
    }
  ];

  const [color, setColor] = React.useState("rgb(239, 68, 68)");

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="relative w-full">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out" 
            style={{ backgroundColor: color }}
          />

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              experience={experience}
              index={index}
              timelineColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ experience, index, timelineColor }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`w-full flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
    >
      <div className="w-full px-4">
        <div className=" rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
              <div className="flex items-center text-gray-600">
                <FaBuilding className="mr-2" />
                <span>{experience.company}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <FaCalendarAlt className="mr-2" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start">
                <FaBriefcase className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-10 flex justify-center">
        <div 
          className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      <div className="w-full" />
    </motion.div>
  );
};

export default ExperienceTimeline;