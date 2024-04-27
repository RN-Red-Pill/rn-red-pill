import { createStyles } from "@theme";
import { moderateScale } from "@utils/ScaleHelper";
import { Text, type TextStyle } from "react-native";

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

const styles = createStyles((theme) => ({
	headline: {
		fontWeight: "bold",
		textTransform: "capitalize",
		color: theme.semantic.text.body,
	},
}));

export default Headline;
