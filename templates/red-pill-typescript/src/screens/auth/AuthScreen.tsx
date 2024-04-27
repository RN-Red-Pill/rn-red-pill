import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import { Input, Button, Title } from "@ui";
import { useUser } from "@contexts";

const AuthScreen = () => {
	const { t } = useTranslation();
	const { login } = useUser();

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Title size="xl">{t("Welcome to Red Pill")}</Title>
				<Input variant="outlined" label="Email" leftIcon="mail" />

				<Button leftIcon="login" onPress={() => login()}>
					Login
				</Button>
			</View>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing.md,
		backgroundColor: theme.semantic.bg.body,
	},
	inner: {
		gap: theme.spacing.md,
	},
}));

export default AuthScreen;
