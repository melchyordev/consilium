import { Stack } from "expo-router";

import SplashController from "@/components/splashController";
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
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}
    >
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="signIn" />
      </Stack.Protected>
    </Stack>
  );
};
