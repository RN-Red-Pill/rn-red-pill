import { Text, View } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import {
	Button,
	Headline,
	IconButton,
	Input,
	Label,
	Title,
	Accordion,
	Avatar,
	Badge,
	Breadcrumb,
	Center,
	Checkbox,
	Divider,
	Select,
	Switch,
	HStack,
	VStack,
	Tag,
	Textarea,
} from "@ui";
import RadioButton from "src/components/ui/Radio";

const Home = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState(true);
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<View style={{ gap: 10, paddingHorizontal: 10 }}>
				<Divider spacing="xl" text="hello" />
				<Select
					onSelect={() => {}}
					items={[
						{
							label: "test",
							value: "test",
						},
						{
							label: "test-1",
							value: "test-2",
						},
					]}
				/>
				<Switch onChange={() => setValue(!value)} value={value} />
				<VStack spacing={20}>
					<RadioButton
						value={value}
						checked={value}
						onChange={() => setValue(!value)}
						label="selam"
					/>
					<Tag onPress={() => {}} label="selam" />
				</VStack>
				<Textarea
					label="İsmin nedir?"
					onChange={(val) => setText(val)}
					value={text}
				/>
			</View>
		</View>
	);
};

const styles = createStyles((theme) => ({
	container: {
		backgroundColor: theme.colors.gray[2],
		flex: 1,
	},
}));

export default Home;
