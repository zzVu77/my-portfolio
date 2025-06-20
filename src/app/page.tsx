import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import Techs from "@/components/Techs";
import Wrapper from "@/components/Wrapper";
const dummyProject = {
  title: "Adventure Time Landing Page",
  description:
    "A promotional landing page for Adventure Time, featuring dynamic content, newsletter signup, and a fully responsive design.",
  duration: "04/2025 - 06/2025",
  techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  roles: ["Frontend Developer", "UI Collaborator"],
  keyAchievements: [
    "Collaborated with a designer to create a visually appealing and user-friendly landing page.",
    "Implemented newsletter signup with form validation.",
    "Ensured full responsiveness across devices.",
    "Integrated dynamic content management.",
  ],
  liveDemoLink: "https://adventure-time-demo.com",
  githubLink: "https://github.com/username/adventure-time-landing",
  projectImage:
    "https://images.unsplash.com/photo-1743397015934-3aa9c6199baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  reverse: false,
};
export default function Home() {
  return (
    <>
      <Wrapper classNames={{ container: "lg:pb-[80px]" }}>
        <Introduction></Introduction>
      </Wrapper>
      <Wrapper
        title="EXPERIENCE WITH"
        classNames={{ title: "text-gradient-gray" }}
      >
        <Techs></Techs>
      </Wrapper>
      <Wrapper
        title="My PROJECTS"
        description="Here are some of the selected projects that showcase my passion for web application development."
        classNames={{
          title: "text-gradient-orange ",
          container: "gap-[50px] lg:gap-[80px]",
        }}
      >
        <ProjectCard
          reverse={false}
          title={dummyProject.title}
          description={dummyProject.description}
          duration={dummyProject.duration}
          roles={dummyProject.roles}
          techStack={dummyProject.techStack}
          keyAchievements={dummyProject.keyAchievements}
          githubLink={dummyProject.githubLink}
          liveDemoLink={dummyProject.liveDemoLink}
        ></ProjectCard>
        <ProjectCard
          title={dummyProject.title}
          description={dummyProject.description}
          duration={dummyProject.duration}
          roles={dummyProject.roles}
          techStack={dummyProject.techStack}
          keyAchievements={dummyProject.keyAchievements}
          githubLink={dummyProject.githubLink}
          liveDemoLink={dummyProject.liveDemoLink}
          reverse={true}
        ></ProjectCard>
      </Wrapper>
    </>
  );
}
