import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator 
        screenOptions={{
            gestureEnabled: true,
            swipeEnabled: true,
            animationEnabled: true,
        }}
    >
      <Stack.Screen 
        name="Home" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}