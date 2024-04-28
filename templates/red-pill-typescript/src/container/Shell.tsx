import { type FC as ReactFC, type ReactNode, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@navigations/StackNavigator";
import { createStyles } from "@theme";

function ShellInner({ children }: { children: ReactNode }) {
	const safeAreaInsets = useSafeAreaInsets();

	const containerPadding: ViewStyle = useMemo(
		() => ({
			height: "100%",
			paddingTop: safeAreaInsets.top,
		}),
		[safeAreaInsets],
	);

	return <View style={containerPadding}>{children}</View>;
}

const Shell: ReactFC = function ShellImpl() {
	return (
		<View style={styles.outerContainer}>
			<StatusBar />
			<NavigationContainer>
				<ShellInner>
					<StackNavigator />
				</ShellInner>
			</NavigationContainer>
		</View>
	);
};

export default Shell;

const styles = createStyles((theme) => ({
	outerContainer: {
		height: "100%",
		backgroundColor: theme.semantic.bg.page,
	},
}));
