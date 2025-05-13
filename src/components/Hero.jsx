import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from "react-icons/io";
import Button from "./Button";

function Hero() {
  const SOCIALS = [
    {
      name: "Twitter",
      icon: <IoLogoTwitter />,
      url: "https://twitter.com/vayospot",
    },
    {
      name: "Github",
      icon: <IoLogoGithub />,
      url: "https://github.com/vayospot",
    },
    {
      name: "Linkedin",
      icon: <IoLogoLinkedin />,
      url: "https://linkedin.com/in/vayospot",
    },
    {
      name: "Email",
      icon: <IoMdMail />,
      url: "mailto:vayospot@gmail.com",
    },
  ];

  return (
    <div className="gap-3-x p-5-x flex flex-col">
      <h2>Victor Ayomipo</h2>
      <p className="max-w-[40ch]">
        I build Mobile Apps with React Native — that's my specialty. I also
        create websites when needed and write content on the side. But mobile
        development, you'd find me there.
      </p>

      <div className="mt-5-x gap-4-x flex">
        {SOCIALS.map(({ name, icon, url }) => (
          <Button key={name} link={url}>
            {icon}
          </Button>
        ))}
      </div>

      <div className="absolute -right-[8%] -bottom-[1%] w-[25vw] max-w-[320px]">
        <img
          src="/portfolio/assets/images/avatar.png"
          alt="Victor Ayomipo"
          className="h-full w-full scale-x-[-1] object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Hero;
