import { Flex, Grid, Space, Title } from '@mantine/core';

export interface IMainTextProps {}


export function MainText(props: IMainTextProps) {
  return (
    <div>
        <Flex
         gap="md"
         justify="center"
         align="center"
         direction="row"
        >
            <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
            <Title order={3} style={{ color:"#F4D35E" }}>Summary</Title>
            <div style={{width: 449, height: 0, border: '0.50px #F4D35E solid'}}></div>
        </Flex>
        <Space h="xl" />
        <Grid>
          <Grid.Col xs={6} span={12}><div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word'}}>Nut Economy: Reimaging DeFi.</div></Grid.Col>
          <Grid.Col xs={6} span={12}>
            <div style={{ paddingTop:"15px", color: 'white', fontSize: 16, wordWrap: 'break-word'}}>
              The Nut Economy is your gateway to a world of innovation and investment. Our ecosystem, powered by Cashew and Peanutz, is all about reshaping the future of finance. Join us on this exciting journey where creativity, growth, and financial empowerment converge.. <br/><br/>With Cashew, you become a shareholder in the Nut Economy, receiving airdrops from all future projects. And with Peanutz, you're not just a token holder; you're a board member, actively influencing day-to-day decisions.<br/><br/>Stay tuned as we unveil upcoming projects that redefine the crypto landscape. Your role as a participant and influencer in the Nut Economy begins here.
            </div>
          </Grid.Col>
        </Grid>

    </div>
  );
}
