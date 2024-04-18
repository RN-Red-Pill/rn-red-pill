import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@src/contexts";
import { createStyles } from "@src/theme";
import { StatusBar } from "expo-status-bar";
// @libs
import "@libs/i18n";

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <View style={[styles.container]}>
        <View style={styles.inner}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Text>{t("Songs")}</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </ThemeProvider>
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
