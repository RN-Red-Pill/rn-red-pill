import { createStyles } from "@theme";
import React from "react";
import { View, Text } from "react-native";

const Paper = ({ title, children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.semantic.bg.body,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginVertical: 10,
    borderWidth: 0.4,
    borderColor: theme.semantic.border.container,
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: theme.fontSizes.md,
  },
}));

export default Paper;
