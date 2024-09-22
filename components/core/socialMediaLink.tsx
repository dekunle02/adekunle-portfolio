import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

type SocialMediaLinkProps = {
  href: string;
  text?: string;
  icon: JSX.Element;
};

export const SocialMediaItems = [
  {
    href: "https://github.com/dekunle02",
    title: "Github",
    icon: <IoLogoGithub />,
  },
  // {
  //   href: "https://www.linkedin.com/in/samad-a-2854261a4/",
  //   title: "LinkedIn>",
  //   icon: <SiLinkedin />,
  // },
];

export default function SocialMediaLink(props: SocialMediaLinkProps) {
  const { href, icon, text } = props;
  return (
    <a className="flex flex-row gap-3" href={href}>
      {icon}
      <span>{text}</span>
    </a>
  );
}
