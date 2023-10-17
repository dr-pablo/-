import "./betz.css";
import { VStack, Box, List, ListItem } from "@chakra-ui/react";
import BetzTwitter from "./BetzTwitter";
export const Betz = () => (
  <VStack>
    <h2>Betting Twitter</h2>
    <BetzTwitter />
    <Box className="betz">
      <List>
        <ListItem> Get better insights to pipe here</ListItem>
        <ListItem> Embedded twitter list</ListItem>
        <ListItem> Tracker on favs (qb yards, rb yards, tds, etc.)</ListItem>
      </List>
    </Box>
  </VStack>
);
