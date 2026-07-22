import { Stack } from "expo-router";

import SplashController from "@/components/splashController";
import { colors } from "@/lib/colors";
import { ThemeProvider, useTheme } from "@/lib/themeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SplashController />
      <RootNavigator />
    </ThemeProvider>
  );
}

const RootNavigator = () => {
  // TODO: replace with auth service hook that gets user status
  const user = false;
  const { theme } = useTheme();

  const backgroundColor = theme === "light" ? colors.light.background : colors.dark.background;

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor } }}>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="signIn" />
      </Stack.Protected>
    </Stack>
  );
};
