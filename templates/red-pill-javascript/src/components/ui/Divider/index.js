import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Divider = ({ spacing = "md", text }) => {
  const spacingMap = {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
  };

  const spacingValidator = () => {
    if (typeof spacing === "string" && spacingMap[spacing]) {
      return spacingMap[spacing];
    }
    if (typeof spacing === "number") {
      return spacing;
    }
    return spacingMap.md;
  };

  const dividerSpacing = spacingValidator();
  
  return (
    <View style={styles.container}>
      <View style={[styles.line, { marginVertical: dividerSpacing / 2 }]} />
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={[styles.line, { marginVertical: dividerSpacing / 2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    // Temanıza uygun bir renk belirtmelisiniz
    backgroundColor: "black",
  },
  text: {
    marginHorizontal: 8,
    // Temanıza uygun bir renk belirtmelisiniz
    color: "black",
  },
});

export default Divider;
