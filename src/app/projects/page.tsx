"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css/core";
// @ts-ignore
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "PlastiScan: Marine Debris Detection",
    description: `An AI-powered marine debris detection system integrating ML with web development using React and Python.`,
    link: "https://plastiscan.netlify.app/",
    images: [
      "/assets/projects-screenshots/portfolio/plastiscan.png",
      "/assets/projects-screenshots/portfolio/plastiscan2.png",
    ],
  },
  {
    id: 2,
    name: "HireMe - Job Portal Platform",
    description: `A full-stack job portal platform connecting job seekers with employers, built with React, Node.js, and MongoDB.`,
    link: "https://hirememaybe.netlify.app/",
    images: [
      "/assets/projects-screenshots/portfolio/hireme.png",
    ],
  },
  {
    id: 3,
    name: "Fashion Recommender System",
    description: `A Python-based fashion recommendation system using machine learning algorithms for personalized recommendations.`,
    link: "https://github.com/Chetan-KH511/Fashion-Recommender",
    images: [
      "/assets/projects-screenshots/portfolio/fashion.png",
    ],
  },
  {
    id: 4,
    name: "CarryCart - Logistics App",
    description: `A Flutter-based logistics application for efficient delivery management with real-time tracking.`,
    link: "https://github.com/Chetan-KH511/Flutter-Logistic-app-project",
    images: [
      "/assets/projects-screenshots/portfolio/landing.png",
    ],
  },
  {
    id: 5,
    name: "BlockySite - Website Blocker",
    description: `A Chrome extension that helps users stay focused by blocking distracting websites with customizable settings.`,
    link: "https://github.com/Chetan-KH511/BlockySite",
    images: [
      "/assets/projects-screenshots/portfolio/blocky.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full pt-20">
        <h1 className="text-4xl mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
