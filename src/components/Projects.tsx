/* eslint-disable react/no-unescaped-entities */
import { projects } from "../utils/projets";
import { motion as m } from "framer-motion";
import React from "react";

export function Projects() {
  return (
    <m.div
      initial={{
        width: "200px",
        opacity: 0,
      }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <span className="flex flex-col px-3 gap-3">
        <strong className="text-style-g-ed text-xl">Projects</strong>

        <p className="text-style-g-e6 text-sm whitespace-nowrap">
          A lot of things I've done, covering the technologies I use
        </p>
      </span>

      <div className="flex pt-3 px-3 mt-6 min-w-full">
        <span className="border-dotted p-3 whitespace-nowrap" />
      </div>

      <div className="flex flex-col gap-2">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={project.name_project + index}
            className="flex items-center gap-2 p-3 rounded-xl hover:bg-[#212121] transition-colors"
            rel="noreferrer"
          >
            <p className="whitespace-nowrap text-style-g-ed text-sm">
              {project.name_project}
            </p>
            <p className="whitespace-nowrap text-style-g-e6 text-xs">
              {project.description}
            </p>
            <p className="flex-1 border-t-style-g-3 border-t border-dashed whitespace-nowrap"></p>
            <p className="whitespace-nowrap text-style-g-e6 text-xs">
              {project.year}
            </p>
          </a>
        ))}
      </div>
    </m.div>
  );
}
