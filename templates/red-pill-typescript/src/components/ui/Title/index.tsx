import { moderateScale } from "@src/utils/ScaleHelper";
import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface TitleProps {
  children: React.ReactNode;
  size?: keyof typeof Sizes;
  style?: TextStyle;
}

enum Sizes {
  sm = 14,
  md = 16,
  lg = 22,
  xl = 28,
}

const Title: React.FC<TitleProps> = ({ children, size = "md", style }) => {
  return (
    <Text
      style={[styles.title, { fontSize: moderateScale(Sizes[size]) }, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textTransform: 'capitalize'
  },
});

export default Title;
