import {
	SafeAreaProvider,
	initialWindowMetrics,
} from "react-native-safe-area-context";

import "@locale";
import { ThemeProvider } from "@theme";
import { NotificationProvider, UserProvider } from "@contexts";
import Shell from "@container/Shell";

/*
  Providers...
*/
export default function App() {
	return (
		<SafeAreaProvider
			testID="app-container"
			initialMetrics={initialWindowMetrics}
		>
			<ThemeProvider>
				<UserProvider>
					<NotificationProvider>
						<Shell />
					</NotificationProvider>
				</UserProvider>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
