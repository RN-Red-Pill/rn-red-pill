import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screen/home/Home";
import { APP_NAVIGATION } from "./constants/navigationOptions";
import Settings from "@screen/settings/Settings";
import CustomTabBar from "src/components/CustomTabbar";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
	return (
		<Tab.Navigator
			tabBar={(props) => <CustomTabBar {...props} />}
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
			}}
		>
			<Tab.Screen {...APP_NAVIGATION.HOME_SCREEN} component={Home} />
			<Tab.Screen {...APP_NAVIGATION.SETTINGS_SCREEN} component={Settings} />
		</Tab.Navigator>
	);
}
