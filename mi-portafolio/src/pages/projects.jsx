import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@heroui/react";
import { ArrowRightIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects data from firebase
        const projectsCollectionRef = collection(db, "projects");
        const querySnapshot = await getDocs(projectsCollectionRef);
        const projectsData = querySnapshot.docs.map((doc) => doc.data());

        const features = projectsData.map((project, id) => ({
          Icon: project.Icon === "Mobile" ? MobileIcon : DesktopIcon,
          name: project.name,
          description: project.description,
          href: `/project/${project.name.replace(/\s+/g, '-')}`, // Formateamos el nombre para la URL
          demolink: project.demolink,
          videolink: project.videolink,
          repoLink: project.repoLink,
          projectVideo: project.projectVideo,
          Techstack: project.Techstack,
          cta: "Learn more",
          background: project.videolink ? (
            <video
              src={project.videolink}
              autoPlay
              loop
              muted
              className="absolute -top-20 opacity-60 object-cover w-full h-9/12 group-hover:h-full group-hover:opacity-100 transition-all duration-500 ease-in-out"
            />
          ) : null,
          className: `${id % 2 === 0 ? "md:col-span-1" : "md:col-span-2"} col-span-3 hover:cursor-pointer`,
        }));

        setProjects(features);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 flex-col px-15 scroll-mt-20"
    >
      <divc className="flex flex-row gap-7 items-center justify-between w-full max-w-5xl">
        <motion.p variants={itemVariants} className="text-2xl font-bold mb-4">
          My Projects
        </motion.p>
        <motion.div variants={itemVariants} className=" mt-2">
          <Button variant="ghost">
            Ver todos en Github <ArrowRightIcon />
          </Button>
        </motion.div>
      </divc>
      <motion.div variants={itemVariants} className="w-full max-w-5xl h-auto">
        <BentoGrid className="lg:grid-rows-3 h-dvh grid-rows-2 gap-4">
          {projects.map((project) => (
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
