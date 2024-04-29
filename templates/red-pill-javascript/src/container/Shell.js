import React, { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "@navigations/StackNavigator";
import { createStyles } from "@theme";

function ShellInner({ children }) {
  const safeAreaInsets = useSafeAreaInsets();

  const containerPadding = useMemo(
    () => ({
      height: "100%",
      paddingTop: safeAreaInsets.top,
    }),
    [safeAreaInsets]
  );

  return <View style={containerPadding}>{children}</View>;
}

const Shell = function ShellImpl() {
  return (
    <View style={styles.outerContainer}>
      <StatusBar />
      <NavigationContainer>
        <ShellInner>
          <StackNavigator />
        </ShellInner>
      </NavigationContainer>
    </View>
  );
};

export default Shell;

const styles = createStyles((theme) => ({
  outerContainer: {
    height: "100%",
    backgroundColor: theme.semantic.bg.page,
  },
}));
