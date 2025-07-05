import Image from "next/image";
import { ASSSETS } from "../../assets";

const techData = [
  {
    name: "NextJs",
    icon: ASSSETS.NEXT_LOGO,
  },
  {
    name: "React",
    icon: ASSSETS.REACT_LOGO,
  },
  {
    name: "TypeScript",
    icon: ASSSETS.TYPESCRIPT_LOGO,
  },
  {
    name: "JavaScript",
    icon: ASSSETS.JS_LOGO,
  },
  {
    name: "HTML",
    icon: ASSSETS.HTML_LOGO,
  },
  {
    name: "CSS",
    icon: ASSSETS.CSS_LOGO,
  },
  {
    name: "SHADCNUI",
    icon: ASSSETS.SHADCNUI_LOGO,
  },
  {
    name: "MUI",
    icon: ASSSETS.MUI_LOGO,
  },
  {
    name: "Tailwind CSS",
    icon: ASSSETS.TAILWIND_LOGO,
  },

  {
    name: "Figma",
    icon: ASSSETS.FIGMA_LOGO,
  },
  {
    name: "MySQL",
    icon: ASSSETS.MYSQL_LOGO,
  },
  {
    name: "Docker",
    icon: ASSSETS.DOCKER_LOGO,
  },
  {
    name: "ExpressJS",
    icon: ASSSETS.EXPRESSJS_LOGO,
  },
];
const Techs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 w-full">
        {techData.map((tech) => (
          <div key={tech.name} className="flex items-center gap-4">
            <Image
              src={tech.icon}
              alt={`${tech.name} logo`}
              className={`w-12 h-12 filter hover:scale-150 transition-all duration-80 cursor-pointer ${
                tech.name === "NextJs"
                  ? "drop-shadow-[0_0_8px_#fff]"
                  : tech.name === "React"
                    ? "drop-shadow-[0_0_8px_#61dafb]"
                    : tech.name === "TypeScript"
                      ? "drop-shadow-[0_0_8px_#3178c6]"
                      : tech.name === "JavaScript"
                        ? "drop-shadow-[0_0_8px_#f7df1e]"
                        : tech.name === "SHADCNUI"
                          ? "drop-shadow-[0_0_8px_#fff]"
                          : tech.name === "MUI"
                            ? "drop-shadow-[0_0_8px_#007fff]"
                            : tech.name === "Tailwind CSS"
                              ? "drop-shadow-[0_0_8px_#38bdf8]"
                              : tech.name === "HTML"
                                ? "drop-shadow-[0_0_8px_#e34c26]"
                                : tech.name === "CSS"
                                  ? "drop-shadow-[0_0_8px_#1572b6]"
                                  : tech.name === "Figma"
                                    ? "drop-shadow-[0_0_8px_#a259ff]"
                                    : tech.name === "ExpressJS"
                                      ? "drop-shadow-[0_0_8px_#fff]"
                                      : tech.name === "MySQL"
                                        ? "drop-shadow-[0_0_8px_#00758f]"
                                        : tech.name === "Docker"
                                          ? "drop-shadow-[0_0_8px_#2496ed]"
                                          : ""
              }`}
              width={64}
              height={64}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
