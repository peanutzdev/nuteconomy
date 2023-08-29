  import { Container, Flex, Grid, Title, Image, Text } from "@mantine/core";
  import { HeroImage } from "./components/HeroImage";
  import { Clipboard } from "./components/clipboard";
  import {ClipboardEmpty} from "./components/clipboardEmpty";

  export default function Main() {

    const projectInfoPeanutz = {
      projectName: "./peanutz_logo.png", 
      projectDescription: "Peanutz offers you a unique opportunity to become a part of the Nut Economy's decision-making process. Picture yourself not just as an investor but as an active contributor. Cashew holders already enjoy rewards like shareholders, receiving dividends from every facet of the Nut Economy. With Peanutz, you're not only rewarded, but you also get the power to vote. Join us in shaping the future of DeFi, where participation is valued, and innovation thrives.",
      projectLinkWeb: "https://peanutz.io",
      projectLinkTelegram: "https://t.me/+3D65r2i-jPxmMGVk",
      projectLinkTwitter: "http://twitter.com/officialpeanutz",
      projectLinkdextools: "https://www.dextools.io/app/en/pairs"
    };

    const projectInfoCashew = {
      projectName: "./cashew_logo.png", 
      projectDescription: "Cashew  isn't just another token, it's your financial instrument into the Nut Economy. By holding Cashew, you're not just a spectator but an active participant in shaping the future. You'll be rewarded with a stake in upcoming projects through airdrops. Join us as we blend innovation with ownership and pave the way for a new era of DeFi possibilities.",
      projectLinkWeb: "https://cashewcoin.io",
      projectLinkTelegram: "https://t.me/+3D65r2i-jPxmMGVk",
      projectLinkTwitter: "https://twitter.com/cashewCoin",
      projectLinkdextools: "https://www.dextools.io/app/en/pairs"
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
