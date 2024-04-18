import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";

enum Sizes {
  xs = 12,
  sm = 14,
  md = 16,
  lg = 18,
  xl = 20,
}

interface LabelProps {
  children: React.ReactNode;
  size?: keyof typeof Sizes;
  style?: TextStyle;
}

const Label: React.FC<LabelProps> = ({ children, size = "md", style }) => {
  return (
    <Text
      style={[styles.label, { fontSize: moderateScale(Sizes[size]) }, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    lineHeight: moderateScale(24),
  },
});

export default Label;
