import book_data from "./book_data.json";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  Box,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Card,
} from "@chakra-ui/react";
import FoodRecipes from "./Food";

const Interests = () => {
  const [news, setNews] = useState(null);
  const [newsLoaded, setNewsLoaded] = useState(false);
  const authors = book_data["authors"];
  const titles = book_data["titles"];
  const pics = book_data["pics"];
  const books = authors.map((author, index) => ({
    author,
    title: titles[index],
    pic: pics[index],
  }));

  useEffect(() => {
    async function CollegeFootballNews() {
      const cfb_url =
        "http://site.api.espn.com/apis/site/v2/sports/football/college-football/news";
      const get_cfb_news = await axios.get(cfb_url);
      setNews(get_cfb_news["data"]);
      setNewsLoaded(true);
    }
    CollegeFootballNews();
  }, []);
  return (
    <Box className="interests">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Movies</Tab>
          <Tab>Sports</Tab>
          <Tab>Music</Tab>
          <Tab>Books</Tab>
          <Tab>Food</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>
              SAW, Hostel, Silent Hill, Scream, IT, SuperBad, -- build and algo
              to reccommend based on what i like and imdb shit
            </p>
          </TabPanel>
          <TabPanel>
            <div>
              Football Colts, ND, Purdue, Top25, Heisman watch, Standings NFL,
              LA Kings, Cubs, Redwoods, ND LAX, Pacers
              <div>
                College Football Headlins{" "}
                <div>
                  {newsLoaded ? (
                    news["articles"].map((item) => {
                      return <p>{item.headline}</p>;
                    })
                  ) : (
                    <div>loading..</div>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p>New Musics, Twitter Feed of Music, Music News</p>
          </TabPanel>
          <TabPanel>
            <Stack
              spacing={3}
              direction={"row"}
              wrap={"wrap"}
              justify={"space-evenly"}
            >
              {books.map((book, index) => {
                const { title, author, pic } = book;

                return (
                  <Card key={index} border={"2px solid black"} width={"10vw"}>
                    <img src={pic} alt={title} />
                    <h3>{title}</h3>
                    <p>{author}</p>
                  </Card>
                );
              })}
            </Stack>
          </TabPanel>
          <TabPanel>
            <FoodRecipes />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default Interests;
