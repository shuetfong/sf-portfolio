import React from "react";
import styles from "./Skills.module.css";
import AngularSolid from "./SVG/AngularSolid";
import Azure from "./SVG/Azure";
import CssSolid from "./SVG/CssSolid";
import Git from "./SVG/Git";
import Github from "./SVG/Github";
import Gitlab from "./SVG/Gitlab";
import Gradle from "./SVG/Gradle";
import Hibernate from "./SVG/Hibernate";
import HtmlSolid from "./SVG/HtmlSolid";
import JavaOutlined from "./SVG/Java";
import JavascriptFill from "./SVG/JavascriptFill";
import Jquery from "./SVG/Jquery";
import Junit from "./SVG/Junit";
import Jtest from "./SVG/Jtest";
import Less from "./SVG/Less";
import Maven from "./SVG/Maven";
import MySql from "./SVG/MySql";
import Ngxs from "./SVG/Ngxs";
import Oracle from "./SVG/Oracle";
import PostgreSql from "./SVG/PostgreSql";
import ReactSolid from "./SVG/ReactSolid";
import Rxjs from "./SVG/Rxjs";
import Scss from "./SVG/Scss";
import Sonarqube from "./SVG/Sonarqube";
import Spring from "./SVG/Spring";
import SpringBoot from "./SVG/SpringBoot";
import Sql from "./SVG/Sql";
import TypescriptFill from "./SVG/TypescriptFill";

export default function Skills() {
  const frontend = [
    { name: "HTML", icon: HtmlSolid },
    { name: "CSS", icon: CssSolid },
    { name: "Less", icon: Less },
    { name: "SCSS", icon: Scss },
    { name: "Javascript", icon: JavascriptFill },
    { name: "Typescript", icon: TypescriptFill },
    { name: "Angular", icon: AngularSolid },
    { name: "React", icon: ReactSolid },
    { name: "JQuery", icon: Jquery },
    { name: "RxJS", icon: Rxjs },
    { name: "NGXS", icon: Ngxs },
  ];

  const backend = [
    { name: "Java", icon: JavaOutlined },
    { name: "Spring", icon: Spring },
    { name: "SpringBoot", icon: SpringBoot },
    { name: "Hibernate", icon: Hibernate },
    // { name: "Spring Security", icon: SpringSecurity },
    { name: "SQL", icon: Sql },
    { name: "Oracle", icon: Oracle },
    { name: "MySQL", icon: MySql },
    { name: "PostgreSQL", icon: PostgreSql },
  ];

  const buildTools = [
    { name: "Maven", icon: Maven },
    { name: "Gradle", icon: Gradle },
    { name: "Git", icon: Git },
    { name: "Github", icon: Github },
    { name: "Gitlab", icon: Gitlab },
    { name: "jTest", icon: Jtest },
    { name: "jUnit", icon: Junit },
    { name: "Sonarqube", icon: Sonarqube },
    { name: "Azure", icon: Azure },
  ];

  const mapSkills = (
    skills: Array<{
      name: string;
      icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
    }>
  ) => {
    return skills.map((skill, index) => {
      const IconComponent = skill.icon;
      return (
        <div key={`skill_${index}`} className={styles["skills-card"]}>
          <IconComponent className={styles.logo} />
          <div className={styles.text}>{skill.name}</div>
        </div>
      );
    });
  };

  return (
    <section id="skills" className="bg-[#0b0c22] my-8 p-4 md:p-8">
      <div className="my-6 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto">
        <div className="text-3xl font-semibold text-center pb-8">S<span className="border-b-[0.45rem] border-purple-700 pb-1">kill</span>s</div>
        <div>
          <div className="mt-5">
            <div className={`${styles["skills-section"]} text-lg text-gray-300 py-1`}>
              Frontend Development:
            </div>
            <div>{mapSkills(frontend)}</div>
          </div>
          <div className="mt-5">
            <div className={`${styles["skills-section"]} text-lg text-gray-300 py-1`}>
              Backend Development:
            </div>
            <div>{mapSkills(backend)}</div>
          </div>
          <div className="mt-5">
            <div className={`${styles["skills-section"]} text-lg text-gray-300 py-1`}>
              DevOps & Tools:
            </div>
            <div>{mapSkills(buildTools)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
