import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import Techs from "@/components/Techs";

export default function Home() {
  return (
    <>
      <div className="px-8 md:px-20 flex flex-col gap-10">
        <Introduction></Introduction>
        <Techs></Techs>
        <ProjectCard reverse={false}></ProjectCard>
        <ProjectCard reverse={true}></ProjectCard>
      </div>
    </>
  );
}
