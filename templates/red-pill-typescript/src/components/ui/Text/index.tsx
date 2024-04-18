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

interface TextProps {
  children: React.ReactNode;
  size?: keyof typeof Sizes;
  style?: TextStyle;
}

const CustomText: React.FC<TextProps> = ({ children, size = "md", style }) => {
  return (
    <Text
      style={[styles.text, { fontSize: moderateScale(Sizes[size]) }, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 24,
  },
});

export default CustomText;