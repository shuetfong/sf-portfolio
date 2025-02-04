import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  const experienceArr = [
    {
      period: "Sep 2022 - Oct 2024",
      company: "iFAST Corporation Ltd, Singapore",
      title: "IT Specialist",
      description: [
        "Developed and maintained web applications and online portals for various investment products using <span>Java, J2EE, JSP/Servlet, Spring, Hibernate, and Oracle Database</span>.",
        "Enhanced frontend interfaces with <span>Angular, HTML, SCSS, and TypeScript</span>, delivering responsive and user-friendly designs.",
        "Collaborated with users to gather requirements, propose solutions, and translate them into tailored technical designs to meet business and user needs.",
        "Conducted system testing and debugging with <span>jTest and Sonarqube</span>.",
        "Utilized <span>SQL</span> for querying, managing, and optimizing relational databases, including tuning queries for better performance.",
        "Handled additional duties assigned by manager.",
      ],
    },
    {
      period: "Oct 2021 - Jan 2022",
      company: "Doerpreneur Soft Sdn Bhd, Malaysia",
      title: "Software Developer Intern",
      description: [
        "Gathered module requirements from target users.",
        "Prepared UML diagrams for new module.",
        "Successfully completed the database design of the new module.",
        "Created new user interface design using <span>Figma</span>.",
        "Involved in front-end web development using <span>HTML, CSS, JavaScript, and jQuery</span>.",
      ],
    },
  ];

  const mapExperiences = (
    experiences: Array<{
      period: string;
      company: string;
      title: string;
      description: string[];
    }>
  ) => {
    return experiences.map((experience, i) => {
      return (
        <li key={`experience_${i}`} className="mt-4 py-1">
          <div
            className={`${styles["experience-group"]} grid md:grid-cols-10 md:gap-4 lg:gap-8`}
          >
            <div className="uppercase text-sm md:col-span-3 lg:col-span-2">
              {experience.period}
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <div
                className={`${styles["experience-title"]} text-lg font-medium`}
              >
                {experience.title}
              </div>
              <div className={`${styles["experience-company"]}`}>
                {experience.company}
              </div>
              <ul className={`${styles["experience-descriptions"]}`}>
                {experience.description.map((desc, j) => (
                  <li key={`description_${i}_${j}`} dangerouslySetInnerHTML={{__html: desc}}></li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <section
      id="experience"
      className="p-4 my-8 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto"
    >
      <div className="py-6">
        <div className="text-3xl font-semibold text-center pb-8">
          E<span className="border-b-[0.45rem] border-purple-700 pb-1">xperienc</span>e
        </div>
        <div>
          <ol className={styles["experience-list"]}>
            {mapExperiences(experienceArr)}
          </ol>
        </div>
      </div>
    </section>
  );
}
