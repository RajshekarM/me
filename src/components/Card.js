import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
  <Box bg="#FFFFFF" borderRadius="20px">
      <VStack > /*VStack = div element*/
        <Image src={imageSrc} borderRadius="10px"/>
        <VStack alignItems={"flex-start"} paddingStart="20px" pt="10px" pb="20px">
          <Heading color="#000000">{title}</Heading>
          <Text color="#718096">{description}</Text>
          <HStack color="#000000">
            <Text fontSize="3*l">See More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </HStack>
        </VStack>     
    </VStack>
  </Box>
  )
};
export default Card;
