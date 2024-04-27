import type React from "react";
import { createStyles } from "@theme";
import { moderateScale } from "@utils/ScaleHelper";
import { Text, type TextStyle } from "react-native";

interface TitleProps {
  children: React.ReactNode;
  size?: keyof typeof Sizes;
  style?: TextStyle | object;
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

const styles = createStyles((theme) => ({
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
    color: theme.semantic.text.body,
  },
}));

export default Title;
