import ExperienceCard from "@/components/ExperienceCard";
import InfoCard from "@/components/InfoCard";
import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import Techs from "@/components/Techs";
import Wrapper from "@/components/Wrapper";
import { ASSSETS } from "../../assets";
import { experienceData, projectData } from "../../constant";
import AnimatedOnScroll from "@/components/MotionWrapper";

export default function Home() {
  return (
    <>
      <Wrapper
        classNames={{
          container: "lg:pb-[80px] md:px-[80px] items-stretch pt-10",
        }}
      >
        <AnimatedOnScroll>
          <Introduction />
        </AnimatedOnScroll>
      </Wrapper>
      <Wrapper
        title="EXPERIENCE WITH"
        classNames={{ title: "text-gradient-gray tracking-widest" }}
      >
        <AnimatedOnScroll>
          <Techs />
        </AnimatedOnScroll>
      </Wrapper>
      <Wrapper
        title="My PROJECTS"
        description="Here are some of the selected projects that showcase my passion for web application development."
        classNames={{
          title: "text-gradient-orange tracking-widest ",
          container:
            "gap-[50px] lg:gap-[80px] md:px-[100px] lg:px-[150px] xl:px-[300px] ",
        }}
      >
        {projectData.map((project, index) => (
          <AnimatedOnScroll key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              duration={project.duration}
              roles={project.roles}
              techStack={project.techStack}
              keyAchievements={project.keyAchievements}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
              projectImage={project.projectImage}
            />
          </AnimatedOnScroll>
        ))}
      </Wrapper>

      <Wrapper
        title="Work Experience"
        description="A showcase of my experience in real-world web development projects."
        classNames={{
          title: "text-gradient-blue tracking-widest",
          container: "gap-[50px] lg:gap-[80px] md:px-[150px]",
        }}
      >
        {experienceData.map((experience, index) => (
          <AnimatedOnScroll key={index}>
            <ExperienceCard
              title={experience.title}
              description={experience.description}
              duration={experience.duration}
              techStack={experience.techStack}
              linkProducts={experience.linkProducts}
              logoSrc={experience.logoSrc}
            />
          </AnimatedOnScroll>
        ))}
      </Wrapper>
      <Wrapper
        title="About me"
        description="Learn more about my background, interests, and what drives my passion for web development."
        classNames={{
          title: "text-gradient-yellow tracking-widest ",
          container: "gap-[50px] lg:gap-[80px] md:px-5",
        }}
      >
        <AnimatedOnScroll>
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
                development, with hands-on experience in web technologies
                through academic projects.
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
                <strong className="text-white font-bold">long term</strong>, I
                aim to become a well-rounded fullstack developer, capable of
                handling both client-side and server-side development
                efficiently.
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
        </AnimatedOnScroll>
      </Wrapper>
    </>
  );
}
