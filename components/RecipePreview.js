import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

const RecipePreview = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  thumbnail: { flex: 2, height: 100 },
  textContainer: { flex: 4, height: 100, justifyContent: "center" },
  text: { fontSize: 25, color: "#00263E", paddingLeft: 15 },
});

RecipePreview.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default RecipePreview;
