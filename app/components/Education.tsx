import React from "react";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className="p-4 my-8 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto"
    >
      <div className="my-6">
        <div className="text-3xl font-semibold text-center pb-8">E<span className="border-b-[0.45rem] border-purple-700 pb-1">ducatio</span>n</div>
        <div className="mt-4">
          <div className={styles["education-card"]}>
            <div className={`${styles["education-details"]}`}>
              <div className={styles["education-degree"]}>
                <strong>
                  Bachelor of Information Systems (Honours) <br />
                  Information Systems Engineering with Distinction
                </strong>
              </div>
              <div className="text-sm mt-2">
                <div>Universiti Tunku Abdul Rahman</div>
                <div>May 2019 - June 2022</div>
              </div>
              <div className="text-sm mt-2">
                Academic Achievements:
                <ul className="list-disc pl-4">
                  <li>Dean{"'"}s List, 4 trimesters</li>
                  <li>President{"'"}s List, 1 trimesters</li>
                  <li>Book Prize Year 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
