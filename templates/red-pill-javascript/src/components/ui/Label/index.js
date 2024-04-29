import { createStyles } from "@theme";
import React from "react";
import { Text } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";

const Sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

const Label = ({ children, size = "md", style }) => {
  return (
    <Text
      style={[
        styles.label,
        { fontSize: moderateScale(Sizes[size]) },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = createStyles((theme) => ({
  label: {
    lineHeight: moderateScale(24),
    textTransform: "capitalize",
    color: theme.semantic.text.body,
  },
}));

export default Label;
