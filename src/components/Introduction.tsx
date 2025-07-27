"use client";
import Image from "next/image";
import { ASSSETS } from "../../assets";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
};

const Introduction = ({ description, title = "Hi there👋, I'm  " }: Props) => {
  const textList = useMemo(
    () => [" Vu Nguyen", "a Frontend Developer", " a third-year student"],
    []
  );
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = textList[loopIndex % textList.length];

    const handleTyping = () => {
      setDisplayText((prev) => {
        const updatedText = isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1);

        return updatedText;
      });

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayText, isDeleting, loopIndex, typingSpeed, textList]);

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around w-full">
      {/* Content */}
      <div className="flex gap-4 flex-col xs:items-center xs:justify-center order-2 lg:order-1 w-full lg:max-w-[900px]">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[52px] md:text-[72px] text-center lg:text-start font-extrabold text-gradient-pink tracking-widest"
          >
            <span className="text-white">{title}</span> <br />
            <span className="text-gradient-pink">{displayText}</span>
            <span className="text-gradient-pink animate-pulse">|</span>
          </motion.h1>

          <p className="text-white/90 tracking-wide text-center lg:text-start font-[300] text-[16px] w-full">
            {description ||
              "Currently a third-year student majoring in Software Engineering with a GPA of 3.27/4.0. Building a strong foundation in programming and software development, with hands-on experience in web technologies through academic projects. I have over 6 months of practical experience working with React and Next.js. Basic understanding of SEO and web performance optimization. Passionate about creating user-friendly and efficient web applications."}
          </p>
        </div>

        {/* button */}
        <div className="flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-4 w-full">
          <Link href={"mailto:vunguyen77.dev@gmail.com"}>
            <Button className="cursor-pointer h-[48px] w-max rounded-full bg-gradient-custom hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-row items-center gap-2 px0">
                <p className="font-semibold  text-[16px]">
                  vunguyen77.dev@gmail.com
                </p>
                <ArrowUpRight />
              </div>
            </Button>
          </Link>
          <div className="flex flex-row gap-4">
            <Link
              href={"https://www.linkedin.com/in/vunguyen77-dev/"}
              target="_blank"
            >
              <Button className="cursor-pointer rounded-full w-[54px] h-[54px] bg-gradient-custom hover:transform hover:scale-105 transition-all duration-300">
                <Image
                  src={ASSSETS.LINKED_LOGO}
                  alt="linked logo"
                  height={32}
                  width={32}
                />
              </Button>
            </Link>
            <Link href={"https://github.com/zzVu77"} target="_blank">
              <Button className="cursor-pointer rounded-full w-[54px] h-[54px] bg-gradient-custom hover:transform hover:scale-105 transition-all duration-300">
                <Image
                  src={ASSSETS.GITHUB_LOGO}
                  alt="github logo"
                  height={32}
                  width={32}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* image */}
      <Image
        className="order-1 lg:order-2 scale-none md:scale-110"
        src={ASSSETS.AVATAR2}
        width={250}
        height={350}
        alt="avatar "
      />
    </div>
  );
};

export default Introduction;
