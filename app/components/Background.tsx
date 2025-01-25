import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  const generateRandomDuration = (
    count: number,
    min: number,
    max: number
  ): number[] => {
    return Array.from(
      { length: count },
      () => (Math.random() * (max - min + 1)) + min
    );
  };

  const randomDurations = generateRandomDuration(100, 4, 25);

  return (
    <div className={styles["bg-container"]}>
      <div className={styles.bubbles}>
        {randomDurations.map((num, index) => (
          <span
            key={index}
            style={
              {
                "--duration": num,
              } as React.CSSProperties
            }
            className={styles.bubble}
          >
          </span>
        ))}
      </div>
    </div>
  );
}
