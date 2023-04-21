import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { SelectedChat } = ChatState();

  return (
    <Box
      display={{ base: SelectedChat ? "none" : "flex", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="teal.50"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="2px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
