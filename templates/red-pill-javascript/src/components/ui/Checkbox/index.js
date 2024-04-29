import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Checkbox = ({ label, checked, onChange = () => {}, size = 24 }) => {
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
            color={checked ? "white" : "gray"}
          />
        )}
      </View>
      <Text style={[styles.label, { fontSize: size * 0.9 }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    // Temanıza uygun bir renk belirtmelisiniz
    borderColor: "black",
    marginRight: 6,
  },
  checked: {
    // Temanıza uygun bir renk belirtmelisiniz
    backgroundColor: "black",
    // Temanıza uygun bir renk belirtmelisiniz
    borderColor: "black",
  },
  label: {
    // Temanıza uygun bir renk belirtmelisiniz
    color: "black",
    fontWeight: "400",
  },
});

export default Checkbox;
