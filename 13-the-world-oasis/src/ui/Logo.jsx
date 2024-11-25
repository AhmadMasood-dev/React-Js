import styled from "styled-components";
import { useDarkMode } from "../Context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode
    ? "/assets/images/logo-dark.png"
    : "/assets/images/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
