import type React from "react"
import styled from "styled-components"
import { FaGlobe, FaMobile, FaPaintBrush, FaShoppingCart, FaTools } from "react-icons/fa"

const ServicesContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #0f0f0f;
`

const ServicesContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 700;
`

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ServiceCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.6;
`

const services = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
    description: "We build high-performance, mobile-responsive websites that engage, convert, and grow your audience.",
  },
  {
    icon: <FaMobile />,
    title: "Mobile App Development",
    description:
      "We craft feature-rich, intuitive iOS and Android apps that keep users engaged and deliver top-notch functionality.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "We create visually stunning and user-friendly designs that enhance engagement and provide a seamless experience across devices.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Solutions",
    description:
      "From Shopify to WooCommerce and custom e-commerce platforms, we help businesses set up, optimize, and scale their online stores.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description:
      "We ensure your website and app run smoothly with regular updates, security checks, and performance optimizations.",
  },
]

export const Services: React.FC = () => {
  return (
    <ServicesContainer id="services">
      <ServicesContent>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesContent>
    </ServicesContainer>
  )
}

