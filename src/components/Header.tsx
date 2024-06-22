import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useContextValues } from "./context/GlobalState";

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

  let {activeNotification, handleChange} = useContext(useContextValues) 


  return (
    <header>
      <Box>
        <Flex my={"2rem"} justify={"space-between"} alignItems={"center"}>
          <Flex justifyContent={"space-between"} w={["30%", "30%", "25%", "25%"]} alignItems={"center"}>
            <Heading fontSize={["1.35rem", "1.5rem", "2rem", "2rem"]}>Notifications</Heading>
            <Heading id="active-notification"
              as={"h5"}
              bg={"var(--Blue)"}
              color={"var(--White)"}
              padding={"0.1em 0.5em"}
              borderRadius={"0.5rem"}
              textAlign={"center"}
              w={["40%", "30%", "40%", "40%"]}
            >
              {activeNotification}
            </Heading>
          </Flex>
          <Text sx={textStyle} onClick={handleChange} fontSize={["1.35rem", "1.5rem", "2rem", "2rem"]}
          >
            Mark all as read
          </Text>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
