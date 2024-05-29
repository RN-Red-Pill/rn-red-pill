import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@theme";
// @ui
import { Button, Paper, Text, Title, VStack } from "@ui";
import { useModalControls } from "@modals";
import Shell from "@container/Shell";

const Home = () => {
	const { t } = useTranslation();
	const { openModal } = useModalControls();
	const styles = useStyles();

	return (
		<Shell>
			<View style={styles.container}>
				<View style={{ gap: 10, paddingHorizontal: 10 }}>
					<Paper>
						<VStack>
							<Title>{t("Welcome")}</Title>
							<Text>{t("This is a beta version.")}</Text>
							<Button onPress={() => openModal({ name: "example-modal" })}>
								Show Modal
							</Button>
						</VStack>
					</Paper>
				</View>
			</View>
		</Shell>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.semantic.bg.page,
	},
}));

export default Home;
