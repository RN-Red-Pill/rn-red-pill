import React from "react";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  createStyles,
  Radius,
} from "@theme";

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

const Badge = ({
  children,
  leftIcon,
  rightIcon,
  variant = "filled",
  radius = "full",
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
          style={[
            styles.icon,
            iconStyles[validatedVariant],
            styles.leftIcon,
          ]}
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
          style={[
            styles.icon,
            iconStyles[validatedVariant],
            styles.rightIcon,
          ]}
        />
      );
    }
    return null;
  };

  return (
    <View
      style={[
        styles.container,
        BadgeVariantStyles[validatedVariant],
        {
          borderRadius: Radius[radius],
        },
        style,
      ]}
    >
      {renderLeftIcon()}
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            textStyle,
            badgeTextStyles[size],
            {
              color: BadgeVariantStyles[validatedVariant].color,
            },
          ]}
        >
          {children}
        </Text>
      </View>
      {renderRightIcon()}
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
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
}));

export default Badge;
