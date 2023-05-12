import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Rajashekar!";
const bio1 = "A Software engineer";
const bio2 = "with a passion for full stack development";
const bio3 = " This is my first fully functional full stack application I developed from scratch";
const bio4 = "I used React for the ui and aspnet core as my backend server.";
const bio5 = "It has a Continue Integration(CI) with azure devops and Continuous Deployment(CD) with Azure Cloud";

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
      <Heading>{bio2}</Heading>
      <Text>{bio3 }</Text>
      <Text>{bio4}</Text>
      <Text>{bio5}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
