export const TextInput = (data, searchText) => {
  return data.hits
    .map((hit) => hit.recipe)
    .filter((recipe) => {
      const searchValue = `${recipe.label} ${recipe.healthLabels.join(" ")}`;
      return searchValue.toLowerCase().includes(searchText.toLowerCase());
    });
};
