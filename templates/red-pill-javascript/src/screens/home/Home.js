import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import { Button, Paper, Text } from "@ui";
import { useModalControls } from "@modals";

const Home = () => {
	const { t } = useTranslation();
	const { openModal } = useModalControls();

	return (
		<View style={styles.container}>
			<View style={{ gap: 10, paddingHorizontal: 10 }}>
				<Paper>
					<Text>{t("You are in home screen now.")}</Text>
					<Button onPress={() => openModal({ name: "example-modal" })}>
						Show Modal
					</Button>
				</Paper>
			</View>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.semantic.bg.page,
	},
}));

export default Home;
