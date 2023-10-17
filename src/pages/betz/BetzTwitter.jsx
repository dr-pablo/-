import { HStack } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import "./betz.css";
const BetzTwitter = () => {
  return (
    <div className="betzTwitter">
      <HStack justify={"space-evenly"}>
        <Timeline
          dataSource={{
            sourceType: "list",
            id: "1711257097386508363",
            ownerScreenName: "0xTraderMans",
          }}
          options={{ theme: "dark", width: "400", height: "600" }}
        />
      </HStack>
    </div>
  );
};

export default BetzTwitter;
