// import Content from "./components/Content";
import Header from "./components/Header";
import { ChakraProvider, Container } from '@chakra-ui/react'
import NotificationsData from "./components/NotificationsData";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
      <GlobalProvider>
    <ChakraProvider>
    <Container className="App" maxW={"6xl"}>
      <Header />
      <NotificationsData />
    </Container>
    </ChakraProvider>
    </GlobalProvider>
  );
}

export default App;
