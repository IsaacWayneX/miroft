import styled from "styled-components"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AboutUs } from "./components/AboutUs"
import { WhyChooseMiroft } from "./components/WhyChooseMiroft"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { GlobalStyle } from "./styles/GlobalStyle"

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #ffffff;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseMiroft />
      <Services />
      <Projects />
      <Footer />
    </AppContainer>
  )
}

export default App

