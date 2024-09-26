import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  background-color: var(--color-indigo-700);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello world</H1>;<Button>check in</Button>
      <Button>check out</Button>
      <Input type="text" placeholder="number of guests" />
    </>
  );
}

export default App;
