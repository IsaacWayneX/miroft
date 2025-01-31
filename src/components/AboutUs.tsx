import type React from "react"
import styled from "styled-components"

const AboutContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #0f0f0f;
`

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 700;
`

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

export const AboutUs: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>About Us</AboutTitle>
        <AboutText>
          At Miroft Limited, we specialize in crafting stunning websites and powerful mobile applications that transform
          brands and boost digital presence. Our team of expert developers and designers work tirelessly to create
          seamless, user-friendly, and high-performance solutions tailored to your business needs.
        </AboutText>
        <AboutText>
          From sleek corporate websites to innovative mobile apps, we blend creativity, strategy, and technology to
          deliver results-driven digital products.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}

