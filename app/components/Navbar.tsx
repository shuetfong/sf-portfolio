import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import UserCircle from "./SVG/UserCircle";
import Square2x2 from "./SVG/Square2x2";
import FolderOpen from "./SVG/FolderOpen";
import AcademicCap from "./SVG/AcademicCap";
import BuildingOffice2 from "./SVG/BuildingOffice2";
import Envelope from "./SVG/Envelope";

export default function Navbar() {
  return (
    <header className={`${styles.navbar} fixed top-auto bottom-0 md:sticky md:top-0 md:bottom-auto`}>
      <nav className="flex justify-center w-full">
        <div className={styles.navlist}>
          <Link className={styles.navlink} href="#about">
            <div>
              <UserCircle />
            </div>
            <div className="hidden md:block">About</div>
          </Link>
          <Link className={styles.navlink} href="#skills">
            <div>
              <Square2x2 />
            </div>
            <div className="hidden md:block">Skills</div>
          </Link>
          <Link className={styles.navlink} href="#education">
            <div>
              <AcademicCap />
            </div>
            <div className="hidden md:block">Education</div>
          </Link>
          <Link className={styles.navlink} href="#experience">
            <div>
              <BuildingOffice2 />
            </div>
            <div className="hidden md:block">Experience</div>
          </Link>
          <Link className={styles.navlink} href="#projects">
            <div>
              <FolderOpen />
            </div>
            <div className="hidden md:block">Projects</div>
          </Link>
          <Link className={styles.navlink} href="#contact">
            <div>
              <Envelope />
            </div>
            <div className="hidden md:block">Contact</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
