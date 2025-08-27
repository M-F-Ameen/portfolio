import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm a Front-End Web Developer with +3 years of experience crafting
        modern, high-performance, and visually stunning web applications. I
        specialize in React.js and Tailwind CSS, leveraging the latest
        technologies to build seamless, responsive, and user-friendly
        interfaces. I’m passionate about creating elegant UI/UX designs, writing
        clean and efficient code, and optimizing web experiences for speed and
        accessibility. Whether it's building interactive dashboards, landing
        pages, or complex web applications, I thrive on turning ideas into
        reality.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
