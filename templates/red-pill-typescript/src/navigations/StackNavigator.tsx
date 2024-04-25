import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: true,
			}}
		>
			<Stack.Screen
				component={TabNavigator}
				name="Home"
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
