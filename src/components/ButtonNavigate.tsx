import { motion as m } from "framer-motion";

interface Props {
  name: string;
  icon: string;
}

export function ButtonNavigate({ icon, name }: Props) {
  return (
    <m.div
      initial={{ width: "40px", height: "40px" }}
      whileHover={{ width: "65px", height: "65px" }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="group w-10 h-10 bg-style-g-2 box-border rounded-full shadow_button_navigate cursor-default"
    >
      <div
        className="absolute -top-9 group-hover:-top-12 transform-50 w-[65px] opacity-0 transition-all \
       group-hover:opacity-100 flex justify-center text-sm border border-style-g-0 \
        rounded-md duration-300 px-1 py-[1px] text-[#7d7d7d] cursor-default"
      >
        {name}
      </div>
      <m.button className="w-full h-full flex items-center justify-center cursor-default">
        <img
          src={`/icons/${icon}.svg`}
          alt="close naviate"
          className={"text-white w-4 group-hover:w-10 transition-all"}
        />
      </m.button>
    </m.div>
  );
}