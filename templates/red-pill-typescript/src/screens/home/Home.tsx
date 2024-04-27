import { View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import { Text, Switch, Textarea, Spinner } from "@ui";

const Home = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ gap: 10, paddingHorizontal: 10 }}>
        <Spinner />
        <Switch value={value} onChange={() => setValue(!value)} />
        <Text>{t("welcome")}</Text>
        <Textarea label="Emamil" />
      </View>
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.semantic.bg.page,
  },
}));

export default Home;
