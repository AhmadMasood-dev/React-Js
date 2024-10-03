import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 5rem;
      font-weight: 900;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      background-color: var(--color-indigo-500);
    `}
`;

export default Heading;
