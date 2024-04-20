import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";

// @libs
import "@locale";
import { Shell } from "@src/View/Shell";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Shell />
    </SafeAreaProvider>
  )
}
