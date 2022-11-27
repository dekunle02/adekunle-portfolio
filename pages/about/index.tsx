import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-col my-5 gap-3">
      <div className="flex flex-col md:flex-row items-center gap-5 my-5">
        <Image
          className="rotate-3 rounded-3xl"
          src="/about-photo.jpeg"
          alt="about-me-photo"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold">
          My name is Samad. I live and work in the United Kingdom.
        </h1>
      </div>

      <p>
        I&apos;ve loved making things for as long as I can remember. I wrote my
        first program when I was 15 years old when I randomly stumbled upon a
        Python For Beginners book. I remember being immediately struck by the
        idea that I could give a computer instructions! I wrote my first Hello
        World print statement and I did not look back since then.
      </p>
      <p>
        I did in fact look back. Life, eh, gets in the way. A few years later, I
        needed to write a mobile application. I didn&apos;t know this at the
        time, but this singular decision changed my relationship with computers
        and technology. I went from learning Java and the basics of Object
        Oriented Programming, creating my first hobby mobile application, to
        building FullStack Web and Mobile applications used by thousands of
        people everyday.
      </p>
      <p>
        I also love making art and it has grown to be a lifelong passion of
        mine. I made my first sketches as child and I can say that I indeed
        never looked back since then. Follow my art journey{" "}
        <a href="https://www.kunlepaints.com" className="link">
          here.
        </a>
      </p>
      <p>
        I am a doctor in my spare time and I am very happily married to my best
        friend in the world.{" "}
      </p>
    </div>
  );
}

export default AboutPage;
