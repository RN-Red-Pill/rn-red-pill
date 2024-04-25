import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createStyles, useTheme } from "@theme";

enum CheckboxSize {
  xs = 16,
  sm = 20,
  md = 24,
  lg = 28,
  xl = 32,
}

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: CheckboxSize;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  size = CheckboxSize.md,
}) => {
  const { theme } = useTheme();

  const toggleCheckbox = () => {
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View
        style={[
          styles.checkbox,
          { width: size, height: size },
          checked && styles.checked,
        ]}
      >
        {checked && (
          <Feather
            name="check"
            size={size * 0.8}
            color={checked ? theme.white : theme.colors.gray[9]}
          />
        )}
      </View>
      <Text style={[styles.label, { fontSize: size * 0.9 }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = createStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  checkbox: {
    borderRadius: 4,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.gray[3],
    marginRight: 6,
  },
  checked: {
    backgroundColor: theme.colors.blue[6],
    borderColor: theme.colors.blue[6],
  },
  label: {
    color: theme.colors.gray[9],
    fontWeight: "400",
  },
}));

export default Checkbox;