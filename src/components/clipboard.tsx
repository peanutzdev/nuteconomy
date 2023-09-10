import { Box, Button, Flex, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaExternalLinkSquareAlt, FaTelegram, FaTwitter } from "react-icons/fa";

export interface IclipboardProps {
  projectName: string;
  projectDescription: string;
  projectLinkWeb: string;
  projectLinkTwitter: string;
  projectLinkTelegram: string;
  projectLinkdextools: string;
}

export function Clipboard(props: IclipboardProps) {
  const theme = useMantineTheme();
  const isSmall = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: "url(./clipboard.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "left",
        paddingLeft: isSmall ? 30 : 60,
        paddingRight: isSmall ? 30 : 60,
        paddingTop: "100px",
        paddingBottom: "150px",
        borderRadius: theme.radius.md,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
       
      }}
    >
      <Flex justify="center" align="center" mih={isSmall ? 80 : 120}>
        <Image src={props.projectName} />
      </Flex>
      <p style={{paddingBottom:"50px"}}>{props.projectDescription}</p>

      <Flex justify="space-between" align="center">
        <Button
          component="a"
          href={props.projectLinkWeb}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
        <Flex
          justify="space-between"
          align="center"
         
        >
          <Button
            component="a"
            href={props.projectLinkTwitter}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
          >
            <FaTwitter />{" "}
          </Button>
          <Button
            component="a"
            href={props.projectLinkTelegram}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
          >
            {" "}
            <FaTelegram />
          </Button>
          <Button
            component="a"
            href={props.projectLinkdextools}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
          >
            <FaExternalLinkSquareAlt />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
