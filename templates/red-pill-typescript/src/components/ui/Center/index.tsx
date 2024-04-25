import type React from "react";
import type { ReactNode } from "react";
import { View, type ViewStyle, StyleSheet } from "react-native";

interface CenterProps {
	children?: ReactNode;
	style?: ViewStyle;
}

const Center: React.FC<CenterProps> = ({ children, style }) => {
	return <View style={[styles.center, style]}>{children}</View>;
};

const styles = StyleSheet.create({
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Center;
