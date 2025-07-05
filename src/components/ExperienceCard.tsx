import Image from "next/image";
import { ASSSETS } from "../../assets";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ExperienceCard = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-4">
          <div className="flex flex-row items-center gap-3">
            {/* logo */}
            <div className="w-8 h-8">
              <Image
                src={ASSSETS.CSS_LOGO}
                width={32}
                height={32}
                className="w-full h-full object-cover"
                alt="logo"
              ></Image>
            </div>
            {/*Role and Company name */}
            <h3 className="font-[800] text-[24px]">
              Lead Software Engineer at Google
            </h3>
          </div>
          {/* Duration */}
          <p className="text-white/80 text-md font-[200] italic">
            Nov 2019 - Present
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {/* Description */}
          <p className="text-white/90 font-[600] text-md ">
            {` As a Senior Software Engineer at Google, I played a pivotal role in
            developing innovative solutions for Google's core search algorithms.
            Collaborating with a dynamic team of engineers, I contributed to the
            enhancement of search accuracy and efficiency, optimizing user
            experiences for millions of users worldwide.`}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
            <p className="text-white/90 font-medium">Tech Stack</p>
            <div className="flex flex-row flex-wrap items-center justify-start gap-2">
              <Badge className="text-white font-md text-sm bg-card-bg py-1  hover:transition-transform hover:scale-105 cursor-pointer ">
                Hello
              </Badge>
              <Badge className="text-white font-md text-sm bg-card-bg py-1  hover:transition-transform hover:scale-105 cursor-pointer ">
                Hello
              </Badge>
              <Badge className="text-white font-md text-sm bg-card-bg py-1  hover:transition-transform hover:scale-105 cursor-pointer ">
                Hello
              </Badge>
            </div>
          </div>
          {/* Link products */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
            <div className="flex flex-row flex-wrap items-center justify-start gap-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href=" https://roshi.vn/" target="_blank">
                    <Button className="rounded-full w-12 h-12 bg-gradient-to-r from-[#5badff]  to-[#1373d1] hover:transition-transform hover:scale-105 cursor-pointer">
                      <Link />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p> https://roshi.vn/</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href=" https://roshi.vn/" target="_blank">
                    <Button className="rounded-full w-12 h-12 bg-gradient-to-r from-[#5badff]  to-[#1373d1] hover:transition-transform hover:scale-105 cursor-pointer">
                      <Link />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p> https://roshi.vn/</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
