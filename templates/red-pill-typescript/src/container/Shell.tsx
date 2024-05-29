import { type FC as ReactFC, type ReactNode, useMemo } from "react";
import { View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { makeStyles } from "@theme";

interface ShellProps {
	children: ReactNode;
}

const Shell: ReactFC<ShellProps> = function ShellImpl({ children }) {
	const styles = useStyles();
	const safeAreaInsets = useSafeAreaInsets();

	const containerPadding: ViewStyle = useMemo(
		() => ({
			height: "100%",
			paddingTop: safeAreaInsets.top,
		}),
		[safeAreaInsets],
	);
	return (
		<View style={styles.outerContainer}>
			<View style={containerPadding}>{children}</View>
		</View>
	);
};

export default Shell;

const useStyles = makeStyles((theme) => ({
	outerContainer: {
		height: "100%",
		backgroundColor: theme.semantic.bg.page,
	},
}));
