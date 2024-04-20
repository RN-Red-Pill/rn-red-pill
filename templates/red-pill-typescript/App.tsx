import { View, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { createStyles, ThemeProvider } from "@theme";
// @libs
import "@libs/i18n";
// @ui
import { Headline, Text, Title, Label, Input, Button } from "@ui";

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <SafeAreaView style={[styles.container]}>
        <View style={{ gap: 10, paddingHorizontal: 10 }}>
          <Headline>Open up App.tsx to start working on your app!</Headline>
          <Title size="xl">{t("Songs")}</Title>
          <Label size="lg">{t("Songs")}</Label>
          <Text>{t("Songs")}</Text>
          <Input
            leftIcon="mail"
            rightIcon="question"
            variant="outlined"
            label="Email"
            sublabel="dsdf"
          />
          <Button
            size="md"
            onPress={() => {}}
            leftIcon="user"
            rightIcon="user"
          >
            Selam
          </Button>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[2],
    flex: 1,
  },
}));
