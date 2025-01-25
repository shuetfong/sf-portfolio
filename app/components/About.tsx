"use client";

import React from "react";
import styles from "./About.module.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="my-20 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto"
    >
      <div className="text-center">
        <div
          className={`${styles["about-title"]} text-2xl font-bold`}
        >
          <span>Hello, I{"'"}m </span>
        </div>
        <TypeAnimation
          sequence={[
            "Shuet Fong",
            1000,
            "",
            1000,
            "a Software Developer",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-5xl font-semibold inline-block"
        />
        <div className="text-md text-gray-400 my-4">
          Explore my portfolio to see the projects and skills that drive my
          journey in software development!
        </div>
        <div className={`${styles["about-action"]} pb-8`}>
          <button className={styles["btn-fill"]}>
            <a href="/Resume.pdf" download="Resume.pdf">
              Download Resume
            </a>
          </button>
          <button className={styles["btn-outline"]}>
            <Link href="#contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
