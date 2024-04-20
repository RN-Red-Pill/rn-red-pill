import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@src/screens/Home';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
        }}
    >
      <Tab.Screen name="Home" component={Home}  />
    </Tab.Navigator>
  );
}