import { View, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@src/contexts";
import { createStyles } from "@src/theme";
// @libs
import "@libs/i18n";
// @ui
import { Headline, Text, Title, Label } from "@ui";

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <SafeAreaView style={[styles.container]}>
        <View>
          <Headline>Open up App.tsx to start working on your app!</Headline>
          <Title size="xl">{t("Songs")}</Title>
          <Label size="lg">{t("Songs")}</Label>
          <Text>{t("Songs")}</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.indigo[9],
    flex: 1,
  },
}));
