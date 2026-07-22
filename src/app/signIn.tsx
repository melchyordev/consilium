import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/appText";
import { useTheme } from "@/lib/themeContext";
import { ThemeOptions } from "@/lib/types";

export default function SignInScreen() {
  const { theme } = useTheme();
  const styles = createStyleSheet(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.title}>Sign In</AppText>
    </SafeAreaView>
  );
}

const createStyleSheet = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 16,
      padding: 20,
      alignItems: "center",
      marginTop: 40,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });
