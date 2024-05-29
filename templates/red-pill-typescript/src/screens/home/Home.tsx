import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@theme";
// @ui
import { Button, Paper, Text } from "@ui";
import { useModalControls } from "@modals";

const Home = () => {
	const { t } = useTranslation();
	const { openModal } = useModalControls();
	const styles = useStyles();

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

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.semantic.bg.page,
	},
}));

export default Home;
