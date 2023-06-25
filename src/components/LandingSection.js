import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sabb!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <img 
        src={require("../images/twitter dp.jpg")} 
        alt="My image placeholder"
        style={{
          borderRadius: "50%",
          width: "200px"
        }}
      />
      <h3 style={{
        fontSize: "20px",
        fontWeight: "400"
      }}
      >{greeting}</h3>
      <h1 style={{
        fontSize: "30px",
        fontWeight: "700"
      }}>
        {bio1}
      </h1>
      <h2 style={{
        fontSize: "30px",
        fontWeight: "700"
      }}>
        {bio2}
      </h2>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
