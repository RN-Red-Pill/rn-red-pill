import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Label from "../Label";

interface TextareaProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  rows?: number;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  label,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <View style={styles.container}>
        <TextInput
          style={styles.textarea}
          multiline
          numberOfLines={rows}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          textAlignVertical="top"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textarea: {
    fontSize: 16,
    height: 80,
  },
});

export default Textarea;
