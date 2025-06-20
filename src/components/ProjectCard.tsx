import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Github, MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  duration?: string;
  techStack?: string[];
  roles?: string[];
  keyAchievements?: string[];
  liveDemoLink?: string;
  githubLink?: string;
  projectImage?: string;
  reverse?: boolean;
};
const ProjectCard = ({
  title,
  description,
  duration,
  techStack,
  roles,
  keyAchievements,
  githubLink,
  liveDemoLink,
  projectImage,
  reverse,
}: Props) => {
  return (
    <>
      <Card className="bg-black p-0 m-0 border-0">
        <CardContent className="flex flex-col items-center  lg:flex-row gap-10 p-0">
          <div
            className={cn(
              "bg-card-bg p-6 flex justify-center items-center rounded-xl h-auto w-full lg:min-w-[400px] max-w-[600px]",
              reverse === true && "lg:order-1"
            )}
          >
            <Image
              src={
                projectImage ||
                "https://images.unsplash.com/photo-1743397015934-3aa9c6199baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={486}
              height={347}
              alt="project-img"
              className="rounded-2xl w-full h-auto object-contain"
            ></Image>
          </div>
          {/* Detail of project */}
          <div className="flex flex-col items-center lg:items-start gap-8 ">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold uppercase">
                  {title || "Promotional landing page for our favorite show"}
                </h2>
                <p className="text-description-text text-md ">
                  {description ||
                    `Teamed up with a designer to breathe life into a promotional
                  webpage for our beloved show, Adventure Time. Delivered a
                  fully responsive design with dynamic content capabilities,
                  seamlessly integrating a newsletter feature to keep fans
                  updated with the latest adventures.`}
                </p>
              </div>
              <div>
                <h3 className="uppercase text-[20px] font-bold">
                  project info
                </h3>
                <div className="flex flex-col gap-3">
                  {/* Duration */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
                    <p className="text-description-text">Duration</p>
                    <Badge className="text-description-text text-sm bg-card-bg py-1">
                      {duration || "  04/2025 - 06/2025"}
                    </Badge>
                  </div>
                  <hr />
                  {/* Tech Stack */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
                    <p className="text-description-text">Tech Stack</p>
                    <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                      {techStack?.map((tech, index) => (
                        <Badge
                          key={index}
                          className="text-description-text text-sm bg-card-bg py-1"
                        >
                          {tech || "React"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <hr />
                  {/* Role */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0">
                    <p className="text-description-text">Role</p>
                    <div className="flex flex-row flex-wrap items-center justify-start gap-2">
                      {roles?.map((role, index) => (
                        <Badge
                          key={index}
                          className="text-description-text text-sm bg-card-bg py-1"
                        >
                          {role || "Frontend Developer"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <hr />
                  {/* Key achievements */}
                  <div className="flex flex-col  items-start  justify-start gap-2 lg:gap-0">
                    <p className="text-description-text">Key achievements</p>
                    <ul className="list-disc list-inside marker:text-white ">
                      {keyAchievements?.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-description-text text-sm mt-2"
                        >
                          {achievement ||
                            `  Collaborated with a designer to create a visually
                          appealing and user-friendly landing page.`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-row items-center justify-between gap-4">
              {liveDemoLink && (
                <Link
                  href={liveDemoLink || "#"}
                  target="_blank"
                  className=" flex flex-row items-center gap-2 uppercase "
                >
                  <Button
                    variant={"ghost"}
                    className="cursor-pointer uppercase bg-gradient-hover font-bold"
                  >
                    Live demo
                    <MoveUpRight />
                  </Button>
                </Link>
              )}
              {githubLink && (
                <Link
                  href={githubLink || "#"}
                  target="_blank"
                  className=" flex flex-row items-center gap-2 uppercase  "
                >
                  <Button
                    variant={"ghost"}
                    className="cursor-pointer uppercase bg-gradient-hover font-bold"
                  >
                    See on GitHub
                    <Github />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
