import type React from "react";
import { makeStyles } from "@theme";
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
	const styles = useStyles();
	return (
		<Text
			style={[styles.title, { fontSize: moderateScale(Sizes[size]) }, style]}
		>
			{children}
		</Text>
	);
};

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: "bold",
		textTransform: "capitalize",
		color: theme.semantic.text.body,
	},
}));

export default Title;
