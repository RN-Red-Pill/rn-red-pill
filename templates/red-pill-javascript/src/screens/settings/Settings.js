import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
import { Text } from "@ui";

const Settings = () => {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<Text>{t("This is settings screen")}</Text>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.semantic.bg.page,
		padding: theme.spacing.md,
	},
}));

export default Settings;
