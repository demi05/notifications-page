import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useContextValues } from "./context/GlobalState";
import { wrap } from "module";

const Content = () => {
  let {notificationObj, handleRead} = useContext(useContextValues)

    const nameStyle = {
        color: "var(--Very-dark-blue)",
        fontWeight: "700",
        ":hover": {
          color: "var(--Blue)",
        }
      }
    const textStyle = {
        color: "var(--Grayish-blue)",
        fontWeight: "500",
        ":hover": {
          color: "var(--Blue)",
        }
      }

    const postStyle = {
        color: "var(--Dark-grayish-blue)",
        fontWeight: "700",
        ":hover": {
          color: "var(--Blue)",
        }
      }
    const messageStyle = {
        border: "1px solid var(--Grayish-blue)",
        color: "var(--Dark-grayish-blue)",
        padding: "0.5em",
        borderRadius: "0.2rem",
        ":hover": {
            bgColor: "var(--Light-grayish-blue-1)",
            border: "none",
        }
    }



  return (
    <Box minHeight={"70vh"}>
      {notificationObj.map((notification, index) => (
        <Flex className={`notification-${index} notification`} key={index} mb={"1em"} padding={"0.8em"} gap={"2em"} bgColor={"var(--Light-grayish-blue-1)"} borderRadius={"0.5rem"} cursor={"pointer"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}  onClick={() => handleRead(index)}>
            <Avatar src={notification.img}/>
          <Box>
            <Flex gap={"0.3em"} mb={"0.15em"} alignItems={"center"} flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}>
              <Text sx={nameStyle}>{notification.name} </Text>
              <Text sx={textStyle}>{notification.text} </Text>
              <Text sx={postStyle}>{notification.post}</Text>
              <Text className={`read-${index} read`} bgColor={"var(--Red)"} color={"var(--Red)"} borderRadius={"50%"} height={"3px"} padding={"0.3em"} textAlign={"center"}></Text>
            </Flex>
            <Text mb={"0.15em"} fontWeight={500}>{notification.time}</Text>
            {notification.message && <Box sx={messageStyle}>{notification.message}</Box>}
          </Box>
          {notification.imgOpt && <Avatar ml={"auto"} src={notification.imgOpt} />}
        </Flex>
      ))}
    </Box>
  );
};

export default Content;
