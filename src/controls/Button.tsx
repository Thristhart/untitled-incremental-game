import styled from "styled-components";

export const Button = styled.button`
  font-size: 2rem;
  background: #dddddd;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.6);
  border: 0.1rem solid black;
  padding: 0.4rem;
  outline: none;
  user-select: none;

  &:active {
    transform: scale(0.9);
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5);
  }
  &:focus {
    box-shadow: 0 0 0 0.1rem #ffffff, 0 0 0.2rem 0.3rem #3a97f9;
  }
`;
