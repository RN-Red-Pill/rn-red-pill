import React, { useState } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import Label from "../Label";
import Title from "../Title/index";
import { createStyles } from "@theme";

const TextInputVariationEnum = {
  outlined: "outlined",
  filled: "filled",
};

const TextArea = ({
  label,
  sublabel,
  variant = TextInputVariationEnum.outlined,
  inputStyle,
  placeholder,
  onChangeText,
  value,
  rows,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const renderLabel = () => {
    if (label) {
      return <Title>{label}</Title>;
    }
    return null;
  };

  const renderSublabel = () => {
    if (sublabel) {
      return <Label size="xs">{sublabel}</Label>;
    }
    return null;
  };

  const renderInput = () => (
    <RNTextInput
      onChangeText={onChangeText}
      style={[styles.textarea, inputStyle]}
      placeholder={placeholder}
      value={value}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      multiline
      numberOfLines={rows}
      textAlignVertical="top"
    />
  );

  return (
    <View style={styles.container}>
      {label && renderLabel()}
      <View
        style={[
          styles.innerContainer,
          variant === TextInputVariationEnum.outlined && styles.outlined,
          variant === TextInputVariationEnum.filled && styles.filled,
          isFocused && styles.focused,
        ]}
      >
        <View style={styles.textContainer}>{renderInput()}</View>
      </View>
      {sublabel && renderSublabel()}
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    gap: theme.spacing.xs,
  },
  textarea: {
    color: theme.semantic.text.input.normal,
    height: 80,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.md,
  },
  outlined: {
    borderColor: theme.semantic.bg.surface.normal,
  },
  filled: {
    borderColor: theme.semantic.bg.surface.raised,
    backgroundColor: theme.semantic.bg.surface.normal,
  },
  focused: {
    borderColor: theme.semantic.border.primary.active,
  },
  innerContainer: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.radius.sm,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
}));

export default TextArea;
