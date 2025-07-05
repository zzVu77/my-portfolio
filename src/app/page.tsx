import ExperienceCard from "@/components/ExperienceCard";
import InfoCard from "@/components/InfoCard";
import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import Techs from "@/components/Techs";
import Wrapper from "@/components/Wrapper";
import { ASSSETS } from "../../assets";
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
        <Introduction />
      </Wrapper>
      <Wrapper
        title="EXPERIENCE WITH"
        classNames={{ title: "text-gradient-gray" }}
      >
        <Techs />
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
          title={dummyProject.title}
          description={dummyProject.description}
          duration={dummyProject.duration}
          roles={dummyProject.roles}
          techStack={dummyProject.techStack}
          keyAchievements={dummyProject.keyAchievements}
          githubLink={dummyProject.githubLink}
          liveDemoLink={dummyProject.liveDemoLink}
          reverse={true}
        />
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
        />
      </Wrapper>
      <Wrapper
        title="Experience"
        description="A showcase of my experience in real-world web development projects, highlighting key roles, responsibilities, and achievements."
        classNames={{
          title: "text-gradient-blue ",
          container: "gap-[50px] lg:gap-[80px]",
        }}
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </Wrapper>
      <Wrapper
        title="About me"
        description="Learn more about my background, interests, and what drives my passion for web development."
        classNames={{
          title: "text-gradient-yellow ",
          container: "gap-[50px] lg:gap-[80px] md:px-5",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[50px]">
          <InfoCard title="Education" imgSrc={ASSSETS.HCMUTE_LOGO}>
            <h3 className="text-[20px] font-medium text-white text-center max-w-2xl">
              Ho Chi Minh City University of Technology and Education
            </h3>
            <p className="text-[16px] font-light text-white/90 text-center max-w-2xl">
              Currently a third-year student majoring in Software Engineering
              with a GPA of{" "}
              <strong className="text-white font-bold">3.25/4.0</strong>.
              Building a strong foundation in programming and software
              development, with hands-on experience in web technologies through
              academic projects.
            </p>
          </InfoCard>
          <InfoCard title="Career Goals" imgSrc={ASSSETS.TARGET_ICON}>
            <h3 className="text-[20px] font-medium text-white text-center max-w-2xl">
              As a passionate and dedicated Frontend Developer
            </h3>
            <p className="text-[16px] font-light text-white/90 text-center max-w-2xl">
              My <strong className="text-white font-bold">short-term</strong>
              goal is to deepen my expertise in building responsive and
              user-friendly interfaces. In the{" "}
              <strong className="text-white font-bold">long term</strong>, I aim
              to become a well-rounded fullstack developer, capable of handling
              both client-side and server-side development efficiently.
            </p>
          </InfoCard>
          <InfoCard title="Hobbies" imgSrc={ASSSETS.HOBBIES_ICON}>
            <h3 className="text-[20px] font-medium text-white text-center max-w-2xl">
              Sports, E-sports, and Photography
            </h3>
            <p className="text-[16px] font-light text-white/90 text-center max-w-2xl">
              {`Outside of coding, I enjoy staying active through sports 🏀 and
              engaging in e-sports 🎮 for both fun and focus. I'm also passionate
              about nature photography and photo editing 📸, which allow me to
              express creativity and attention to detail beyond the screen.`}
            </p>
          </InfoCard>
        </div>
      </Wrapper>
    </>
  );
}
