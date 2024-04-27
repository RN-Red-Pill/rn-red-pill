import React, { type ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface HStackProps {
	children: ReactNode;
	spacing?: number | "xs" | "sm" | "md" | "lg" | "xl";
}

const HStack: React.FC<HStackProps> = ({ children, spacing = "md" }) => {
	const childrenArray = React.Children.toArray(children);

	const getSpacingStyles = () => {
		if (typeof spacing === "number") {
			return { marginHorizontal: spacing };
		}
		switch (spacing) {
			case "xs":
				return { marginHorizontal: 5 };
			case "sm":
				return { marginHorizontal: 8 };
			case "md":
				return { marginHorizontal: 10 };
			case "lg":
				return { marginHorizontal: 12 };
			case "xl":
				return { marginHorizontal: 15 };
			default:
				return { marginHorizontal: 10 };
		}
	};

	const spacingStyles = getSpacingStyles();

	return (
		<View style={[styles.hStack, spacingStyles]}>
			{childrenArray.map((child, index) => (
				<View
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					style={{
						marginHorizontal: typeof spacing === "number" ? spacing : undefined,
					}}
				>
					{child}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	hStack: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default HStack;
