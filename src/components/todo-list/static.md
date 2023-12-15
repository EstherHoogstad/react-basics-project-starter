//STARTPAGINA
RecipeListPage = () => {
  // Wat moet erin voor komen:
  // Recipe name
  // A picture of the recipe/meal
  // Diet label (if present)
  // Cautions (if present)
  // Meal type
  // Dish type
  // Each item shows the following health labels (if present): Vegan/Vegetarian
};

// bevat zoekbalk
SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
    </form>
  );
};

// lijst met alle recepten
RecipeList = ({ recipe }) => {};

// beknopte beschrijving van de recepten -> is dit wel nodig? Hetzelfde staat op RecipeList?
RecipeItem = ({ recipe }) => {
  return (
    <Center cursor={"pointer"} m={2}>
      <Image src={recipe.image} marginEnd={4} w={50} h={50} alt={recipe.alt} />
      <Text fontWeight={"450"}> {recipe.name}</Text>
      //punten die erin voor moeten komen: // Recipe name // A picture of the
      recipe/meal // Meal type // Dish type // Total cooking time // Diet label
      // All health labels // Cautions // Ingredients // Servings // Total
      nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)
    </Center>
  );
};

//2e PAGINA
RecipePage = () => {};
