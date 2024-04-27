import { Text, View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import { Divider, Select, Switch, VStack, Tag, Textarea, Radio } from "@ui";

const Settings = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState(true);
	const [text, setText] = useState("");

	return (
		<View style={styles.container}>
			<Text>Settings</Text>
			<View style={{ gap: 10, paddingHorizontal: 10 }}>
				<Divider spacing="xl" text="hello" />
				<Select
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
					onSelect={() => {}}
				/>
				<Switch onChange={() => setValue(!value)} value={value} />
				<VStack spacing={20}>
					<Radio
						value={value}
						checked={value}
						onChange={() => setValue(!value)}
						label="selam"
					/>
					<Tag onPress={() => {}} label="selam" />
				</VStack>
				<Textarea
					label="İsmin nedir?"
					onChangeText={(val) => setText(val)}
					value={text}
				/>
			</View>
		</View>
	);
};

const styles = createStyles(() => ({
	container: {
		flex: 1,
	},
}));

export default Settings;
