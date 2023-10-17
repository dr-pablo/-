import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Interests from "./Interests";
import "./ideas.css";
export const Ideas = () => {
  const [WSB, setWSB] = useState(null);
  const [wsbLoaded, setwsbLoaded] = useState(false);
  useEffect(() => {
    async function GetWSBSentiment() {
      const wsb_url = "http://localhost:5555/api/wsb";
      const req = await axios.get(wsb_url);
      console.log(req.data);
      setWSB(JSON.parse(req.data));
      setwsbLoaded(true);
    }
    GetWSBSentiment();
  }, []);

  return (
    <Box>
      <div className="ideas">
        Here is the content for ideas...{" "}
        <div className="wsb">
          {wsbLoaded ? (
            WSB.map((item, index) => {
              return (
                <ul key={index}>
                  <li>
                    {item["ticker"]}: {item.sentiment}
                  </li>
                </ul>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <ul>
          <li>Finances -- Track, improve, manage </li>
          <li>
            Startups --- current progress, roadblocks, how to move forwards
          </li>
          <li>
            <a href="https://www.jsonapi.co/devs-on-twitter">
              {" "}
              JSON API SITE FIRE KEKW
            </a>
          </li>
        </ul>
      </div>
      <Interests />
    </Box>
  );
};
