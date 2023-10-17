import "./web3.css";
import EthChart from "./EthChart";
import {
  HStack,
  Text,
  Link,
  List,
  ListItem,
  Box,
  Heading,
} from "@chakra-ui/react";
export const Web3 = () => {
  return (
    <Box className="web3">
      Here is the content for web3...
      <HStack justify={"space-between"}>
        <>
          <EthChart />
        </>
        <List>
          <Heading>Projects</Heading>
          <Box>
            <Text>
              Cribz
              <Link href="https://github.com/dr-pablo/Cribz_DAO">Github</Link>
            </Text>
            <Text className="stack">
              Stack: Solidity, Typescript, Docker, Mongodb, oAuth, Truffle,
            </Text>
            <Text>
              Forward Exchange (DragonFi?)
              <Link href="https://github.com/dr-pablo/FEC">Github</Link>
            </Text>
            <Text className="stack">Stack: Solidity, Typescript</Text>

            <Text>
              Twitter Bots
              <Link href="https://github.com/dr-pablo/twat">Github</Link>
            </Text>
            <Text className="stack">Stack: Python, Flask, Redis</Text>
          </Box>
          <Heading>Certifications:</Heading>
          <Text>Applied Data Science</Text>
          <Text className="source"> Purdue University</Text>
          <Text>Innovation and Entrepreneurship</Text>
          <Text className="source"> Purdue University</Text>
          <Text>Solidity</Text>
          <Text className="source">
            <Link href="https://www.udemy.com/certificate/UC-7cc09aa7-5b02-4d25-a2f1-f0d2a237af55/">
              Udemy
            </Link>
          </Text>
          <Heading>Blog/Research</Heading>
        </List>
      </HStack>
    </Box>
  );
};
