import React from "react";
import { createStyles } from "@theme";
import { moderateScale } from "@utils/ScaleHelper";
import { Text } from "react-native";

const Title = ({ children, size = "md", style }) => {
  return (
    <Text style={[styles.title, { fontSize: moderateScale(Sizes[size]) }, style]}>
      {children}
    </Text>
  );
};

const Sizes = {
  sm: 14,
  md: 16,
  lg: 22,
  xl: 28,
};

const styles = createStyles((theme) => ({
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
    color: theme.semantic.text.body,
  },
}));

export default Title;
