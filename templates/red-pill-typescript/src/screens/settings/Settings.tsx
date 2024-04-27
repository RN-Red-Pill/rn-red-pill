import { View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles, useTheme } from "@theme";
// @ui
import { Switch } from "@ui";

const Settings = () => {
	const { setColorScheme, colorScheme } = useTheme();
	const { t } = useTranslation();
	const [value, setValue] = useState(true);
	const [text, setText] = useState("");


	return (
		<View style={styles.container}>
		</View>
	);
};

const styles = createStyles(() => ({
	container: {
		flex: 1,
	},
}));

export default Settings;
