import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from "react-icons/io";
import Button from "../components/Button";

function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <h2>Victor Ayomipo</h2>
      <p className="max-w-[45ch]">
        I build Mobile Apps with React Native — that's my specialty. I also
        create websites when needed and write content on the side. But mobile
        development, you'd find me there.
      </p>

      <div className="mt-5 flex gap-4">
        <Button>
          <IoLogoTwitter />
        </Button>
        <Button>
          <IoLogoGithub />
        </Button>
        <Button>
          <IoLogoLinkedin />
        </Button>
        <Button>
          <IoMdMail />
        </Button>
      </div>

      <div className="absolute -right-[5%] -bottom-0 h-[125%] w-[38%]">
        <img
          src="/src/assets/avatar.png"
          alt="Victor Ayomipo"
          className="h-full w-full scale-x-[-1] object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Hero;
