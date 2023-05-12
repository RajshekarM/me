import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Rajashekar!";
const bio1 = "A Software engineer";
const bio2 = "with passion for full stack development";
const bio3 = " Thanks for visiting! Explore my site to learn more about me, my background and what I have to offer.";
const bio4 = "If you have questions or would like to discuss an opportunity to work together, feel free to get in touch.";
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
      <Text><i>{bio3 }</i></Text>
      <Text><i>{bio4}</i></Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
