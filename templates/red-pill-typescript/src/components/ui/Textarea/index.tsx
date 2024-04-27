import type React from "react";
import { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  type TextStyle,
  type ViewStyle,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import Label from "../Label";
import Title from "../Title/index";
import { createStyles } from "@theme";

enum TextInputVariationEnum {
  outlined = "outlined",
  filled = "filled",
}

type TextInputVariation = "filled" | "outlined";

interface TextAreaProps {
  value?: string;
  label?: string;
  sublabel?: string;
  variant?: TextInputVariation;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  placeholder?: string;
  onChangeText?: ((text: string) => void) | undefined;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  sublabel,
  variant = TextInputVariationEnum.outlined,
  inputStyle,
  placeholder,
  onChangeText,
  value,
  rows,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
  icon: {
    fontSize: 20,
    color: theme.semantic.icon.default,
  },
}));

export default TextArea;
