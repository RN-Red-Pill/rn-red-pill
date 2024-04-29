import React from "react";
import { View, StyleSheet } from "react-native";

const VStack = ({ children, spacing = "md" }) => {
  let spacingValue;

  switch (spacing) {
    case "xs":
      spacingValue = 4;
      break;
    case "sm":
      spacingValue = 8;
      break;
    case "md":
      spacingValue = 16;
      break;
    case "lg":
      spacingValue = 24;
      break;
    case "xl":
      spacingValue = 32;
      break;
    default:
      spacingValue = typeof spacing === "number" ? spacing : 16;
      break;
  }

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child, index) => (
        <View
          key={index}
          style={[styles.item, index !== 0 && { marginTop: spacingValue }]}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  item: {
    alignSelf: "stretch",
  },
});

export default VStack;
