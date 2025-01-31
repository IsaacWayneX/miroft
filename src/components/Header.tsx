import type React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: ${({ isScrolled }) => (isScrolled ? "rgba(68, 67, 67, 0.69)" : "transparent")};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(10px)" : "none")};
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    color: var(--accent-color);
  }
`

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo>Miroft</Logo>
      <NavLinks>
        <NavLink to="hero" smooth={true} duration={500}>
          Home
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  )
}

