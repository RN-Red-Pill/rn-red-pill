import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createStyles } from "@theme";

interface SelectItem {
  label: string;
  value: any;
}

interface SelectProps {
  items: SelectItem[];
  onSelect: (value: any) => void;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  items,
  onSelect,
  placeholder = "Select",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: SelectItem) => {
    setSelectedItem(item);
    onSelect(item.value);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleSelect} style={styles.selectedItem}>
        <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
        <Entypo name="chevron-down" size={24} color="black" />
      </Pressable>
      {isOpen && (
        <View style={styles.dropdown}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectItem(item)}
              style={styles.SelectItem}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    position: "relative",
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: theme.radius.md,
  },
  dropdown: {
    marginTop: 10,
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: theme.white,
    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: theme.radius.md,
    zIndex: 1,
  },
  SelectItem: {
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
}));

export default Select;
