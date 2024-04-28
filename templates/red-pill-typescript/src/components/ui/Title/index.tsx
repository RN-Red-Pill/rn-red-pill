import type React from "react";
import { createStyles } from "@theme";
import { moderateScale } from "@utils/ScaleHelper";
import { Text, type TextStyle } from "react-native";

interface TitleProps {
	children: React.ReactNode;
	size?: keyof typeof Sizes;
	style?: TextStyle | object;
}

enum Sizes {
	sm = 20,
	md = 24,
	lg = 36,
	xl = 48,
}

const Title: React.FC<TitleProps> = ({ children, size = "md", style }) => {
	return (
		<Text
			style={[styles.title, { fontSize: moderateScale(Sizes[size]) }, style]}
		>
			{children}
		</Text>
	);
};

const styles = createStyles((theme) => ({
	title: {
		fontWeight: "bold",
		textTransform: "capitalize",
		color: theme.semantic.text.body,
		width: '100%'
	},
}));

export default Title;
