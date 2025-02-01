import type React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { Link } from "react-scroll"

const HeroContainer = styled.section<{ inView: boolean }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250201-WA0001.jpg-bNxzMDUS72PTAhAh0JPRJjMVqqiDbh.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? "translateY(0)" : "translateY(20px)")};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding: 2rem;
  max-width: 800px;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #ffffff;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CTAButton = styled.button`
  
  color:rgb(44, 44, 44);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
  color:rgb(255, 255, 255);
    transform: translateY(-2px);
    background: var(--rainbow-gradient-hover);
  }
`

export const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <HeroContainer ref={ref} inView={inView} id="hero">
      <HeroContent>
        <HeroTitle>Own Your Digital Success</HeroTitle>
        <HeroSubtitle>
       Whether you're a startup or an enterprise, Miroft Limited brings your digital vision to life with cutting-edge design and seamless functionality.
        </HeroSubtitle>
        <HeroSubtitle>Let's build something extraordinary. 🚀</HeroSubtitle>
        <Link to="projects" smooth={true} duration={500}>
        <CTAButton>Get Started</CTAButton>
        </Link>
      </HeroContent>
    </HeroContainer>
  )
}

