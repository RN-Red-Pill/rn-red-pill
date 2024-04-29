import type { ReactNode } from "react";
import { createStyles } from "@theme";
import { View, Text, type ViewStyle } from "react-native";

interface PaperProps {
	title?: string;
	children: ReactNode;
	style?: ViewStyle;
}

const Paper: React.FC<PaperProps> = ({ children, style }) => {
	return <View style={[styles.container, style]}>{children}</View>;
};

const styles = createStyles((theme) => ({
	container: {
		backgroundColor: theme.semantic.default,
		borderRadius: theme.radius.md,
		padding: theme.spacing.md,
		marginVertical: 10,
		borderWidth: 0.4,
		borderColor: theme.semantic.border.container,
	},
	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: "bold",
		marginBottom: 10,
	},
	content: {
		fontSize: theme.fontSizes.md,
	},
}));

export default Paper;
