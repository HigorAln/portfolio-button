import classNames from "classnames";
import { AnimatePresence, motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Projects } from "./Projects";
import { ActuallyProps } from "../pages/index";
import { About } from "./About";
import { Experience } from "./Experience";

interface Props {
  actually: ActuallyProps;
}

export function Main({ actually }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 500) {
      setIsMobile(true);
    }
  }, []);

  return (
    <m.div
      className={"mt-10 h-auto p-2 flex flex-col items-center transition-all"}
      initial={{ width: isMobile ? "150px" : "300px", opacity: 0 }}
      animate={{ width: isMobile ? "320px" : "600px", opacity: 1 }}
      exit={{ width: isMobile ? "150px" : "300px", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {actually === "Projects" && <Projects />}
        {actually === "About" && <About />}
        {actually === "Experience" && <Experience />}
      </AnimatePresence>
    </m.div>
  );
}
