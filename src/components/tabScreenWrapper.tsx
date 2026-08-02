import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/appText";
import { useTheme } from "@/lib/themeContext";

type TabScreenWrapperProps = {
  title: string;
};

export default function TabScreenWrapper({
  title,
  children,
}: PropsWithChildren<TabScreenWrapperProps>) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <AppText style={styles.title}>{title}</AppText>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 20,
  },
});
