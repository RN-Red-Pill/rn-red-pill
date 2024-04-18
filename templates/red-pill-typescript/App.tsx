import { createStyles } from "@src/theme/createStyles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import "./i18n.config";

export default function App() {
  const [bg, setBg] = useState("#000");
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <View style={styles.inner}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{t('Songs')}</Text>
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
