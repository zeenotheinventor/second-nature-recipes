import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import SubTitle from "../components/SubTitle";

const Ingredients = ({ ingredients }) => {
  return (
    <View style={styles.widget}>
      <SubTitle>Ingredients</SubTitle>
      {ingredients.map(({ ingredient, amount }, i) => (
        <Text key={"ingredient-" + i}>
          {amount}, {ingredient}
        </Text>
      ))}
    </View>
  );
};

const Steps = ({ steps }) => {
  return (
    <View style={styles.widget}>
      <SubTitle>Steps</SubTitle>
      {steps.map((step, i) => (
        <Text key={"step-" + i}>
          <Text style={styles.emphasis}>{i + 1}.</Text> {step}
        </Text>
      ))}
    </View>
  );
};

const RecipeDetailScreen = ({ route }) => {
  const { imageUrl, cookingTime, servings, ingredients, method } = route.params;

  return (
    <SafeAreaView>
      <ScrollView bounces>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.thumbnail} />
          <View style={styles.widget}>
            <Text>
              Preparation time: <Text style={styles.emphasis}>{cookingTime} minutes</Text>
            </Text>
            <Text>
              Servings: <Text style={styles.emphasis}>{servings} servings</Text>
            </Text>
          </View>

          <Ingredients ingredients={ingredients} />
          <Steps steps={method} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thumbnail: { flex: 6, height: 350 },
  emphasis: { fontWeight: "bold" },
  widget: { padding: 10 },
});

export default RecipeDetailScreen;
