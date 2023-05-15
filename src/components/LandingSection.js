import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello there, I'm Rajashekar";
const bio1 = "a Software engineer";
const bio2 = "with a keen interest in Software development, Computer vision and deep learning"
 const bio3 = ""
 
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size= "2xl" src="/images/profile.jpg"></Avatar>
    <Text>{greeting}</Text>
    <VStack>
      <Heading>{bio1}</Heading>
     
      <Text><FontAwesomeIcon icon="fa-solid fa-robot" />{bio2}</Text>
      <Text>{bio3}</Text> 
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
