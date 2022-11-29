import Image from "next/image";
import { useState } from "react";

export type ProjectLink = {
  text: string;
  href: string;
  icon?: React.ReactNode;
};

export interface Project {
  name: string;
  imageSrc: string;
  description: string;
  links: ProjectLink[];
  slug: string;
}

function ProjectCard({ project }: { project: Project }) {
  const { name, imageSrc, description, links } = project;
  const [collapsed, SetCollapsed] = useState(true);

  return (
    <div className="rounded-xl">
      <Image src={imageSrc} alt="project-image" height={200} width={200} />
      <h5>{name}</h5>
      <p>description</p>
    </div>
  );
}

export default ProjectCard;
