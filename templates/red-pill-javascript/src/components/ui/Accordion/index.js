import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Title from "../Title";
import { createStyles, useTheme } from "@theme";

const Accordion = ({ items, containerStyle, itemStyle, titleStyle, contentStyle }) => {
  const { theme } = useTheme();

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {items.map((item, index) => (
        <View key={item.title} style={[styles.item, itemStyle]}>
          <TouchableOpacity
            onPress={() => toggleAccordion(index)}
            style={styles.header}
          >
            <Title size="md" style={[styles.title, titleStyle]}>
              {item.title}
            </Title>
            <Entypo
              name={expandedIndex === index ? "chevron-up" : "chevron-down"}
              size={24}
              color={theme.semantic.text.body}
            />
          </TouchableOpacity>
          {expandedIndex === index && (
            <Text style={[styles.content, contentStyle]}>{item.content}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.semantic.bg.surface.normal,
    borderRadius: theme.radius.md,
    overflow: "hidden",
    marginBottom: theme.spacing.md,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: theme.semantic.bg.surface.normal,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: "bold",
    color: theme.semantic.text.body,
  },
  content: {
    padding: theme.spacing.sm,
    color: theme.semantic.text.body,
  },
}));

export default Accordion;
