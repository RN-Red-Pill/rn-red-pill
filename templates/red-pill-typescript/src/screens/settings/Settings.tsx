import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles, } from "@theme";
import { Text } from "@ui";

const Settings = () => {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<Text>{t("This is settings screen")}</Text>
		</View>
	);
};

const styles = createStyles(() => ({
	container: {
		flex: 1,
	},
}));

export default Settings;
