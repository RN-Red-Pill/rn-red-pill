import { type FC as ReactFC, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, type ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@navigations/StackNavigator";

function ShellInner() {
	const safeAreaInsets = useSafeAreaInsets();

	const containerPadding: ViewStyle = useMemo(
		() => ({
			height: "100%",
			paddingTop: safeAreaInsets.top,
		}),
		[safeAreaInsets],
	);

	return (
		<View style={containerPadding}>
			<StackNavigator />
		</View>
	);
}

const Shell: ReactFC = function ShellImpl() {
	return (
		<View style={styles.outerContainer}>
			<StatusBar />
			<NavigationContainer>
				<ShellInner />
			</NavigationContainer>
		</View>
	);
};

export default Shell;

const styles = StyleSheet.create({
	outerContainer: {
		height: "100%",
	},
});
