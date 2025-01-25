import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectArr = [
    {
      name: "SF Portfolio (2025)",
      logo: "/SF_portfolio.png",
      description: "A portfolio website hosted on Vercel.",
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      name: "PlanMySpend (2024)",
      logo: "/PlanMySpend.png",
      description:
        "A budget management system that helps users to plan and tract their incomes and expenses.",
      technologies: [
        "Java",
        "HTML",
        "SCSS",
        "TypeScript",
        "Angular",
        "PrimeNG",
        "NGXS",
        "RxJS",
        "Gradle",
        "Intellij IDEA",
        "VS Code",
      ],
    },
    {
      name: "MyPassword (2022)",
      logo: "/MyPassword.png",
      description:
        "A simple password manager mobile application that allows users to manage passwords.",
      technologies: ["Java", "Android Studio"],
    },
  ];

  const mapProjects = (projects: Array<ProjectInfo>) => {
    return projects.map((project, i) => {
      return (
        <ProjectItem
          key={`project_${i}`}
          project={project}
          even={i % 2 === 0}
        />
      );
    });
  };

  return (
    <section
      id="projects"
      className="bg-[#0b0c22]/80 backdrop-hue-rotate-90 p-4 my-8 md:p-8"
    >
      <div className="my-6 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto">
        <div className="text-3xl font-semibold text-center pb-8">P<span className="border-b-[0.45rem] border-purple-700 pb-1">roject</span>s</div>
        <div className="p-4 divide-y divide-[#f6f1ff1e]">
          {mapProjects(projectArr)}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({
  project,
  even,
}: {
  project: ProjectInfo;
  even: boolean;
}) {
  const generateRandomBorderRadius = () => {
    const randomPercent = () => Math.floor(Math.random() * (55 - 35 + 1)) + 35;
    return `${randomPercent()}% ${randomPercent()}% ${randomPercent()}% ${randomPercent()}% / ${randomPercent()}% ${randomPercent()}% ${randomPercent()}% ${randomPercent()}%`;
  };

  return (
    <div className="grid lg:grid-cols-10 items-center px-4 py-8">
      <div
        className={`flex justify-center lg:col-span-5 ${
          even ? "lg:order-2" : "lg:order-1 pr-8"
        }`}
      >
        <Image
          src={project.logo}
          alt={project.name}
          className="h-80 w-auto lg:h-96 outline-indigo-500 outline-dotted outline-2 outline-offset-2 border-pink-500 border-2"
          width={1024}
          height={1024}
          style={{
            borderRadius: generateRandomBorderRadius(),
          }}
        />
      </div>
      <div
        className={`p-6 lg:pt-0 lg:col-span-5 ${
          even ? "lg:order-1 pr-8" : "lg:order-2"
        }`}
      >
        <div className="text-xl font-bold">{project.name}</div>
        <div className="flex flex-wrap gap-2 my-3 text-xs font-semibold">
          {project.technologies.map((tech, j) => (
            <span key={`technology_${j}`} className={styles["technology"]}>
              {tech}
            </span>
          ))}
        </div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></div>
      </div>
    </div>
  );
}

interface ProjectInfo {
  name: string;
  logo: string;
  description: string;
  technologies: string[];
}
