import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h1">Hello world</Heading>
      <Button>check in</Button>
      <Button>check out</Button>
      <Heading as="h3">Hello world</Heading>
      <Input type="text" placeholder="number of guests" />
    </>
  );
}

export default App;
