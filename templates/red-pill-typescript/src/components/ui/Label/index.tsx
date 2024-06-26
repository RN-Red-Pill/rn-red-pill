import type React from "react";
import { Text, type TextStyle } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";
import { makeStyles } from "@theme";

enum Sizes {
	xs = 12,
	sm = 14,
	md = 16,
	lg = 18,
	xl = 20,
}

interface LabelProps {
	children: React.ReactNode;
	size?: keyof typeof Sizes;
	style?: TextStyle;
}

const Label: React.FC<LabelProps> = ({ children, size = "md", style }) => {
	const styles = useStyles();
	return (
		<Text
			style={[styles.label, { fontSize: moderateScale(Sizes[size]) }, style]}
		>
			{children}
		</Text>
	);
};

const useStyles = makeStyles((theme) => ({
	label: {
		lineHeight: moderateScale(24),
		textTransform: "capitalize",
		color: theme.semantic.text.body,
	},
}));

export default Label;
