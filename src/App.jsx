import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <>
      {userRecipe ? (
        <RecipePage recipe={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <RecipeListPage selectionRecipe={setUserRecipe} />
      )}
    </>
  );
};
