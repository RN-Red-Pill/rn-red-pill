import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles, useTheme } from "@theme";
import { Avatar, Paper, Select, Switch, Text, VStack } from "@ui";
import { useUser } from "@contexts";
import Icon from "@expo/vector-icons/Ionicons";
import i18next from "i18next";
import { languages } from "@locale";

const Settings = () => {
	const { t } = useTranslation();
	const { user } = useUser();
	const { colorScheme, setColorScheme } = useTheme();

	const changeLanguage = (lng: string) => {
		i18next.changeLanguage(lng);
	};

	return (
		<View style={styles.container}>
			<Paper style={styles.avatarContainer}>
				<Avatar radius="full" size="xl" initials="JD" />
				<VStack>
					<Text size="lg" style={styles.titles}>
						{user?.username}
					</Text>
					<Text>{user?.email}</Text>
				</VStack>
			</Paper>
			<Paper>
				<VStack>
					<Text style={styles.titles}>{t("Application")}</Text>
					<View style={styles.item}>
						<View style={styles.itemTitle}>
							<Icon name="moon" size={24} style={styles.icon} />
							<Text size="lg">{t("Dark Mode")}</Text>
						</View>
						<Switch
							onChange={() =>
								setColorScheme(colorScheme === "light" ? "dark" : "light")
							}
							value={colorScheme === "light"}
						/>
					</View>
					<Select
						onSelect={changeLanguage}
						items={languages}
						placeholder={t("English")}
						label={t("Language")}
						leftIcon="language"
					/>
				</VStack>
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
	icon: {
		color: theme.semantic.text.body,
	},
}));

export default Settings;
