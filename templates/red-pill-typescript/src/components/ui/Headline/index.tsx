import { moderateScale } from "@utils/ScaleHelper";
import { Text, StyleSheet, type TextStyle } from "react-native";

enum Sizes {
	sm = 24,
	md = 28,
	lg = 36,
	xl = 48,
}

interface HeadlineProps {
	children: React.ReactNode;
	size?: keyof typeof Sizes;
	style?: TextStyle;
}

const Headline: React.FC<HeadlineProps> = ({
	children,
	size = "md",
	style,
}) => {
	return (
		<Text
			style={[styles.headline, { fontSize: moderateScale(Sizes[size]) }, style]}
		>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	headline: {
		fontWeight: "bold",
		textTransform: "capitalize",
	},
});

export default Headline;
