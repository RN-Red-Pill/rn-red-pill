import { createStyles } from "@src/theme/createStyles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [bg, setBg] = useState("#000");
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <View style={styles.inner}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.indigo[9],
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: theme.colors.amber[5],
  },
}));
