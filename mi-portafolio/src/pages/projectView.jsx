import { Android } from "@/components/ui/android";
import { Button, IconChevronLeft, Tag, TagGroup } from "@heroui/react";
import Navbar from "@/components/navbar";
import { ArrowRightIcon } from "lucide-react";
import { Safari } from "@/components/ui/safari";

function ProjectView({ project }) {
  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 flex-col px-15 pt-20">
        <a className="w-full max-w-5xl mb-5">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mt-8 flex items-center gap-2 text-2xl font-bold"
          >
            <IconChevronLeft className="mr-2" />
            Back
          </Button>
        </a>

        {project.Icon === "Desktop" ? (
          // Layout para Proyectos de Escritorio (más grande)
          <div className="flex flex-col gap-8 w-full max-w-5xl">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <Safari
                className=""
                videoSrc={
                  project.projectVideo
                    ? project.projectVideo
                    : project.videolink
                }
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">{project.name}</h1>
              <TagGroup aria-label="Technologies" className="flex flex-wrap gap-2">
                <TagGroup.List>
                  {project.Techstack?.map((tech, index) => (
                    <Tag key={index} id={tech} variant="solid">
                      {tech}
                    </Tag>
                  ))}
                </TagGroup.List>
              </TagGroup>
              <p className="text-gray-600 text-lg">{project.description}</p>
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">View Repository</Button>
                </a>
                {project.demolink && (
                  <a
                    href={project.demolink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">
                      Live Demo <ArrowRightIcon />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Layout para Proyectos Móviles
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            <div className="relative col-span-1 md:h-[600px]">
              <Android
                className="size-full"
                videoSrc={
                  project.projectVideo
                    ? project.projectVideo
                    : project.videolink
                }
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4 justify-center">
              <h1 className="text-4xl font-bold">{project.name}</h1>
              <TagGroup aria-label="Technologies" className="flex flex-wrap gap-2">
                <TagGroup.List>
                  {project.Techstack?.map((tech, index) => (
                    <Tag key={index} id={tech} variant="solid">
                      {tech}
                    </Tag>
                  ))}
                </TagGroup.List>
              </TagGroup>
              <p className="text-gray-600 text-lg">{project.description}</p>
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">View Repository</Button>
                </a>
                {project.demolink && (
                  <a
                    href={project.demolink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">
                      Live Demo <ArrowRightIcon />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectView;
