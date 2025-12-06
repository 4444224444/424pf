// src/components/home/ProjectGrid.jsx
import "./ProjectSection.scss";
import { Link } from "react-router-dom";
import projects from "../../data/project";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="projects__grid">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="projects__grid-item"
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
}
