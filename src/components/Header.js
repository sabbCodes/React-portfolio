import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sarafaabbas@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/sabbCodes?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abbas-sarafa-a76500244/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/OlanrewajuAb",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos.current > currentScrollPos || currentScrollPos === 0);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleClick = (anchor) => () => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `/#${anchor}`);
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={7}>
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
            </HStack>
          </nav>
          <nav style={{ scrollBehavior: "smooth" }}>
            <HStack spacing={8}>
              {
                <>
                  <a href="/#projects-section" onClick={handleClick("projects")}>Projects</a>
                  <a href="/#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
                </>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
