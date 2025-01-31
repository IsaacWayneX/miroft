import styled from "styled-components"

export const Button = styled.button`
  background: var(--rainbow-gradient);
  color:rgb(43, 42, 42);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--rainbow-gradient-hover);
  }
`

