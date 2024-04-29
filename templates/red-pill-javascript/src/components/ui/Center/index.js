import React from "react";
import { View, StyleSheet } from "react-native";

const Center = ({ children, style }) => {
  return <View style={[styles.center, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Center;
