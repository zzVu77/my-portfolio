import Image from "next/image";
import { ASSSETS } from "../../assets";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};
const Introduction = ({ description, title }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around w-full ">
        {/* Content */}
        <div className="flex gap-4 flex-col xs:items-center xs:justify-center order-2 lg:order-1 w-full lg:max-w-[550px] ">
          {/* Text */}
          <div>
            <h1 className="text-[76px] text-center lg:text-start font-extrabold text-white uppercase tracking-widest ">
              {title || "hi, i am vu"}
            </h1>
            <p className=" text-white/90 tracking-wide text-center lg:text-start font-[300] text-[16px]  w-full">
              {description ||
                "Currently a third-year student majoring in Software Engineering with a GPA of 3.25/4.0. Building a strong foundation in programming and software development, with hands-on experience in web technologies through academic projects. I have over 6 months of practical experience working with React and Next.js."}
            </p>
          </div>
          {/* button */}
          <div className="flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-4 w-full">
            <Button className="cursor-pointer h-[54px] w-max rounded-full bg-gradient-custom">
              <div className="flex flex-row items-center gap-2 px-3">
                <p className="font-semibold uppercase text-md">Contact me</p>
                <ArrowUpRight />
              </div>
            </Button>
            <div className="flex flex-row gap-4">
              <Button className="cursor-pointer rounded-full w-[54px] h-[54px] bg-gradient-custom">
                <Image
                  src={ASSSETS.LINKED_LOGO}
                  alt="linked logo"
                  height={32}
                  width={32}
                ></Image>
              </Button>
              <Button className="cursor-pointer rounded-full w-[54px] h-[54px] bg-gradient-custom">
                <Image
                  src={ASSSETS.GITHUB_LOGO}
                  alt="linked logo"
                  height={32}
                  width={32}
                ></Image>
              </Button>
            </div>
          </div>
        </div>
        {/* image */}
        <Image
          className="order-1 lg:order-2"
          src={ASSSETS.AVATAR}
          width={300}
          height={400}
          alt="avatar"
        ></Image>
      </div>
    </>
  );
};

export default Introduction;
