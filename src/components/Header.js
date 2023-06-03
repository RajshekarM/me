import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [

  {
    icon: faEnvelope,
    url: "mailto: rashekarmudigonda@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/RajshekarM/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rajshekarmudigonda/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@rajshekarmg97",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {

  const [previousPos, setPreviousPos] = useState(0);
  const headerRef = useRef();
  useEffect(()=>{
      const handleScroll = (e)=>{
              const curPosition = window.scrollY;
             // console.log(`current scoll Postion : ${curPosition}`);
              curPosition >= previousPos  ? headerRef.current.style.transform = 'translateY(0)':headerRef.current.style.transform = 'translateY(-200px)';
              setPreviousPos(curPosition);
        }
     window.addEventListener('scroll', handleScroll);
     return ()=>window.removeEventListener('scroll', handleScroll);
  },[previousPos]);


  const handleClick = (anchor) =>() =>{
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      zIndex={100}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
              {socials.map((social) => 
              <a href={social.url}>
                <FontAwesomeIcon icon = {social.icon} size="2x"/>
              </a>)}
            </HStack> 
          </nav>
          <nav>
            <HStack spacing={8}>
             <Link href="#about-me" onClick={handleClick('landing')} size="2x">About me</Link>
             <Link href="#contact-me" onClick={handleClick('contactme')}  size="2x">Contact me</Link>
             <Link href="#projects"   onClick={handleClick('projects')} size="2x">Projects</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
