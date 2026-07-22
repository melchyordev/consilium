import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/appText";
import ButtonGroup from "@/components/buttonGroup";
import TabScreenWrapper from "@/components/tabScreenWrapper";
import { colors } from "@/lib/colors";
import { useTheme } from "@/lib/themeContext";
import { ThemeOptions, ThemeSettingOptions } from "@/lib/types";

const OPTIONS = ["system", "light", "dark"];

export default function SettingsScreen() {
  const { theme, themeSetting, changeThemeSetting } = useTheme();
  const styles = createStyleSheet(theme);

  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);

  useEffect(() => {
    setSelectedThemeIndex(OPTIONS.indexOf(themeSetting));
  }, [themeSetting]);

  const handleThemeSwitch = (index: number) => {
    setSelectedThemeIndex(index);
    changeThemeSetting(OPTIONS[index] as ThemeSettingOptions);
  };

  return (
    <TabScreenWrapper title="Settings">
      <View style={styles.container}>
        <AppText style={styles.heading}>Appearance</AppText>
        <ButtonGroup
          options={OPTIONS}
          selectedIndex={selectedThemeIndex}
          onChange={handleThemeSwitch}
        />
        <AppText style={styles.heading}>Account</AppText>
        {/* TODO: replace with auth service sign out function */}
        <Pressable onPress={() => console.log("Signed out")} style={styles.button}>
          <AppText style={styles.buttonText}>Sign Out</AppText>
        </Pressable>
      </View>
    </TabScreenWrapper>
  );
}

const createStyleSheet = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      gap: 20,
    },
    heading: {
      fontSize: 28,
    },
    button: {
      padding: 8,
      alignItems: "center",
      backgroundColor: theme === "dark" ? colors.dark.surface : colors.light.surface,
    },
    buttonText: {
      color: theme === "dark" ? colors.dark.error : colors.light.error,
    },
  });
