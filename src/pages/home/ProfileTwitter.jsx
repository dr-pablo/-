import { HStack } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import "./home.css";

const ProfileTwitter = () => {
  return (
    <div className="profileTwitter">
      <HStack justify={"space-evenly"}>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "0xTraderMans" }}
          options={{ theme: "dark", width: "400", height: "600" }}
        />
      </HStack>
    </div>
  );
};

export default ProfileTwitter;
