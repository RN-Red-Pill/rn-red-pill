import React, { useState } from "react";
import { View, TouchableOpacity, Pressable, Text as RNText } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createStyles } from "@theme";
import Label from "../Label";
import Title from "../Title";
import Text from "../Text";

const Select = ({
  items,
  onSelect = () => {},
  placeholder = "Select",
  label,
  sublabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    onSelect(item.value);
    setIsOpen(false);
  };

  const renderLabel = () => {
    if (label) {
      return (
        <Title
          style={{
            paddingHorizontal: 5,
          }}
        >
          {label}
        </Title>
      );
    }
    return null;
  };

  const renderSublabel = () => {
    if (sublabel) {
      return (
        <Label
          size="xs"
          style={{
            paddingHorizontal: 5,
          }}
        >
          {sublabel}
        </Label>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {label && renderLabel()}
      <View style={styles.innerContainer}>
        <Pressable onPress={toggleSelect} style={styles.selectedItem}>
          <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
          <Entypo name="chevron-down" size={24} />
        </Pressable>
        {isOpen && (
          <View style={styles.dropdown}>
            {items.map((item, index) => {
              const isLastItem = items.length - 1 === index;
              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => handleSelectItem(item)}
                  style={[
                    styles.selectItem,
                    !isLastItem && styles.selectItemBorder,
                  ]}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
      {sublabel && renderSublabel()}
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    gap: theme.spacing.xs,
    position: "relative",
    zIndex: 9,
    color: theme.semantic.text.body,
  },
  innerContainer: {
    position: "relative",
    zIndex: 5,
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.semantic.bg.surface.normal,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    transform: [{ translateY: -10 }],
    backgroundColor: theme.semantic.bg.surface.normal,
    zIndex: 5,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
  },
  selectItem: {
    padding: theme.spacing.md,
  },
  selectItemBorder: {
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.semantic.border.container,
  },
}));

export default Select;
