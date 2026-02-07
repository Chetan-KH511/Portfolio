"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { DiMongodb } from "react-icons/di";
import {
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiCplusplus,
  SiC,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiMysql,
  SiSupabase,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "chetanbhatmb@gmail.com",
    href: "mailto:chetanbhatmb@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chetan-bhat-a97380284",
    content: "/chetan-bhat",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Chetan-KH511",
    content: "/Chetan-KH511",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  // Languages
  {
    name: "C",
    content: "Systems programming language",
    icon: <SiC size={"50px"} color={"#A8B9CC"} />,
    color: "#A8B9CC",
  },
  {
    name: "C++",
    content: "Object-oriented programming language",
    icon: <SiCplusplus size={"50px"} color={"#00599C"} />,
    color: "#00599C",
  },
  {
    name: "Python",
    content: "High-level programming language for ML and scripting",
    icon: <FaPython size={"50px"} color={"#3776AB"} />,
    color: "#3776AB",
  },
  {
    name: "Java",
    content: "Object-oriented programming language",
    icon: <FaJava size={"50px"} color={"#007396"} />,
    color: "#007396",
  },
  {
    name: "Kotlin",
    content: "Modern programming language for Android development",
    icon: <SiKotlin size={"50px"} color={"#7F52FF"} />,
    color: "#7F52FF",
  },
  {
    name: "Dart",
    content: "Programming language optimized for building UIs",
    icon: <SiDart size={"50px"} color={"#0175C2"} />,
    color: "#0175C2",
  },
  // Frameworks
  {
    name: "React",
    content: "JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Flutter",
    content: "UI toolkit for building natively compiled applications",
    icon: <SiFlutter size={"50px"} color="#02569B" />,
    color: "#02569B",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime built on Chrome's V8 engine",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Express.js",
    content: "Fast, unopinionated web framework for Node.js",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  // Databases
  {
    name: "MongoDB",
    content: "NoSQL document database",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "MySQL",
    content: "Open-source relational database",
    icon: <SiMysql size={"50px"} color="#4479A1" />,
    color: "#4479A1",
  },
  {
    name: "Firebase",
    content: "Google's mobile and web application development platform",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Supabase",
    content: "Open source Firebase alternative",
    icon: <SiSupabase size={"50px"} color="#3ECF8E" />,
    color: "#3ECF8E",
  },
  // Tools & Tech
  {
    name: "PyTorch",
    content: "Open source machine learning framework",
    icon: <SiPytorch size={"50px"} color="#EE4C2C" />,
    color: "#EE4C2C",
  },
  {
    name: "Scikit-learn",
    content: "Machine learning library for Python",
    icon: <SiScikitlearn size={"50px"} color="#F7931E" />,
    color: "#F7931E",
  },
  {
    name: "TensorFlow.js",
    content: "ML library for JavaScript",
    icon: <SiTensorflow size={"50px"} color="#FF6F00" />,
    color: "#FF6F00",
  },
  {
    name: "Git",
    content: "Distributed version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <>
      {/* Spline 3D Background */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.51/build/spline-viewer.js"
        strategy="lazyOnload"
      />
      <div className="fixed inset-0 z-0 opacity-50">
        {/* @ts-ignore */}
        <spline-viewer
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/VXgl1A0Xjl7SBb2d/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 pt-16 pb-10 h-[calc(100vh-120px)] overflow-hidden relative z-[5] pointer-events-none">
      <div className="flex flex-col lg:flex-row gap-5 h-full pointer-events-auto">
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 h-full"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Chetan</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="flex-1 lg:w-3/4">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600 h-full flex flex-col"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6">About me</h1>
            <p className="mb-6 text-roboto text-lg">
              Hey there! I&apos;m Chetan, a B.E. Information Science and Engineering student at RVITM, Bangalore 
              with hands-on experience in software development, problem-solving, and building innovative projects. 
              Strong analytical skills, effective communication, and a passion for learning new technologies.
            </p>
            <p className="mb-8 text-lg">
              When I&apos;m not coding, you can find me
              exploring new technologies, or sipping coffee
              while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-6">Stuff I use</h1>
            <div className="flex-1 flex items-center">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                  className="w-full"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-3 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
    </>
  );
}

export default Page;
