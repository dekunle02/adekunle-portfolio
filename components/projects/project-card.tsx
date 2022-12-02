import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoLogoGithub } from "react-icons/io5";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export type ProjectLink = {
  text: string;
  href: string;
  icon?: string;
};

const LinkIcon = {
  link: <AiOutlineLink />,
  play: <IoLogoGooglePlaystore />,
  github: <IoLogoGithub />,
};

export interface Project {
  name: string;
  imageSrc: string;
  title: string;
  description: string;
  links: ProjectLink[];
  slug: string;
}

function ProjectCard({ project }: { project: Project }) {
  const { name, imageSrc, title, description, links } = project;
  const [isCollapsed, SetCollapsed] = useState(true);

  const expandIcon = isCollapsed ? <MdExpandMore /> : <MdExpandLess />;
  function toggleExpand() {
    SetCollapsed((prev) => !prev);
  }

  return (
    <div
      onClick={toggleExpand}
      className="rounded-xl hover:bg-colorGray/5 dark:hover:bg-colorWhite/5 p-3 md:w-80 h-full cursor-pointer flex flex-col group"
    >
      <div className="flex flex-row items-center justify-between">
        <Image
          className="rounded-full w-10 h-10 border-teal-600/10 dark:border-teal-600/50 border-8"
          src={imageSrc}
          alt="project-image"
          height={200}
          width={200}
        />
        <button className="text-lg p-1 rounded-full group-hover:bg-teal-600 group-hover:text-colorWhite">
          {expandIcon}
        </button>
      </div>

      <h5 className="my-4 font-semibold">{name}</h5>

      <p
        className={`${
          isCollapsed ? "box" : "hidden"
        } text-colorBlack/80 dark:text-colorWhite/80 text-sm flex-grow`}
      >
        {title}
      </p>
      <p
        className={`${
          isCollapsed ? "hidden" : "box"
        } text-colorBlack/80 dark:text-colorWhite/80 text-sm flex-grow`}
      >
        {description}
      </p>
      <ul className="mt-2 flex flex-row flex-wrap gap-y-2 gap-x-3 text-sm text-colorBlack/50 dark:text-colorWhite/50">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="icon-button hover:text-teal-600">
              {link.icon ? (
                LinkIcon[link.icon as "link" | "play" | "github"]
              ) : (
                <></>
              )}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
