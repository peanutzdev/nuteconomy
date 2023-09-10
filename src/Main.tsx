import { useState } from 'react';
import { Link, Element } from 'react-scroll';
import {  Drawer, Button, Container, Flex, Image } from '@mantine/core';
import { MdMenu } from 'react-icons/md';
import { useMediaQuery } from '@mantine/hooks';
import { HeroImage } from "./components/HeroImage";
import { MainText } from "./components/mainText";
import { Roadmap } from "./components/Roadmap";
import { ClipboardComponent } from "./components/ClipboardComponent";

export default function Main() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  const MenuButton = () => (
    <Button onClick={() => setIsOpen(true)}>
      <MdMenu size={30} />
    </Button>
  );

  const MenuItems = () => (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      gap="xl"
    
    >
      <Button variant="menu" radius="xl" size="xl" uppercase style={{marginTop: isMobile? 70:0}}>
        <Link to="mainText" smooth duration={500} offset={isMobile ? -70 : -90} onClick={() => setIsOpen(false)}>
          Summary
        </Link>
      </Button>
  
      <Button variant="menu" radius="xl" size="xl" uppercase>
        <Link to="Roadmap" smooth duration={500} offset={isMobile ? -70 : -90} onClick={() => setIsOpen(false)}>
          Roadmap
        </Link>
      </Button>
  
      <Button variant="menu" radius="xl" size="xl" >
        <Link to="Projects" smooth duration={500} offset={isMobile ? -70 : -90} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
      </Button>
    </Flex>
  );

  return (
    <>
      <Container fluid h={70} style={{ backgroundColor:'#000000', position: 'sticky', top: 0, zIndex: 1000 }}>
        <Flex
          justify="space-between"
          align="center"
          mih={70}
          direction="row"
        >
          <div>
            <Link to="Home" smooth duration={500} offset={-70}>
              <Image src="./NE_Logo.png" /> 
            </Link>
          </div>

          {isMobile ? (
            <>
              <MenuButton />
              <Drawer opened={isOpen} onClose={() => setIsOpen(false)}>
                <MenuItems />
              </Drawer>
            </>
          ) : (
            <MenuItems />
          )}
        </Flex>
      </Container>
      
      <Element name="Home">
        <HeroImage />
      </Element>
      <Container>
        <Element name="mainText">
          <MainText />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>
        <Element name="Roadmap">
          <Roadmap />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>
        <Element name="Projects">
          <ClipboardComponent />
          <div style={{paddingBottom:'100px'}}></div>
        </Element>
      </Container>
      <Container fluid style={{ marginTop: "20px", padding: "50px", textAlign: "center" }} >
        <div style={{ color: 'white', fontSize: 12, wordWrap: 'break-word' }}>Copyright © 2022 nutecomony. All Rights Reserved.</div>
      </Container>
    </>
  );
}