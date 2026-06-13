import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@heroui/react";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const features = [
    {
      Icon: FileTextIcon,
      name: "Gymdex",
      description: "Mobile app to register yours weights in gym.",
      href: "/",
      cta: "Learn more",
      background: (
        <img alt="" className="absolute -top-20 -right-20 opacity-60" />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: (
        <img alt="" className="absolute -top-20 -right-20 opacity-60" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: (
        <img alt="" className="absolute -top-20 -right-20 opacity-60" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: (
        <img alt="" className="absolute -top-20 -right-20 opacity-60" />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: (
        <img alt="" className="absolute -top-20 -right-20 opacity-60" />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      id="projects" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 flex-col px-15 scroll-mt-20">
      <motion.p variants={itemVariants} className="text-2xl font-bold mb-4">My Projects</motion.p>
      <motion.div variants={itemVariants} className="w-full max-w-5xl">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </motion.div>
      <motion.div variants={itemVariants} className="w-full mt-2">
        <Button variant="ghost" >Ver todos en Github <ArrowRightIcon/></Button>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
