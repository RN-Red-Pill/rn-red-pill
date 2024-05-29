import type React from "react";
import { DefaultTheme, makeStyles } from "@theme";
import { View, Text, TouchableOpacity } from "react-native";

interface BreadcrumbItem {
	label: string;
	onPress?: () => void;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
	textColor?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
	items,
	textColor = DefaultTheme.semantic.text.body,
}) => {
	const styles = useStyles();
	return (
		<View style={styles.container}>
			{items.map((item, index) => (
				<View key={item.label} style={styles.itemContainer}>
					<TouchableOpacity onPress={item.onPress}>
						<Text style={[styles.label, { color: textColor }]}>
							{item.label}
						</Text>
					</TouchableOpacity>
					{index < items.length - 1 && (
						<Text style={styles.separator}> / </Text>
					)}
				</View>
			))}
		</View>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	itemContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	label: {
		fontSize: theme.fontSizes.md,
		color: theme.semantic.text.body,
	},
	separator: {
		fontSize: theme.fontSizes.md,
		color: theme.semantic.text.body,
		marginHorizontal: 5,
	},
}));

export default Breadcrumb;
