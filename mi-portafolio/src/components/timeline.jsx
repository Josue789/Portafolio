import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ExperienceTimeline = ({ data, loading }) => {

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
    <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="relative w-full p-4 md:p-0">
          <div 
            className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out" 
            style={{ backgroundColor: color }}
          />

          {/* Experience cards */}
          {data.map((experience, index) => (
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

const TimelineCard = ({ experience, index, timelineColor, loading }) => {
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
      x: index % 2 === 0 && window.innerWidth > 768 ? -50 : 50,
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

  if (loading) {
    return (
      <div className={`w-full flex items-start md:items-center mb-8 md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
        <div className="w-full md:w-1/2 px-4">
          <div className="rounded-lg shadow-lg p-6 bg-white animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div className="ml-4 flex-1">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-10 flex-shrink-0 flex justify-center max-sm:hidden">
          <div 
            className="w-5 h-5 rounded-full bg-gray-300"
          />
        </div>
        <div className="w-0 md:w-1/2" />
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`w-full flex items-start md:items-center mb-8 md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2 px-4">
        <div className="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 bg-white">
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

      <div className="w-10 flex-shrink-0 flex justify-center max-sm:hidden">
        <div 
          className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      <div className="w-0 md:w-1/2" />
    </motion.div>
  );
};

export default ExperienceTimeline;