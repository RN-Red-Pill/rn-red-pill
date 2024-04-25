import { createStyles } from "@theme";
import type React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DefaultColors } from "src/theme/constants/default-colors";

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
	textColor = DefaultColors.gray[5],
}) => {
	return (
		<View style={styles.container}>
			{items.map((item, index) => (
				<View key={index} style={styles.itemContainer}>
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

const styles = createStyles((theme) => ({
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
		color: theme.colors.gray[4],
	},
	separator: {
		fontSize: theme.fontSizes.md,
		color: theme.colors.gray[4],
		marginHorizontal: 5,
	},
}));

export default Breadcrumb;
