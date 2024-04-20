import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screen/Home";
import { APP_NAVIGATION } from "./constants/navigationOptions";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen {...APP_NAVIGATION.HOME_SCREEN} component={Home} />
      <Tab.Screen {...APP_NAVIGATION.SETTINGS_SCREEN} component={Home} />
    </Tab.Navigator>
  );
}
