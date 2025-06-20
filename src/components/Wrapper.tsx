import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  classNames?: {
    title?: string;
    desc?: string;
    container?: string;
  };
  title?: string;
  description?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  classNames,
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full px-8 md:px-20 flex flex-col items-center gap-10 lg:gap-14 pb-[80px] lg:pb-[100px]",
        classNames?.container
      )}
    >
      <div className="max-w-[600px] flex flex-col items-center gap-2 justify-center">
        {title && (
          <h2
            className={cn(
              "text-white text-[26px] font-extrabold text-center uppercase",
              classNames?.title
            )}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            className={cn(
              "font-[200] text-[16px] text-center text-white",
              classNames?.desc
            )}
          >
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
