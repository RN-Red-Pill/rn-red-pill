import React, { type ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface VStackProps {
	children: ReactNode;
	spacing?: number | "xs" | "sm" | "md" | "lg" | "xl"; // Accepts numeric values or predefined sizes
}

const VStack: React.FC<VStackProps> = ({ children, spacing = 10 }) => {
	const childrenArray = React.Children.toArray(children);

	const getSpacingStyles = () => {
		if (typeof spacing === "number") {
			return { marginVertical: spacing / 2 };
		}
		switch (spacing) {
			case "xs":
				return { marginVertical: 5 };
			case "sm":
				return { marginVertical: 8 };
			case "md":
				return { marginVertical: 10 };
			case "lg":
				return { marginVertical: 12 };
			case "xl":
				return { marginVertical: 15 };
			default:
				return { marginVertical: 10 };
		}
	};

	const spacingStyles = getSpacingStyles();

	return (
		<View style={[styles.vStack, spacingStyles]}>
			{childrenArray.map((child, index) => (
				<View
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					style={{
						marginVertical:
							typeof spacing === "number" ? spacing / 2 : undefined,
					}}
				>
					{child}
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	vStack: {
		flexDirection: "column",
		alignItems: "stretch",
	},
});

export default VStack;
