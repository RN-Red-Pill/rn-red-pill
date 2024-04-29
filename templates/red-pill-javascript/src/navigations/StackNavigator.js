import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "@screen/auth/AuthScreen";
import { useUser } from "@contexts";
import { TabNavigator } from "./TabNavigator";
import { APP_NAVIGATION } from "./constants/navigationOptions";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
	const { isLoggedIn } = useUser();

	return (
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: true,
			}}
		>
			{isLoggedIn ? (
				<Stack.Screen
					component={TabNavigator}
					name="Home"
					options={{ headerShown: false }}
				/>
			) : (
				<Stack.Screen component={AuthScreen} {...APP_NAVIGATION.AUTH_SCREEN} />
			)}
		</Stack.Navigator>
	);
}
