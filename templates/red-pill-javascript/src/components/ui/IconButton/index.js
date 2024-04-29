import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const variantValidator = (variant) => {
  if (
    variant === "filled" ||
    variant === "outline" ||
    variant === "light" ||
    variant === "transparent"
  ) {
    return variant;
  }
  return "filled";
};

const IconButton = ({
  name,
  onPress,
  loading = false,
  disabled = false,
  variant = "filled",
  radius = "md",
  size = "md",
  style,
}) => {
  const validatedVariant = variantValidator(variant);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonVariantStyles[validatedVariant],
        disabled && styles.disabled,
        {
          borderRadius: Radius[radius],
          height: IconSizes[size] * 2,
          width: IconSizes[size] * 2,
        },
        style,
      ]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      <Icon
        name={name}
        style={[
          {
            fontSize: IconSizes[size],
          },
          iconStyles[validatedVariant],
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.6,
  },
});

export default IconButton;
