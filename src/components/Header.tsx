import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useContextValues } from "./context/GlobalState";
// import handleRead from "./HandleRead"
// import { color } from "framer-motion";

const Header = () => {
  const textStyle = {
    color: "var(--Grayish-blue)",
    fontSize: "1.3rem",
    fontWeight: 600,
    ":hover": {
      color: "var(--Blue)",
      cursor: "pointer"
    }
  }

  let {activeNotification,handleRead, handleChange} = useContext(useContextValues) 


  return (
    <header>
      <Box>
        <Flex my={"2rem"} justify={"space-between"} alignItems={"center"}>
          <Flex justify={"space-between"} w={"25%"} alignItems={"center"}>
            <Heading>Notifications</Heading>
            <Heading id="active-notification"
              as={"h5"}
              bg={"var(--Blue)"}
              color={"var(--White)"}
              padding={"0.1em 0.5em"}
              borderRadius={"0.5rem"}
            >
              {activeNotification}
            </Heading>
          </Flex>
          <Text sx={textStyle} onClick={handleChange}
          >
            Mark all as read
          </Text>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
