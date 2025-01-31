import type React from "react"
import styled from "styled-components"
import { FaCheckCircle, FaUserFriends, FaRocket, FaBolt, FaHeadset } from "react-icons/fa"

const WhyChooseContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #0a0a0a;
`

const WhyChooseContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const WhyChooseTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 700;
`

const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const ReasonCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ReasonIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`

const ReasonTitle = styled.h3`
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`

const ReasonText = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
`

const reasons = [
  {
    icon: <FaCheckCircle />,
    title: "Custom-Built Solutions",
    text: "Every website and app is designed uniquely to match your brand.",
  },
  {
    icon: <FaUserFriends />,
    title: "User-Centric Design",
    text: "We prioritize intuitive interfaces and seamless user experiences.",
  },
  {
    icon: <FaRocket />,
    title: "Scalable & Future-Proof",
    text: "Our development ensures your platform grows with your business.",
  },
  {
    icon: <FaBolt />,
    title: "Speed & Performance",
    text: "Optimized for fast loading and smooth functionality.",
  },
  {
    icon: <FaHeadset />,
    title: "End-to-End Support",
    text: "From concept to launch and beyond, we've got you covered.",
  },
]

export const WhyChooseMiroft: React.FC = () => {
  return (
    <WhyChooseContainer id="why-choose">
      <WhyChooseContent>
        <WhyChooseTitle>Why Choose Miroft?</WhyChooseTitle>
        <ReasonGrid>
          {reasons.map((reason, index) => (
            <ReasonCard key={index}>
              <ReasonIcon>{reason.icon}</ReasonIcon>
              <ReasonTitle>{reason.title}</ReasonTitle>
              <ReasonText>{reason.text}</ReasonText>
            </ReasonCard>
          ))}
        </ReasonGrid>
      </WhyChooseContent>
    </WhyChooseContainer>
  )
}

