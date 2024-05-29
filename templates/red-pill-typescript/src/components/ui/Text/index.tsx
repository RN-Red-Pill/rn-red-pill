import type React from "react";
import { Text, type TextStyle } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";
import {  makeStyles } from "@theme";

enum Sizes {
	xs = 12,
	sm = 14,
	md = 16,
	lg = 18,
	xl = 20,
}

interface TextProps {
	children: React.ReactNode;
	size?: keyof typeof Sizes;
	style?: TextStyle | object;
}

const CustomText: React.FC<TextProps> = ({ children, size = "md", style }) => {
	const styles = useStyles();
	return (
		<Text
			style={[styles.text, { fontSize: moderateScale(Sizes[size]) }, style]}
		>
			{children}
		</Text>
	);
};

const useStyles = makeStyles((theme) => ({
	text: {
		lineHeight: 24,
		color: theme.semantic.text.body,
	},
}));

export default CustomText;
