import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --rainbow-gradient: linear-gradient(
      to right,
      #ff0000,
      #ff8000,
      #ffff00,
      #00ff00,
      #0000ff,
      #4b0082,
      #8f00ff
    );
    --rainbow-gradient-hover: linear-gradient(
      to right,
rgb(245, 92, 92),
rgb(255, 175, 95),
rgb(250, 250, 90),
rgb(111, 255, 111),
rgb(106, 106, 255),
rgb(178, 101, 255),
rgb(196, 145, 247)
    );
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`

