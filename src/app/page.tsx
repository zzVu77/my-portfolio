import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import Techs from "@/components/Techs";

export default function Home() {
  return (
    <>
      <div className="px-8 md:px-20">
        <Introduction></Introduction>
        <Techs></Techs>
        <ProjectCard></ProjectCard>
      </div>
    </>
  );
}
