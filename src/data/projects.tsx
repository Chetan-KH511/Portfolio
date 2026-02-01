import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiFlutter,
  SiDart,
  SiGooglechrome,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* 🌐 Visit Website Button — Green + External Arrow */}
      <Link rel="noopener" target="_blank" href={live} className="flex gap-2">
        <Button
          size="sm"
          className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
          Live Demo
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </Link>

      {/* 🐙 GitHub Button — Dark + Icon + Arrow */}
      {repo && (
        <Link rel="noopener" target="_blank" href={repo} className="flex gap-2">
          <Button
            size="sm"
            className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
            <FaGithub className="mr-2 w-5 h-5" />
            Source Code
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};


export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter/>,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <SiDart/>,
  },
  chrome: {
    title: "Chrome Extension",
    bg: "black",
    fg: "white",
    icon: <SiGooglechrome/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. PlastiScan - Marine Debris Detection
    id: "plastiscan",
    category: "ML + Web Dev",
    title: "PlastiScan: Marine Debris Detection",
    src: "/assets/projects-screenshots/portfolio/plastiscan.png",
    screenshots: ["/assets/projects-screenshots/portfolio/plastiscan.png", "/assets/projects-screenshots/portfolio/plastiscan2.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://plastiscan.netlify.app/",
    github: "https://github.com/Chetan-KH511/PlastiScan",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered marine debris detection system that integrates machine learning with modern web development.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ML Integration with Web Dev</TypographyH3>
          <p className="font-mono mb-2">
            Combines Python-based deep learning models with a React frontend to accurately detect and classify marine debris from images in real-time.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/plastiscan.png`,
              `${BASE_PATH}/portfolio/plastiscan2.png`,
            ]}
          />
        </div>
      );
    },
  },

  { // 02. HireMe - Job Portal
    id: "hireme",
    category: "Full Stack",
    title: "HireMe - Job Portal Platform",
    src: "/assets/projects-screenshots/portfolio/hireme.png",
    screenshots: ["/assets/projects-screenshots/portfolio/hireme.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://hirememaybe.netlify.app/",
    github: "https://github.com/Chetan-KH511/Hiremedeploy",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack job portal platform connecting job seekers with employers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Built with React, Node.js, and MongoDB for a seamless job searching and posting experience.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/hireme.png`,
            ]}
          />
        </div>
      );
    },
  },

  { // 03. Fashion Recommender
    id: "fashion-recommender",
    category: "Machine Learning",
    title: "Fashion Recommender System",
    src: "/assets/projects-screenshots/portfolio/fashion.png",
    screenshots: ["/assets/projects-screenshots/portfolio/fashion.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/Chetan-KH511/Fashion-Recommender",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Python-based fashion recommendation system using machine learning algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ML-Powered Recommendations</TypographyH3>
          <p className="font-mono mb-2">
            Leverages machine learning to provide personalized fashion recommendations based on user preferences and trends.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/fashion.png`,
            ]}
          />
        </div>
      );
    },
  },

  { // 04. CarryCart - Logistics App
    id: "carrycart",
    category: "Mobile App",
    title: "CarryCart - Logistics App",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["/assets/projects-screenshots/portfolio/landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.flutter,
        PROJECT_SKILLS.dart,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Chetan-KH511/Flutter-Logistic-app-project",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Flutter-based logistics application for efficient delivery management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Mobile Development</TypographyH3>
          <p className="font-mono mb-2">
            Built with Flutter and Dart for cross-platform mobile app development, featuring real-time tracking and delivery management.
          </p>
        </div>
      );
    },
  },

  { // 05. BlockySite - Chrome Extension
    id: "blockysite",
    category: "Chrome Extension",
    title: "BlockySite - Website Blocker",
    src: "/assets/projects-screenshots/portfolio/blocky.png",
    screenshots: ["/assets/projects-screenshots/portfolio/blocky.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.chrome,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Chetan-KH511/BlockySite",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Chrome extension that helps users stay focused by blocking distracting websites.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Chrome Extension Development</TypographyH3>
          <p className="font-mono mb-2">
            Built using JavaScript and Chrome Extension APIs to provide a seamless browsing experience with customizable website blocking features.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/blocky.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
