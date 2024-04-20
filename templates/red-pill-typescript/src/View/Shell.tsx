import React, { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "@src/theme";
import { StackNavigator } from "@src/navigations/StackNavigator";

function ShellInner() {
  const safeAreaInsets = useSafeAreaInsets();

  const containerPadding: ViewStyle = useMemo(
    () => ({
      height: "100%",
      paddingTop: safeAreaInsets.top,
    }),
    [safeAreaInsets],
  );

  return (
    <View style={containerPadding}>
      <StackNavigator />
    </View>
  );
}

export const Shell: React.FC = function ShellImpl() {
  return (
    <ThemeProvider>
      <View style={styles.outerContainer}>
        <StatusBar />
        <NavigationContainer>
          <ShellInner />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: "100%",
  },
});
