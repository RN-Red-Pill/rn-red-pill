import { Image, ImageBackground, View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles, useTheme } from "@theme";
// @ui
import { Button, Title, VStack, Text, Center } from "@ui";
import { useUser } from "@contexts";

import LogoWhite from "@assets/logo/logo-white.png";
import LogoDark from "@assets/logo/logo-dark.png";
import SpaceImg from "@assets/images/space.png";

const AuthScreen = () => {
	const { t } = useTranslation();
	const { login } = useUser();
	const { theme } = useTheme();

	const logoSource = theme.themeMode === "light" ? LogoWhite : LogoDark;

	return (
		<ImageBackground source={SpaceImg} style={styles.imgContainer}>
			<View style={styles.container}>
				<View />
				<VStack spacing="md">
					<Center
						style={{
							gap: 10,
						}}
					>
						<Title style={styles.title} size="xl">
							{t("Explore the World")}
						</Title>
						<Text size="xl" style={styles.description}>
							{t("Your Best MVP Boilerplate.")}
						</Text>
					</Center>
					<Button
						radius="full"
						size="xl"
						leftIcon="login"
						variant="filled"
						onPress={() => login()}
					>
						Login
					</Button>
				</VStack>
			</View>
		</ImageBackground>
	);
};

const styles = createStyles((theme) => ({
	imgContainer: {
		flex: 1,
	},
	title: {
		color: theme.white,
	},
	description: {
		color: theme.white,
	},
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing.md,
		// backgroundColor: theme.semantic.bg.page,
		justifyContent: "flex-end",
		textAlign: "center",
		paddingBottom: theme.spacing.xl * 2,
	},
	inner: {
		gap: theme.spacing.md,
	},
}));

export default AuthScreen;
