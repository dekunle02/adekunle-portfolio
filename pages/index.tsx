import Image from "next/image";
import { motion } from "framer-motion";

import SocialMediaLink, {
  SocialMediaItems,
} from "../components/core/socialMediaLink";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="mt-5 md:mt-10 mb-5 flex flex-col md:grid md:grid-cols-2 md:grid-rows-[1fr_min-content_1fr] gap-3 md:gap-2 ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-4xl md:text-6xl font-bold md:self-end"
        >
          &lt;Hello World/&gt;
        </motion.h1>
        <Image
          className="rotate-3 rounded-3xl row-span-3 justify-self-center self-center my-5 md:my-0"
          src="/hero-photo.jpg"
          alt="hero-photo"
          height={300}
          width={300}
        />
        <motion.h4
          animate={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ ease: "backInOut", duration: 1 }}
        >
          I&apos;m Samad, a software engineer based in the United Kingdom. I am
          a cofounder and CTO of{" "}
          <a href="https://tellerbase.com" className="link">
            Tellerbase
          </a>
          , where we build innovative solutions to problems in education in
          Nigeria.
        </motion.h4>
        <ul className="flex flex-row gap-5 mt-3 text-lg text-colorBlack/60 dark:text-colorWhite/60">
          {SocialMediaItems.map((item) => (
            <li key={item.href}>
              <SocialMediaLink href={item.href} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
