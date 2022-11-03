/* eslint-disable react/no-unescaped-entities */
import { projects } from "../utils/projets";
import { motion as m } from "framer-motion";
import React from "react";

const textClass = "text-style-g-e6 text-sm lg:min-w-[600px]";

export function About() {
  return (
    <m.div
      initial={{
        width: "200px",
        opacity: 0,
      }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <span className="flex flex-col sm:px-3 gap-3">
        <strong className="text-style-g-ed text-xl">Higor Allan</strong>

        <p className="text-style-g-e6 text-sm sm:whitespace-nowrap">
          Individual focused on performance and secure applications.
        </p>

        <p className={textClass}>
          Currently working as a front-end for the{" "}
          <a
            href="https://construtorapatriani.com.br"
            target={"_blank"}
            className="text-style-g-ed hover:text-style-g-3"
            rel="noreferrer"
          >
            Patriani Construction Company
          </a>{" "}
          where I carry out maintenance and realization of new features in
          payment systems that move billions per year. <br />
        </p>

        <p className={textClass}>
          I've been in the job market for just under 2 years, but I'm always
          evolving and learning new things daily. My focus is to be a front-end
          specialist, being able to provide better performance, security and
          experience for the end user. Excited daily by the evolution of the
          front-end and where this area is heading.
        </p>

        <p className={textClass}>
          In my spare time I read books or play online games with my friends, I
          like to travel constantly (because I have to enjoy the best things
          this career gives me ^^)
        </p>

        <p className={textClass}>
          Enthusiast in the hacker world, quite curious to know how things work
          behind. Study vulnerabilities in web applications; even more now with
          the evolution of PWA's many companies are choosing to use them. And
          with the growing IT market, few are caring about security.
        </p>
      </span>
    </m.div>
  );
}
