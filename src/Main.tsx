  import { Container, Flex, Grid, Title, Image, Text } from "@mantine/core";
  import { HeroImage } from "./components/HeroImage";
  import { Clipboard } from "./components/clipboard";
  import {ClipboardEmpty} from "./components/clipboardEmpty";

  export default function Main() {

    const projectInfoPeanutz = {
      projectName: "./peanutz_logo.png", 
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the ", 
      projectLinkWeb: "http://www.cashew.io", 
      projectLinkTelegram: "www.telegram/cashue", 
      projectLinkTwitter: "twitter.com/cashue", 
      projectLinkdextools: "www.dex"
    };

    const projectInfoCashew = {
      projectName: "./cashew_logo.png", 
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing  Lorem Ipsum is simply dummy text of the ", 
      projectLinkWeb: "cashue.io", 
      projectLinkTelegram: "www.telegram/cashue", 
      projectLinkTwitter: "twitter.com/cashue", 
      projectLinkdextools: "www.dex"
    };


    return (
      <>
        <Container fluid h={30}></Container>
        <HeroImage />
        <Container>
        <Title order={2} style={{ fontFamily: "'Londrina Solid', cursive", color:"#FAF0CA" }}>Projects</Title>
        <Grid>
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoPeanutz} /></Grid.Col>
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoCashew} /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>

        </Grid>
        </Container>
        <Container fluid style={{ marginTop:"20px",  padding:"50px" , backgroundColor:"#0D3B66" }} >
          <Flex direction="column" justify="center" align="center">
          <Image src="./NutE_Logo.png" alt="NutE Logo" width="190px" height="100%" />
  
          <Text>Copyright © 2023 nuteconomy. All Rights Reserved.</Text>
          </Flex>
        </Container>
      </>
    );
  }
