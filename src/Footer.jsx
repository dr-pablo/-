import "./App.css";
import { Tooltip, Box } from "@chakra-ui/react";
import { SiTwitter, SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

export const Footer = () => {
  return (
    <Box className="footer">
      <Tooltip label="LInkedIn Profile" closeDelay={200} placement="left">
        <span>
          <SiLinkedin
            size={40}
            onClick={() =>
              window.open("https://www.linkedin.com/in/paul-murphy-24380314a/")
            }
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip label="@0xTraderMans" closeDelay={200} placement="left">
        <span>
          <SiTwitter
            size={40}
            onClick={() => window.open("https://twitter.com/0xTraderMans")}
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip label="github@dr-pablo" closeDelay={200} placement="left">
        <span>
          <SiGithub
            size={40}
            onClick={() => window.open("https://github.com/dr-pablo")}
          />
        </span>
      </Tooltip>
      <br />
      <Tooltip
        label="dusty bender alpha discord invite"
        closeDelay={200}
        placement="left"
      >
        <span>
          <SiDiscord
            size={40}
            onClick={() => window.open("https://discord.gg/WbH9ZJrYg3")}
          />
        </span>
      </Tooltip>
    </Box>
  );
};
