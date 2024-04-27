import {
	SafeAreaProvider,
	initialWindowMetrics,
} from "react-native-safe-area-context";

import "@locale";
import Shell from "@container/Shell";
import { ThemeProvider } from "@theme";
import { NotificationProvider, UserProvider } from "@contexts";
import { Fragment } from "react";
import { View } from "react-native";

/*
  Providers...
*/
export default function App() {
	return (
		<View testID="app-container">
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<ThemeProvider>
					<UserProvider>
						<NotificationProvider>
							<Shell />
						</NotificationProvider>
					</UserProvider>
				</ThemeProvider>
			</SafeAreaProvider>
		</View>
	);
}
