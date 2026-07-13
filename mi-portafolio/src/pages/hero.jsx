import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import scrollDownAnimation from "../assets/scrollDown.lottie";
import { LightRays } from "@/components/ui/light-rays";
import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "@heroui/react";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";

function Hero() {
  const [links, setLinks] = useState({});

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const linksCollectionRef = collection(db, "links");
        const querySnapshot = await getDocs(linksCollectionRef);
        if (!querySnapshot.empty) {
          // Asignamos el objeto del primer documento directamente
          const linksData = querySnapshot.docs[0].data();
          setLinks(linksData);
        }
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };
    fetchLinks();
  }, []);

  const { scrollYProgress } = useScroll();
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  // Mapea el scroll de 0 a 1 para que la escala pase de 1 a 1.2 (un zoom del 20%)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mapea el scroll para que la opacidad baje de 1 a 0 rápidamente (al 40% del scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden flex items-center justify-center mb-32">
      <LightRays />

      <motion.div
        style={{ filter, scale, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-7xl font-bold">Welcome to My Portfolio!</h1>

          <p className="mt-4 text-xl text-gray-600 font-light">
            I'm Josue, a passionate software developer with a knack for creating
            innovative solutions.
          </p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" isIconOnly>
                <GitHubLogoIcon />
              </Button>
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" isIconOnly>
                <LinkedInLogoIcon />
              </Button>
            </a>
            <a href={links.cv} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                <DownloadIcon />
                Download CV
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-20 p-5 bottom-0 absolute">
          <DotLottieReact src={scrollDownAnimation} autoplay loop />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
