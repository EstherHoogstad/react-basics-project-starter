import { SlArrowLeft } from "react-icons/sl";

import {
  Center,
  Image,
  Button,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Tag,
  List,
  ListItem,
  Wrap,
  Container,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Center backgroundColor="green.300">
        <Container
          p={4}
          backgroundColor="green.50"
          maxW={{
            base: "container.sm",
            md: "container.md",
            lg: "container.lg",
          }}
        >
          <Button
            color="white"
            backgroundColor="green.300"
            m={3}
            onClick={() => clickFn()}
            cursor="pointer"
          >
            <SlArrowLeft />
          </Button>
          <Image
            src={recipe.image}
            alt={recipe.label}
            objectFit="cover"
            boxSize="100%"
            p={3}
            h="sm"
          />
          <SimpleGrid minChildWidth="180px" spacing="40px" p={3} boxSize="100%">
            <Box>
              <Text
                mt="3"
                color="gray.500"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                {recipe.mealType}
              </Text>
              <Heading fontSize="3xl" mt={3} size="md">
                {recipe.label}
              </Heading>
              <Text mt={3} color="gray.700">
                Total cooking time: {recipe.totalTime} minutes
              </Text>
              <Text color="gray.700">Servings: {recipe.yield}</Text>
              <Text fontWeight="medium" mt={3} color="gray.700">
                Ingredients:
              </Text>
              <List>
                {recipe.ingredientLines.map((ingredient) => (
                  <ListItem mt={2} key={ingredient}>
                    {ingredient}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text fontWeight="medium" ml={1} mt={3} color="gray.700">
                {" "}
                Health labels:{" "}
              </Text>
              {recipe.healthLabels.map((healthLabel) => (
                <Tag bg="green.200" m={1} key={healthLabel}>
                  {healthLabel}
                </Tag>
              ))}
              {recipe.dietLabels.length > 0 && (
                <Text fontWeight="medium" ml={1} mt={3} color="gray.700">
                  {" "}
                  Diet:{" "}
                </Text>
              )}
              {recipe.dietLabels.map((dietLabel) => (
                <Tag bg="blue.200" m={1} key={dietLabel}>
                  {dietLabel}
                </Tag>
              ))}
              {recipe.cautions.length > 0 && (
                <Text fontWeight="medium" ml={1} mt={3} color="gray.700">
                  {" "}
                  Cautions:{" "}
                </Text>
              )}
              {recipe.cautions.map((caution) => (
                <Tag bg="red.300" m={1} key={caution}>
                  {caution}
                </Tag>
              ))}
              <Text fontWeight="medium" mt={3} color="gray.700">
                {" "}
                Total nutrients:{" "}
              </Text>
              <Wrap>
                <Box pr={4}>
                  {Math.round(recipe.calories)}
                  <Text textTransform="uppercase">calories</Text>
                </Box>
                <Box pr={4}>
                  {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
                  <Text textTransform="uppercase">carbs</Text>
                </Box>
                <Box pr={4}>
                  {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
                  <Text textTransform="uppercase">Protein</Text>
                </Box>
                <Box pr={4}>
                  {Math.round(recipe.totalNutrients.FAT.quantity)} g
                  <Text textTransform="uppercase">Fat</Text>
                </Box>
                <Box pr={4}>
                  {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
                  <Text letterSpacing="wide" textTransform="uppercase">
                    Cholesterol
                  </Text>
                </Box>
                <Box pr={4}>
                  {Math.round(recipe.totalNutrients.NA.quantity)} mg
                  <Text letterSpacing="wide" textTransform="uppercase">
                    Sodium
                  </Text>
                </Box>
              </Wrap>
            </Box>
          </SimpleGrid>
        </Container>
      </Center>
    </>
  );
};
