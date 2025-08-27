import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Mishkat",
    year: "Mar2025",
    align: "left",
    image: "/images/new-one.png",
    link: "https://jazzy-gaufre-fb8404.netlify.app/",
  },
  {
    name: "Memmar Degla",
    year: "Mar2025",
    align: "right",
    image: "/images/new-two.png",
    link: "https://unrivaled-clafoutis-47b979.netlify.app/",
  },
  {
    name: "Bona Foods",
    year: "Mar2025",
    align: "left",
    image: "/images/new-three.png",
    link: "#",
  },
  {
    name: "Cafeteria system",
    year: "Mar2025",
    align: "right",
    image: "/images/new-four.png",
    link: "https://startling-moonbeam-05afa0.netlify.app/",
  },
  {
    name: "Recruitment system",
    year: "Mar2024",
    align: "left",
    image: "/images/new-five.png",
    link: "https://warm-caramel-143f3e.netlify.app/",
  },
  {
    name: "Protfolio Eissa",
    year: "Mar2025",
    align: "right",
    image: "/images/new-seven.png",
    link: "https://stunning-maamoul-8b4539.netlify.app/",
  },
  {
    name: "Portfolio Mina",
    year: "Mar2025",
    align: "left",
    image: "/images/new-six.png",
    link: "https://gentle-stroopwafel-ab006b.netlify.app/",
  },
  {
    name: "Bankist App",
    year: "Mar2022",
    align: "right",
    image: "/images/one.jpg",
    link: "https://your-bank-your-mony.netlify.app/",
  },
  {
    name: "Bank Landing Page",
    year: "Sept2022",
    align: "left",
    image: "/images/two.jpg",
    link: "https://banking-bankist-all.netlify.app/",
  },
  {
    name: "Point of sale system ",
    year: "Jan2023",
    align: "right",
    image: "/images/three.PNG",
    link: "#",
  },
  {
    name: "Chalange me!(Game) ",
    year: "May2024",
    align: "left",
    image: "/images/five.jpg",
    link: "https://roll-the-dice22.netlify.app/",
  },
  {
    name: "Store filter",
    year: "May2024",
    align: "right",
    image: "/images/sex.png",
    link: "https://664deeb8f8af8311ca324719--startling-chaja-0ceb98.netlify.app/",
  },
  {
    name: "Password generator ",
    year: "May2024",
    align: "left",
    image: "/images/seven.png",
    link: "https://effulgent-custard-d4a5d9.netlify.app/",
  },
  {
    name: "Shopping store",
    year: "May2024",
    align: "right",
    image: "/images/eight.jpg",
    link: "https://m-f-ameen.github.io/M26/",
  },
  {
    name: "Guess my number (Game)",
    year: "May2024",
    align: "left",
    image: "/images/nine.jpg",
    link: "https://guess-game22.netlify.app/",
  },
  {
    name: "My Map",
    year: "May2024",
    align: "right",
    image: "/images/ten.jpg",
    link: "https://your-maps.netlify.app/",
  },
  {
    name: "Stripe payment",
    year: "May2024",
    align: "left",
    image: "/images/elevenn.png",
    link: "https://664def03d0044e080ba6ec71--statuesque-halva-5e4289.netlify.app/",
  },
  {
    name: "Age Calculator",
    year: "May2024",
    align: "right",
    image: "/images/twilve.png",
    link: "https://effulgent-custard-d4a5d9.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
