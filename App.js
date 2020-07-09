import React, { useEffect, useState } from "react";
import RecipesListScreen from "./pages/RecipesListScreen";
import RecipeDetailScreen from "./pages/RecipeDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadRecipes } from "./services/recipes-wsao";

const Stack = createStackNavigator();

function App() {
  // Initialize state
  const [recipes, setRecipes] = useState([]);

  // Load recipes from API
  useEffect(() => {
    loadRecipes()
      .then((recipes) => setRecipes(recipes))
      .catch(() => console.log("Error occurred while loading recipes"));
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Page */}
        <Stack.Screen name="RecipesList" options={{ title: "Second Nature Recipes" }}>
          {(props) => <RecipesListScreen {...props} recipes={recipes} />}
        </Stack.Screen>

        {/* Recipe Detail Page */}
        <Stack.Screen
          name="RecipeDetail"
          options={({ route }) => ({ title: route.params.title })}
          component={RecipeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
