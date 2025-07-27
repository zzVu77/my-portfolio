import Image from "next/image";
import { ASSSETS } from "../../assets";
type Props = {
  title?: string;
  imgSrc?: string;
  children?: React.ReactNode;
};
const InfoCard = ({ children, imgSrc, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 border-[1] shadow-2xl border-white/20 p-5 rounded-lg  max-w-[350px] min-h-[520px] hover:scale-105 transition-all duration-300 ease-in-out">
      <h2 className="text-[26px] font-[800] text-center ">
        {title || "Education"}
      </h2>
      <Image
        src={imgSrc || ASSSETS.AVATAR}
        height={150}
        width={150}
        alt="about-img"
        className="object-cover "
      ></Image>
      <div className="flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
