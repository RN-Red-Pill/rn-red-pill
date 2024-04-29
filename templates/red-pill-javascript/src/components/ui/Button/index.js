import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { Radius } from "@theme";
import Spinner from "../Spinner";

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

const Button = ({
  children,
  onPress,
  loading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  variant = "filled",
  success = false,
  isFullWidth = false,
  radius = "md",
  size = "md",
  style,
  textStyle,
}) => {
  const validatedVariant = variantValidator(variant);

  const renderLeftIcon = () => {
    if (leftIcon) {
      return (
        <Icon
          name={leftIcon}
          style={[styles.icon, iconStyles[validatedVariant], styles.leftIcon]}
        />
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return (
        <Icon
          name={rightIcon}
          style={[styles.icon, iconStyles[validatedVariant], styles.rightIcon]}
        />
      );
    }
    if (success) {
      return <Icon name="check" style={[styles.icon, styles.successIcon]} />;
    }
    return null;
  };

  const renderLoadingIndicator = () => {
    if (loading) {
      return <Spinner size="md" />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonVariantStyles[validatedVariant],
        disabled && styles.disabled,
        isFullWidth && styles.fullWidth,
        {
          borderRadius: Radius[radius],
          height: 50,
        },
        style,
      ]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {renderLeftIcon()}
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            textStyle,
            buttonTextStyles[size],
            {
              color: buttonVariantStyles[validatedVariant].color,
            },
          ]}
        >
          {children}
        </Text>
        {loading && renderLoadingIndicator()}
      </View>
      {renderRightIcon()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    // minWidth: 100,
  },
  disabled: {
    opacity: 0.6,
  },
  fullWidth: {
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  icon: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
  successIcon: {
    marginLeft: 10,
    color: "#fff",
  },
});

export default Button;
