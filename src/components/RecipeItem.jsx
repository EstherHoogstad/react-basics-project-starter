import {
  Box,
  AspectRatio,
  Image,
  Heading,
  Text,
  Tag,
  Wrap,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, selectionRecipe }) => {
  console.log(recipe.cautions);
  return (
    <Box
      w={300}
      h={460}
      maxW="sm"
      textAlign="center"
      backgroundColor="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={() => selectionRecipe(recipe)}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={recipe.image} alt={recipe.label} />
      </AspectRatio>

      <Box mt="4">
        <Text
          mb={3}
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="xs"
        >
          {recipe.mealType}
        </Text>
      </Box>

      <Heading p={1} mr={3} ml={3} mb={3} textAlign="center" size="md">
        {recipe.label}
      </Heading>

      <Box mt={2}>
        {recipe.healthLabels.includes("Vegetarian") && (
          <Tag m={1} bg="green.200">
            Vegetarian
          </Tag>
        )}
        {recipe.healthLabels.includes("Vegan") && (
          <Tag m={1} bg="green.200">
            Vegan
          </Tag>
        )}
      </Box>

      <Box mt="2">
        {recipe.dietLabels.map((dietLabel) => (
          <Tag bg="blue.200" m={1} key={dietLabel}>
            {dietLabel}
          </Tag>
        ))}
      </Box>

      <Text mt={2} size="sm" textTransform="capitalize">
        Dish: {recipe.dishType}
      </Text>

      <Box mb={4} mt={2}>
        {recipe.cautions.length > 0 && <Text size="sm">Cautions:</Text>}
        <Wrap mt={1} justify="center" alignItems="center">
          {recipe.cautions.map((caution) => (
            <Tag bg="red.300" key={caution}>
              {caution}
            </Tag>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};
