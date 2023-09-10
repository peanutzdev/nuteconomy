import { Flex, Grid, Image, Space, Title } from '@mantine/core';

export interface IMainRoadMapProps { }


export function Roadmap(props: IMainRoadMapProps) {
    return (
        <div>
            <Flex
                gap="md"
                justify="center"
                align="center"
                direction="row"
            >
                <div style={{ width: 449, height: 0, border: '0.50px #F4D35E solid' }}></div>
                <Title order={3} style={{ color: "#F4D35E" }}>Roadmap</Title>
                <div style={{ width: 449, height: 0, border: '0.50px #F4D35E solid' }}></div>
            </Flex>
            <Space h="xl" />
            <Grid
                justify="center"
                align="flex-end"
                gutter="xl"
            >
                <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_1.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q2 - 2023</div>
                        <Flex
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Inception of the idea</div>
                            <div>Core Team Established</div>
                            <div>Nut Economy Established</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_2.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q3 - 2023</div>
                        <Flex
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Brand development </div>
                            <div>Establishing a community</div>
                            <div>Cashew Launch</div>
                            <div>Marketing</div>
                            <div>Listing on Uniswap</div>
                            <div>DAO and governance system in development</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_3.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q4 - 2023</div>
                        <Flex
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>DAO and governance set in place</div>
                            <div>Projects announced</div>
                            <div>Collaboration with other players in the industry</div>
                            <div>Ecosystem Audit</div>
                        </Flex>
                    </Flex></Grid.Col>
                    <Grid.Col xs={6} sm={3}>
                    <Flex
                        justify="flex-end"
                        align="flex-start"
                        direction="column"
                    >
                        <Image width={160} src="NE_Roadmap_4.png" alt="Roadmap image" />
                        <div style={{ color: '#F4D35E', fontSize: 40, fontFamily: 'ADLaM Display', wordWrap: 'break-word' }}>Q1 - 2024</div>
                        <Flex
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            gap="xl"
                        style={{ color: 'white', fontSize: 18, wordWrap: 'break-word' }}>
                            <div>Team Expansion</div>
                            <div>Adding more DeFi features</div>
                            <div>Adding structure into Peanutz DAO with pools focused on specific niches in the blockchain space</div>
                            <div>Tier One exchange listings</div>
                            <div>And a lot more...</div>
                        </Flex>
                    </Flex></Grid.Col>
            </Grid>
        </div>
    );
}
