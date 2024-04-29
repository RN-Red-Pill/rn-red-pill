import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles, useTheme } from "@theme";
import { Avatar, Paper, Switch, Text, VStack } from "@ui";
import { useUser } from "@contexts";
import Icon from "@expo/vector-icons/Ionicons";

const Settings = () => {
	const { t } = useTranslation();
	const { user } = useUser();
	const { colorScheme, setColorScheme } = useTheme();

	return (
		<View style={styles.container}>
			<Paper style={styles.avatarContainer}>
				<Avatar radius="full" size="xl" initials="VG" />
				<VStack>
					<Text size="lg" style={styles.titles}>
						{user?.username}
					</Text>
					<Text>{user?.email}</Text>
				</VStack>
			</Paper>
			<Paper>
				<Text style={styles.titles}>{t("Application")}</Text>
				<View style={styles.item}>
					<View style={styles.itemTitle}>
						<Icon name="moon" size={24} />
						<Text size="lg">Dark Mode</Text>
					</View>
					<Switch
						onChange={() =>
							setColorScheme(colorScheme === "light" ? "dark" : "light")
						}
						value={colorScheme === "light"}
					/>
				</View>
			</Paper>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.semantic.bg.page,
		padding: theme.spacing.lg,
	},
	avatarContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacing.sm,
	},
	titles: {
		fontWeight: "800",
	},
	itemTitle: {
		flexDirection: "row",
		gap: theme.spacing.xs,
		alignItems: "center",
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: theme.spacing.md,
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderColor: theme.semantic.border.container,
	},
}));

export default Settings;
