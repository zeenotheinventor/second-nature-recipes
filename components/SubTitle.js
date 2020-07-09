import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SubTitle = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00263E",
    marginBottom: 10,
  },
});

export default SubTitle;
