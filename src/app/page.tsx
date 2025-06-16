import Introduction from "@/components/Introduction";
import Techs from "@/components/Techs";

export default function Home() {
  return (
    <>
      <div className="px-15 md:px-20">
        <Introduction></Introduction>
        <Techs></Techs>
      </div>
    </>
  );
}
