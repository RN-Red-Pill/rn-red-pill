import React from "react";
import { Text } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";
import { createStyles } from "@theme";

const Sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

const CustomText = ({ children, size = "md", style }) => {
  return (
    <Text style={[styles.text, { fontSize: moderateScale(Sizes[size]) }, style]}>
      {children}
    </Text>
  );
};

const styles = createStyles((theme) => ({
  text: {
    lineHeight: 24,
    color: theme.semantic.text.body,
  },
}));

export default CustomText;
