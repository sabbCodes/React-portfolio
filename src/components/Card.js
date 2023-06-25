import { Heading, HStack, Image, Text, VStack, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack
        bg="gray.200"
        borderRadius="md"
        boxShadow="md"
        spacing={4}
      >
        <Image src={imageSrc} width="100%" objectFit="contain" borderRadius="md" />
        <VStack
          alignItems="flex-start"
          p={4}
        >
          <Heading as="h3" size="md" fontWeight="bold" color="black">
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
          <HStack>
            <Text color="gray.900">Learn More</Text>
            {/* <FontAwesomeIcon icon={faArrowRight} size="10px" color="gray.900" /> */}
            <Icon as={FontAwesomeIcon} icon={faArrowRight} color="gray.900" size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </>    
  );
};

export default Card;
