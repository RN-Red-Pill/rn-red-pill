import { createStyles, RedPillSizes } from "@src/theme";
import { moderateScale } from "@src/utils/ScaleHelper";
import React, { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";

interface SpinnerProps {
  size?: RedPillSizes
}

enum Sizes {
  xs = 16,
  sm = 20,
  md = 24,
  lg = 32,
  xl = 40,
}

enum BorderWidths {
  xs = 1,
  sm = 2,
  md = 3,
  lg = 4,
  xl = 6,
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md" }) => {
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
  }, []);

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
            width: Sizes[size],
            height: Sizes[size],
            borderRadius: Sizes[size],
            borderWidth: BorderWidths[size],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.spinner,
          {
            width: Sizes[size],
            height: Sizes[size],
            borderRadius: Sizes[size],
            borderWidth: BorderWidths[size],
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderColor: theme.white,
    opacity: 0.5,
  },
  spinner: {
    position: "absolute",
    borderColor: theme.white,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRigthColor: "transparent",
  },
}));

export default Spinner;
