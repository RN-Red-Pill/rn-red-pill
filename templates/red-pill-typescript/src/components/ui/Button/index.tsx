import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import CircularLoading from "../CircularLoading";
import { createStyles, RadiusSizes, RedPillSizes } from "@src/theme";

type ButtonVariant = "filled" | "outline" | "light";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  loading?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  disabled?: boolean;
  variant?: ButtonVariant;
  success?: boolean;
  isFullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  radius?: RadiusSizes;
  size?: RedPillSizes;
}

const buttonVariantStyles = createStyles((theme) => ({
  filled: {
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    borderWidth: 2,
    borderColor: theme.colors.blue[6],
    borderRadius: theme.radius.full,
  },
  outline: {
    borderColor: theme.colors.blue[6],
    color: theme.colors.blue[6],
    borderWidth: 2,
  },
  light: {
    backgroundColor: theme.colors.blue[1],
    borderColor: theme.colors.blue[1],
    color: theme.colors.blue[6],
    borderWidth: 2,
  },
}));

const buttonTextStyles = createStyles((theme) => ({
  xs: {
    fontSize: theme.fontSizes.xs,
  },
  sm: {
    fontSize: theme.fontSizes.sm,
  },
  md: {
    fontSize: theme.fontSizes.md,
  },
  lg: {
    fontSize: theme.fontSizes.lg,
  },
  xl: {
    fontSize: theme.fontSizes.xl,
  },
}));

enum Radius {
  xs = 2,
  sm = 4,
  md = 8,
  lg = 16,
  xl = 32,
  full = 99,
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading = true,
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
  const renderLeftIcon = () => {
    if (leftIcon) {
      return <Icon name={leftIcon} style={[styles.icon, styles.leftIcon]} />;
    }
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return <Icon name={rightIcon} style={[styles.icon, styles.rightIcon]} />;
    }
    if (success) {
      return <Icon name="check" style={[styles.icon, styles.successIcon]} />;
    }
    return null;
  };

  const renderLoadingIndicator = () => {
    if (loading) {
      return <CircularLoading size="md" />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonVariantStyles[variant],
        disabled && styles.disabled,
        isFullWidth && styles.fullWidth,
        {
          borderRadius: Radius[radius],
          height: 50,
        //   maxWidth: isFullWidth ? "100%" : 120,
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
              color: buttonVariantStyles[variant].color,
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
    flex: 1,
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
    color: "#fff",
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
