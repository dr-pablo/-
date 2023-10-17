import "./home.css";
import TwitDrawer from "./TwitterProfileDrawer";
import {
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Header } from "./Header";
import me from "../../assets/me.png";
import rez from "../../assets/res.jpg";
import Journey from "./Journey";
import Projects from "./Projects";
const ImageBlock = () => (
  <div className="image-block">
    <img src={me} alt="Description" />
  </div>
);

const TextBlock = () => (
  <div className="text-block">
    <p className="welcome-text">
      Independent investment studio focused on pre-seed and seed investments in
      web3 ecosystems.
    </p>
  </div>
);

const RezAccordian = () => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Resume
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Link onClick={() => window.open(rez)}>Resume Viewer</Link>
        <Heading>Objective:</Heading>
        <Text>
          Connect with ambitious, innovation driven people to build and design
          open-source, permissionless, decentralized software.
        </Text>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Projects
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Projects />
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Journey
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Journey />

        {/* <Text>
          South Bend Lacrosse, Football Good at all been a captain and leader,
          Go to Purdue, Study Econ, Join Kappa Sigma, Join Anvil, Startup Career
          Fair, Networking, Went on to meet a few founders and an opportunity
          presented itself from one --- moved to chicago to do data analytics --
          finished my degree in econ data consulting entr --- interest piqued in
          crypto check it out while consulting company is acquired I begin
          independent consulting and building projects get cert in solidity work
          on proj, learn, grow, dev, Decentralize DC.
        </Text> */}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export const HomePage = () => {
  return (
    <VStack align={"center"} justify={"space-between"}>
      <Header />
      <TwitDrawer />
      <HStack justify={"space-between"} marginTop={15}>
        <ImageBlock />
        <VStack>
          <TextBlock />
          <br />
          <p style={{ fontSize: "12pt" }}>
            Learn, Grow, Dev. Unlocking Potential, Unleashing Innovation.
          </p>
          <p style={{ fontSize: "10pt" }}> - Dr. Pablo</p>
        </VStack>
      </HStack>
      <Box className="accordian">
        <RezAccordian />
      </Box>
    </VStack>
  );
};
