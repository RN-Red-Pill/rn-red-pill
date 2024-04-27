import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import { Input, Button, Title, VStack, Text, Center } from "@ui";
import { useUser } from "@contexts";

const AuthScreen = () => {
	const { t } = useTranslation();
	const { login } = useUser();

	return (
		<View style={styles.container}>
			<VStack spacing="md">
				<Center
					style={{
						gap: 10,
					}}
				>
					<Title size="xl">{t("Welcome to Red Pill")}</Title>
					<Text>{t("Your Best MVP Boilerplate.")}</Text>
				</Center>
				<Input
					placeholder="Your email"
					variant="outlined"
					label="Email"
					leftIcon="mail"
				/>
				<Button leftIcon="login" onPress={() => login()}>
					Login
				</Button>
			</VStack>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing.md,
		backgroundColor: theme.semantic.bg.body,
		justifyContent: "center",
		textAlign: "center",
	},
	inner: {
		gap: theme.spacing.md,
	},
}));

export default AuthScreen;
