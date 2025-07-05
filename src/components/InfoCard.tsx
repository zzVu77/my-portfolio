import Image from "next/image";
import { ASSSETS } from "../../assets";
type Props = {
  title?: string;
  imgSrc?: string;
  children?: React.ReactNode;
};
const InfoCard = ({ children, imgSrc, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 border-[1] shadow-2xl border-white/20 p-5 rounded-lg bg-gradient-to-b from-[#0a0a0a] to-[#161616]">
      <h2 className="text-[26px] font-[800] ">{title || "Education"}</h2>
      <Image
        src={imgSrc || ASSSETS.AVATAR}
        height={200}
        width={200}
        alt="about-img"
      ></Image>
      <div className="flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
