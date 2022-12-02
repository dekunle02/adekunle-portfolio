import path from "path";
import fs from "fs/promises";

import ProjectCard, { Project } from "../../components/projects/project-card";
type ProjectsPageProps = {
  projects: Project[];
};

function ProjectsPage(props: ProjectsPageProps) {
  const { projects } = props;
  return (
    <div className="py-2">
      <h1 className="text-4xl ">Things I have built</h1>
      <br />
      <p className="text-colorBlack/80 dark:text-colorWhite/80 mb-10">
        I have tinkered with all sorts of things over the years, but here are
        all the things I am most proud of. They range from automation bots,
        mobile applications to fullstack web applications.
      </p>
      <ul className="flex flex-col md:grid md:grid-cols-3 gap-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd() + "/services/projects.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: { projects: data },
  };
}

export default ProjectsPage;
