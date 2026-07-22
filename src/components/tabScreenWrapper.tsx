import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/appText";
import { colors } from "@/lib/colors";
import { useTheme } from "@/lib/themeContext";
import { ThemeOptions } from "@/lib/types";

type TabScreenWrapperProps = {
  title: string;
};

export default function TabScreenWrapper({
  title,
  children,
}: PropsWithChildren<TabScreenWrapperProps>) {
  const { theme } = useTheme();
  const styles = createStyleSheet(theme);

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      {children}
    </SafeAreaView>
  );
}

const createStyleSheet = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background,
    },
    title: {
      fontSize: 36,
      textAlign: "center",
      marginBottom: 20,
    },
  });
