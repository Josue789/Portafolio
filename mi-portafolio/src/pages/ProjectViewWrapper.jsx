import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config";
import ProjectView from "./projectView";

function ProjectViewWrapper() {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectsCollectionRef = collection(db, "projects");
        // Usamos una consulta 'where' para encontrar el proyecto por su nombre
        const q = query(projectsCollectionRef, where("name", "==", projectName.replace(/-/g, " ")));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Obtenemos el primer documento que coincida
          setProject(querySnapshot.docs[0].data());
        } else {
          setError("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectName]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex justify-center items-center">{error}</div>;

  return <>{project && <ProjectView project={project} />}</>;
}

export default ProjectViewWrapper;