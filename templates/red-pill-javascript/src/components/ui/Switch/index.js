import { createStyles } from "@theme";
import React, { useState } from "react";
import { View, Text, Animated, Pressable } from "react-native";

const Switch = ({
  size = "xl",
  label,
  value,
  onChange = () => {},
}) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0)); // Initial value based on 'value' prop

  const toggleSwitch = () => {
    const toValue = value ? 0 : 1;
    onChange(!value);

    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const getSizeStyles = () => {
    switch (size) {
      case "xs":
        return {
          switchWidth: 34,
          switchHeight: 20,
          thumbSize: 16,
          thumbTranslate: 14,
        };
      case "sm":
        return {
          switchWidth: 40,
          switchHeight: 24,
          thumbSize: 20,
          thumbTranslate: 16,
        };
      case "md":
        return {
          switchWidth: 51,
          switchHeight: 30,
          thumbSize: 26,
          thumbTranslate: 20,
        };
      case "lg":
        return {
          switchWidth: 64,
          switchHeight: 36,
          thumbSize: 32,
          thumbTranslate: 26,
        };
      case "xl":
        return {
          switchWidth: 77,
          switchHeight: 42,
          thumbSize: 37,
          thumbTranslate: 32,
        };
      default:
        return {
          switchWidth: 77,
          switchHeight: 42,
          thumbSize: 37,
          thumbTranslate: 32,
        };
    }
  };

  const { switchWidth, switchHeight, thumbSize, thumbTranslate } =
    getSizeStyles();

  const thumbTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, thumbTranslate],
  });

  return (
    <Pressable onPress={toggleSwitch} style={styles.container}>
      <View
        style={[
          styles.switch,
          { width: switchWidth, height: switchHeight },
          value && styles.switchOn,
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            { width: thumbSize, height: thumbSize },
            value && styles.thumbOn,
            { transform: [{ translateX: thumbTranslateX }] },
          ]}
        />
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};

const styles = createStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 999,
    backgroundColor: theme.semantic.bg.subtle,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  switchOn: {
    backgroundColor: theme.semantic.bg.success.normal,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 999,
    backgroundColor: theme.white,
  },
  thumbOn: {
    transform: [{ translateX: 20 }],
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
}));

export default Switch;
