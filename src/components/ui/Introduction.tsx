import Image from "next/image";
import { ASSSETS } from "../../../assets";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};
const Introduction = ({ description, title }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around  ">
        {/* Content */}
        <div className="flex gap-4 flex-col xs:items-center xs:justify-center order-2 md:order-1 w-full md:max-w-[500px] ">
          {/* Text */}
          <div>
            <h1 className="text-[76px] text-center md:text-start font-extrabold text-white uppercase">
              {title || "hi, i am vu"}
            </h1>
            <p className=" text-white text-center md:text-start font-[200] text-[14px] w-full">
              {description ||
                "I am a software engineer with a passion for building web applications and exploring new technologies. I love creating efficient and scalable solutions that enhance user experiences. I am a software engineer with a passion for building web applications and exploring new technologies. I love creating efficient and scalable solutions that enhance user experiences "}
            </p>
          </div>
          {/* button */}
          <div className="flex justify-center md:justify-start items-center gap-4 w-full">
            <Button className="cursor-pointer h-[54px] w-max rounded-full bg-gradient-custom">
              <div className="flex flex-row items-center gap-2 px-3">
                <p className="font-semibold uppercase text-md">Contact me</p>
                <ArrowUpRight />
              </div>
            </Button>
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
        {/* image */}
        <Image
          className="order-1 md:order-2"
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
