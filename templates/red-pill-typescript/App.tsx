import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
// @libs
import "@locale";
// @containers
import Shell from "@container/Shell";
import { ThemeProvider } from "@theme";
import { UserProvider } from "@contexts";

/*
  Providers...
*/
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <UserProvider>
          <Shell />
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
