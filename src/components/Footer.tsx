import type React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 4rem 2rem;
  text-align: center;
`

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FooterTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
`

const FooterText = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`

const CTAButton = styled.a`
  display: inline-block;
  background: var(--rainbow-gradient);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--rainbow-gradient-hover);
  }
`

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Let's Build Something Amazing!</FooterTitle>
        <FooterText>
          Ready to take your digital presence to the next level? Let's create a website or app that truly stands out.
        </FooterText>
        <CTAButton href="https://wa.link/zxj4wm" target="_blank" rel="noopener noreferrer">
          Get in Touch
        </CTAButton>
      </FooterContent>
    </FooterContainer>
  )
}

