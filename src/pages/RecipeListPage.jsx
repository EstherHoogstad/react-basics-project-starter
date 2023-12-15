import { useState } from "react";
import { Center, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchBar } from "../components/ui/SearchBar";
import { RecipeItem } from "../components/RecipeItem";
import { TextInput } from "../components/TextInput";

export const RecipeListPage = ({ selectionRecipe }) => {
  const [searchText, setTextTerm] = useState("");
  const recipes = TextInput(data, searchText);

  const handleSearchChange = (event) => {
    setTextTerm(event.target.value);
  };

  return (
    <>
      <Center
        backgroundColor="green.100"
        flexDirection="column"
        p={10}
        pt={3}
        gap={3}
      >
        <Heading color="green.900" textAlign="center" m={5}>
          Winc Recipe Checker
        </Heading>
        <SearchBar value={searchText} onChange={handleSearchChange} />
        <Flex
          gap={4}
          flexWrap="wrap"
          flexDir={["column", "row"]}
          justify="center"
        >
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.label}
              recipe={recipe}
              selectionRecipe={selectionRecipe}
            />
          ))}
        </Flex>
      </Center>
    </>
  );
};
