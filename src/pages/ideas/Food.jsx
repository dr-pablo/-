import {
  Box,
  Card,
  Flex,
  LinkOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import "./ideas.css";
const options = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
  params: {
    query: "pasta",
    cuisine: "italian",
    excludeCuisine: "greek",
    diet: "vegetarian",
    intolerances: "gluten",
    equipment: "pan",
    includeIngredients: "tomato,cheese",
    excludeIngredients: "eggs",
    type: "main course",
    instructionsRequired: "true",
    fillIngredients: "false",
    addRecipeInformation: "false",
    titleMatch: "Crock Pot",
    maxReadyTime: "20",
    ignorePantry: "true",
    sort: "calories",
    sortDirection: "asc",
    minCarbs: "10",
    maxCarbs: "100",
    minProtein: "10",
    maxProtein: "100",
    minCalories: "50",
    maxCalories: "800",
    minFat: "10",
    maxFat: "100",
    minAlcohol: "0",
    maxAlcohol: "100",
    minCaffeine: "0",
    maxCaffeine: "100",
    minCopper: "0",
    maxCopper: "100",
    minCalcium: "0",
    maxCalcium: "100",
    minCholine: "0",
    maxCholine: "100",
    minCholesterol: "0",
    maxCholesterol: "100",
    minFluoride: "0",
    maxFluoride: "100",
    minSaturatedFat: "0",
    maxSaturatedFat: "100",
    minVitaminA: "0",
    maxVitaminA: "100",
    minVitaminC: "0",
    maxVitaminC: "100",
    minVitaminD: "0",
    maxVitaminD: "100",
    minVitaminE: "0",
    maxVitaminE: "100",
    minVitaminK: "0",
    maxVitaminK: "100",
    minVitaminB1: "0",
    maxVitaminB1: "100",
    minVitaminB2: "0",
    maxVitaminB2: "100",
    minVitaminB5: "0",
    maxVitaminB5: "100",
    minVitaminB3: "0",
    maxVitaminB3: "100",
    minVitaminB6: "0",
    maxVitaminB6: "100",
    minVitaminB12: "0",
    maxVitaminB12: "100",
    minFiber: "0",
    maxFiber: "100",
    minFolate: "0",
    maxFolate: "100",
    minFolicAcid: "0",
    maxFolicAcid: "100",
    minIodine: "0",
    maxIodine: "100",
    minIron: "0",
    maxIron: "100",
    minMagnesium: "0",
    maxMagnesium: "100",
    minManganese: "0",
    maxManganese: "100",
    minPhosphorus: "0",
    maxPhosphorus: "100",
    minPotassium: "0",
    maxPotassium: "100",
    minSelenium: "0",
    maxSelenium: "100",
    minSodium: "0",
    maxSodium: "100",
    minSugar: "0",
    maxSugar: "100",
    minZinc: "0",
    maxZinc: "100",
    offset: "0",
    number: "10",
    limitLicense: "false",
    ranking: "2",
  },
  headers: {
    "X-RapidAPI-Key": "50958ecb86mshad0698d7a709bcbp141a78jsne05de844ef43",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

function FoodRecipes() {
  const [recipes, setRecipes] = React.useState();
  const [recipeReady, setReady] = React.useState(false);
  const [recipeInfo, setRecipeInfo] = React.useState();
  const [recipeInfoReady, setInfoReady] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    async function FoodReq() {
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
        params: {
          query: "pasta",
          cuisine: "italian",
          excludeCuisine: "greek",
          diet: "vegetarian",
          intolerances: "gluten",
          equipment: "pan",
          offset: "0",
          number: "10",
          limitLicense: "false",
          ranking: "2",
        },
        headers: {
          "X-RapidAPI-Key":
            "50958ecb86mshad0698d7a709bcbp141a78jsne05de844ef43",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setRecipes(response.data.results);
        setReady(true);
      } catch (error) {
        console.error(error);
      }
    }
    FoodReq();
  });

  async function getRecipeInformation(id) {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      headers: {
        "X-RapidAPI-Key": "50958ecb86mshad0698d7a709bcbp141a78jsne05de844ef43",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setRecipeInfo(response.data.results);
      setInfoReady(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box>
      {recipeReady ? (
        recipes.map((recipe, index) => {
          return (
            <LinkOverlay
              onClick={() => {
                getRecipeInformation(recipe.id);
                openModal();
              }}
              target="__blank"
            >
              <Flex direction={"row"} flexWrap="wrap">
                <Card className="recipeCard" key={index}>
                  {recipe.title}
                </Card>
              </Flex>
            </LinkOverlay>
          );
        })
      ) : (
        <Box>Loading....</Box>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            {recipeInfoReady ? (
              <Box>
                <h2>{recipeInfo.title}</h2>
                {/* Display other recipe information as needed */}
              </Box>
            ) : (
              <Box>Loading recipe information...</Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default FoodRecipes;
