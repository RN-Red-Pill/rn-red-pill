import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

const MainNavigator = () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar />
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</View>
	);
};

export default MainNavigator;
