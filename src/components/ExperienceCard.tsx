import Image from "next/image";
import { ASSSETS } from "../../assets";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
type Props = {
  title?: string;
  logoSrc?: string;
  description?: string;
  duration?: string;
  techStack?: string[];
  keyAchievements?: string[];
  linkProducts?: string[];
};
const ExperienceCard = ({
  title,
  logoSrc,
  description,
  duration,
  techStack,
  keyAchievements,
  linkProducts,
}: Props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-4">
          <div className="flex flex-row items-center gap-3">
            {/* logo */}
            <div className="w-[45px] h-[45px]">
              <Image
                src={logoSrc || ASSSETS.CSS_LOGO}
                width={50}
                height={50}
                className="w-full h-full object-contain"
                alt="logo"
              ></Image>
            </div>
            {/*Role and Company name */}
            <h3 className="font-[800] text-[20px]">
              {title || " Lead Software Engineer at Google"}
            </h3>
          </div>
          {/* Duration */}
          <p className="text-white/80 text-md font-[200] italic">
            {duration || "Nov 2019 - Present"}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {/* Description */}
          <p className="text-white/90 font-[400] text-[16px] ">
            {description ||
              ` As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.`}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
            <p className="text-white font-medium">Tech Stack</p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
              {techStack?.map((tech, index) => (
                <Badge
                  key={index}
                  className="text-white font-md text-sm bg-card-bg py-1 hover:transition-transform hover:scale-105 cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-2 lg:gap-0">
            <p className="text-white/90 font-bold">Key Contributions</p>
            <ul className="list-disc list-inside marker:text-white">
              {keyAchievements?.map((achievement, index) => (
                <li key={index} className="text-white/85 text-sm mt-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Link products */}
          <div className="flex flex-col items-start justify-between gap-4">
            <p className="text-white font-medium">Link Products</p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-5">
              {linkProducts?.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a href={link || "#"} target="_blank">
                      <Button className="rounded-full w-12 h-12 bg-gradient-to-r from-[#5badff]  to-[#1373d1] hover:transition-transform hover:scale-105 cursor-pointer">
                        <Link />
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
