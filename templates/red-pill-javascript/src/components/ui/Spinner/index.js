import React, { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { useTheme, createStyles } from "@theme";

const Spinner = ({ size = "md" }) => {
  const { theme } = useTheme();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            width: SpinnerSizes[size],
            height: SpinnerSizes[size],
            borderRadius: SpinnerSizes[size],
            borderWidth: BorderWidths[size],
            borderColor: theme.semantic.border.primary.normal,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spinner,
          {
            width: SpinnerSizes[size],
            height: SpinnerSizes[size],
            borderRadius: SpinnerSizes[size],
            borderWidth: BorderWidths[size],
            borderColor: theme.semantic.border.primary.active,
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
};

const styles = createStyles(() => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    opacity: 0.5,
  },
  spinner: {
    position: "absolute",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
}));

export default Spinner;
