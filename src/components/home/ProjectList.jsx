// src/components/home/ProjectList.jsx
import "./ProjectList.scss";
import { Link } from "react-router-dom";
import projects from "../../data/project";

export default function ProjectList() {
  return (
    <div className="projects__list">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/projects/${project.id}`}
          className="project-row"
        >
          <span className="project-row__index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project-row__date">{project.date}</span>
          <span className="project-row__title">{project.title}</span>
          <span className="project-row__stack">
            {Array.isArray(project.stack)
              ? project.stack.join(" ")
              : project.stack}
          </span>
        </Link>
      ))}
    </div>
  );
}

