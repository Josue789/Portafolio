import { AnimatedList } from "@/components/ui/animated-list";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Card, ProgressBar } from "@heroui/react";

const skills = [
  {
    name: "JavaScript",
    icon: "javascript",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    level: "Advanced",
  },
  {
    name: "React",
    icon: "react",
    level: "Medium",
  },
  {
    name: "Node.js",
    icon: "nodedotjs",
    level: "Medium",
  },
  {
    name: "Python",
    icon: "python",
    level: "Medium",
  },
  {
    name: "Django",
    icon: "django",
    level: "Medium",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    level: "Medium",
  },
  {
    name: "MySQL",
    icon: "mysql",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: "Medium",
  },
  {
    name: "Firebase",
    icon: "firebase",
    level: "Medium",
  },
  {
    name: "Flutter",
    icon: "flutter",
    level: "Medium",
  },
  {
    name: "Dart",
    icon: "dart",
    level: "Medium",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    level: "Medium",
  },
  {
    name: "HTML5",
    icon: "html5",
    level: "Adavanced",
  },
  {
    name: "CSS3",
    icon: "css",
    level: "Medium",
  },
  {
    name: "Git",
    icon: "git",
    level: "Medium",
  },
  {
    name: "GitHub",
    icon: "github",
    level: "Medium",
  },
  {
    name: "React Native",
    icon: "expo",
    level: "Medium",
  },
  {
    name: "Figma",
    icon: "figma",
    level: "Medium",
  },
  {
    name: "Laravel",
    icon: "laravel",
    level: "Medium",
  },
  {
    name: "PHP",
    icon: "php",
    level: "Medium",
  },
  {
    name: "Java",
    icon: "java",
    level: "Medium",
  },
  {
    name: "C#",
    icon: "csharp",
    level: "Medium",
  },
  {
    name: "Spring",
    icon: "spring",
    level: "Medium",
  },
];

function Skills() {
  const images = skills.map(
    (skill) => `https://cdn.simpleicons.org/${skill.icon}`,
  );
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 flex-col p-5">
      <p className="text-2xl font-bold mb-4">My Tech Stack</p>
      <p className="text-gray-600">
        I have experience with a wide range of technologies and tools that I use
        to build my projects. Here are some of the key technologies in my tech
        stack:
      </p>

      <div className=" relative grid grid-cols-5 gap-4 mt-8 w-full max-w-5xl max-h-96 overflow-hidden justify-items-center items-center">
        <div className="flex flex-col items-start justify-start col-span-2 w-full">
          <AnimatedList className="mt-4 list-disc list-inside text-gray-600 gap-2 w-full max-h-96 overflow-y-auto">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="p-2 bg-white shadow-md rounded-md w-full h-auto flex items-center justify-center mb-4"
              >
                <div className="grid grid-cols-2 gap-4 items-center justify-start w-full h-full">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}`}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <ProgressBar aria-label="Large" size="lg" value={skill.level === "Advanced" ? 80 : skill.level === "Medium" ? 60 : 40} color={skill.level === "Advanced" ? "success" : skill.level === "Medium" ? "warning" : "danger"} >
                    <ProgressBar.Track>
      <ProgressBar.Fill />
    </ProgressBar.Track>
                </ProgressBar>
              </Card>
            ))}
          </AnimatedList>
        </div>
        <div className=" col-span-3 top-0 right-0 flex size-full items-start justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
