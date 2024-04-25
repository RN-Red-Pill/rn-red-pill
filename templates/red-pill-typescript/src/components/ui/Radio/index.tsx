import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

interface RadioButtonProps {
  label: string;
  value: any;
  checked: boolean;
  onChange: (value: any) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case "xs":
      return {
        radioButtonSize: 12,
        checkedSize: 6,
        labelFontSize: 12,
        marginRight: 5,
      };
    case "sm":
      return {
        radioButtonSize: 16,
        checkedSize: 10,
        labelFontSize: 14,
        marginRight: 5,
      };
    case "md":
      return {
        radioButtonSize: 20,
        checkedSize: 12,
        labelFontSize: 16,
        marginRight: 10,
      };
    case "lg":
      return {
        radioButtonSize: 24,
        checkedSize: 14,
        labelFontSize: 18,
        marginRight: 10,
      };
    case "xl":
      return {
        radioButtonSize: 28,
        checkedSize: 16,
        labelFontSize: 20,
        marginRight: 10,
      };
    default:
      return {
        radioButtonSize: 20,
        checkedSize: 12,
        labelFontSize: 16,
        marginRight: 10,
      };
  }
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  size = "md",
  disabled,
}) => {
  const { radioButtonSize, checkedSize, labelFontSize, marginRight } = getSizeStyles(size);
  const ViewType = disabled ? View : Pressable;
  
  const handleSelect = () => {
    onChange(value);
  };

  return (
    <ViewType onPress={handleSelect} style={[styles.container, disabled && styles.disabled]}>
      <View style={[styles.radioButton, { width: radioButtonSize, height: radioButtonSize, marginRight }]}>
        {checked && <View style={[styles.checked, { width: checkedSize, height: checkedSize }]} />}
      </View>
      <Text style={[styles.label, { fontSize: labelFontSize }]}>{label}</Text>
    </ViewType>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    borderRadius: 999, // Large enough to make a circle
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#333",
    borderRadius: 999, // Large enough to make a circle
  },
  label: {
    fontSize: 16, // Default font size
  },
});

export default RadioButton;