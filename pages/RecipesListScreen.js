/**Lists all recipes in preview widget format */
import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TouchableHighlight } from "react-native";
import RecipePreview from "../components/RecipePreview";

const RecipesListScreen = ({ recipes, navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView bounces>
        <View style={styles.container}>
          <View>
            <View>
              {recipes.map((recipe, i) => (
                <TouchableHighlight
                  key={i}
                  onPress={() => navigation.navigate("RecipeDetail", { ...recipes[i] })}
                >
                  <RecipePreview {...recipe} />
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RecipesListScreen;
