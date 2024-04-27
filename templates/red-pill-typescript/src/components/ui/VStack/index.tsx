import React, { type ReactNode } from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";

interface VStackProps {
	children: ReactNode;
	spacing?: number | "xs" | "sm" | "md" | "lg" | "xl";
	style?: ViewStyle;
}

const VStack: React.FC<VStackProps> = ({ children, spacing = "md" }) => {
	let spacingValue: number;

	// Define spacing values based on the provided prop
	switch (spacing) {
		case "xs":
			spacingValue = 4;
			break;
		case "sm":
			spacingValue = 8;
			break;
		case "md":
			spacingValue = 16;
			break;
		case "lg":
			spacingValue = 24;
			break;
		case "xl":
			spacingValue = 32;
			break;
		default:
			spacingValue = typeof spacing === "number" ? spacing : 16;
			break;
	}

	return (
		<View style={styles.container}>
			{React.Children.map(children, (child, index) => (
				<View
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					style={[styles.item, index !== 0 && { marginTop: spacingValue }]}
				>
					{child}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
	},
	item: {
		alignSelf: "stretch",
	},
});

export default VStack;
