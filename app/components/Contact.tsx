import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="p-4 my-8 mx-8 md:mx-20 xl:w-4/5 2xl:w-3/5 xl:mx-auto"
    >
      <div className="my-6">
        <div className="text-3xl font-semibold text-center pb-8">
          C<span className="border-b-[0.45rem] border-purple-700 pb-1">ontac</span>t
        </div>
        <div>
          <div className="text-md text-gray-400 text-center">
            Get in touch with me via social media or send me an email.
          </div>
          <div className="w-full md:inline-flex gap-4 mt-4">
            <div className={`${styles["contact-details"]} my-4 md:w-1/2`}>
              <div>Email</div>
              <div className="tracking-tighter">
                <a href="mailto:shuetfongcheang@gmail.com">shuetfongcheang@gmail.com</a>
              </div>
            </div>
            <div className={`${styles["contact-details"]} my-4 md:w-1/2`}>
              <div>LinkedIn</div>
              <div className="tracking-tighter">
                <a
                  href="https://www.linkedin.com/in/shuetfong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/shuetfong/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
