import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion as m } from "framer-motion";
import classNames from "classnames";
import { ButtonNavigate } from "./ButtonNavigate";
import { ActuallyProps } from "../pages";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

interface Props {
  handleChange: React.Dispatch<React.SetStateAction<ActuallyProps>>;
}

export function Navigation({ handleChange }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <m.div
      className={classNames(
        "border border-style-g-0 h-[58px] w-min p-2 flex gap-2 items-end rounded-full transition-all justify-start overflow-visible relative"
      )}
    >
      <m.button
        initial={{ width: "40px", height: "40px" }}
        whileHover={{ width: "65px", height: "65px" }}
        onClick={() => {
          setIsOpen(!isOpen);
          handleChange("");
        }}
        className="group flex items-center justify-center select-none bg-style-g-2 box-border rounded-full shadow_button_navigate cursor-default"
      >
        {isOpen ? (
          <img
            src="/icons/close.svg"
            alt="close naviate"
            className={"text-white w-4 group-hover:w-10 transition-all"}
          />
        ) : (
          <img
            src="/icons/plus.svg"
            alt="close naviate"
            className="text-white"
          />
        )}
      </m.button>
      {isOpen && (
        <m.div
          className="flex items-end gap-2"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={container}
        >
          {buttonObject.map((e) => (
            <ButtonNavigate
              key={e.name}
              handleChange={() => handleChange(e.name as any)}
              {...e}
            />
          ))}
        </m.div>
      )}
    </m.div>
  );
}

const buttonObject = [
  {
    name: "About",
    icon: "user",
  },
  {
    name: "Projects",
    icon: "projects",
  },
  {
    name: "Experience",
    icon: "experience",
  },
  {
    name: "Twitter",
    icon: "twitter",
    url: "https://twitter.com/HigorAllan4",
  },
  {
    name: "Github",
    icon: "github",
    url: "https://github.com/higoraln",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/higor-allan/",
  },
];
