import { Flex, Grid, Space, Title } from '@mantine/core';
import { Clipboard } from "./clipboard";
import {ClipboardEmpty} from "./clipboardEmpty";

export interface IClipboardComponent{}


export function ClipboardComponent(props: IClipboardComponent) {

    const projectInfoPeanutz = {
        projectName: "./peanutz_logo.png",
        projectDescription: "Peanutz offers you a unique opportunity to become a part of the Nut Economy's decision-making process. Picture yourself not just as an investor but as an active contributor. Cashew holders already enjoy rewards like shareholders, receiving dividends from every facet of the Nut Economy. With Peanutz, you're not only rewarded, but you also get the power to vote. Join us in shaping the future of DeFi, where participation is valued, and innovation thrives.",
        projectLinkWeb: "http://www.peanutz.io",
        projectLinkTelegram: "https://t.me/+3D65r2i-jPxmMGVk",
        projectLinkTwitter: "twitter.com/peanutzofficial",
        projectLinkdextools: "www.dex"
      };

      const projectInfoCashew = {
        projectName: "./cashew_logo.png",
        projectDescription: "Cashew isn't just another token, it's your financial instrument into the Nut Economy. By holding Cashew, you're not just a spectator but an active participant in shaping the future. You'll be rewarded with a stake in upcoming projects through airdrops. Join us as we blend innovation with ownership and pave the way for a new era of DeFi possibilities.",
        projectLinkWeb: "CashewCoin.io",
        projectLinkTelegram: "https://t.me/+3D65r2i-jPxmMGVk",
        projectLinkTwitter: "twitter.com/CashewCoin",
        projectLinkdextools: "www.dex"
      };


  return (
    <div>
            <Flex
     gap="md"
     justify="center"
     align="center"
     direction="row"
    >
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
        <Title order={3} style={{ color:"#F4D35E" }}>Projects</Title>
        <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
    </Flex>
    <Space h="xl" />
          <Grid>
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoCashew} /></Grid.Col>
          <Grid.Col xs={12} sm={6}> <Clipboard {...projectInfoPeanutz} /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
          <Grid.Col xs={12} sm={6}><ClipboardEmpty /></Grid.Col>
        </Grid>
    </div>
  );
}
