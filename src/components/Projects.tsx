import type React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #0f0f0f;
`

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 700;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectCard = styled.div<{ inView: boolean }>`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? "translateY(0)" : "translateY(20px)")};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`

const ProjectInfo = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
`

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.6;
`

const ProjectLink = styled.a`
  display: inline-block;
  background:  #ffffff;
  color:rgb(37, 37, 37);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.3s ease;

  &:hover {
     color:rgb(255, 255, 255);
    transform: translateY(-2px);
    background: var(--rainbow-gradient-hover);
  }
`

const projects = [
  {
    id: 1,
    title: "ChainSwitch",
    description:
      "A unified API platform for routing transactions between L2 blockchain networks in real-time. Built for developers seeking seamless cross-chain integration.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YXEJOy2vmSXifcN8UGYyKFVe4NCjXF.png",
    websiteUrl: "https://kzmokprid7wtj796526u.lite.vusercontent.net/",
  },
  {
    id: 2,
    title: "Eye Doctor Unlimited",
    description:
      "Modern optometry platform featuring virtual try-on technology for over 100+ designer eyewear brands. Seamlessly blending healthcare with style.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ju6okTLZQDtLHl8G5znujHo2avIQAT.png",
    websiteUrl: "https://kzmqeq22ixg5py3wyyjl.lite.vusercontent.net/",
  },
  {
    id: 3,
    title: "Product Launch Platform",
    description:
      "Exclusive waitlist platform for product launches, featuring real-time social proof and seamless email integration for early access.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xuT4d7YmGWuo1D8u2L2unfLJflXeO7.png",
    websiteUrl: "https://kzmqesfilgfgs6auqdfe.lite.vusercontent.net/",
  },
  {
    id: 4,
    title: "PromptMarket",
    description:
      "Blockchain-based marketplace for buying and selling AI prompts. A secure platform connecting prompt engineers with content creators.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Su4DK4pABwSYvf9eDdSP1erYVRNdK.png",
    websiteUrl: "https://kzmk0atvhbkx3l7ryxpx.lite.vusercontent.net/",
  },
  {
    id: 5,
    title: "Modia Properties",
    description:
      "Luxury real estate consultancy platform helping clients find their perfect home through expert guidance and curated property listings.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eNZErEwiKRua7JicnCbKyNT7NUEh5V.png",
    websiteUrl: "https://kzmqf0owptpktbraum2z.lite.vusercontent.net/",
  },
  {
    id: 6,
    title: "SparkCard",
    description:
      "Student-focused credit card platform for Australian young adults, offering transparent rewards and zero hidden fees.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IjEu1zu2qFkGhem6OwqJH5CfODFt3W.png",
    websiteUrl: "https://kzmgnyddyjg717h2razl.lite.vusercontent.net/",
  },
  {
    id: 7,
    title: "LaunchFundr",
    description:
      "Africa's premier backer-driven marketplace, empowering creators to bring innovative products to life through community support.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HRtA38BptsTQLbcanJQNGfxq12tE4a.png",
    websiteUrl: "https://launchfundr.netlify.app/",
  },
]

export const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Our Projects</ProjectsTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  )
}

const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <ProjectCard ref={ref} inView={inView}>
      <ProjectImage src={project.imageUrl} alt={project.title} />
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      </ProjectInfo>
    </ProjectCard>
  )
}

