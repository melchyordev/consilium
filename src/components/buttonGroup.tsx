import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/lib/colors";
import { useTheme } from "@/lib/themeContext";
import { ThemeOptions } from "@/lib/types";

type ButtonGroupProps = {
  options: string[];
  selectedIndex: number;
  onChange: (...args: any[]) => void;
};

export default function ButtonGroup({ options, selectedIndex, onChange }: ButtonGroupProps) {
  const { theme } = useTheme();
  const styles = createStyleSheet(theme);

  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <Pressable
            key={option}
            onPress={() => onChange(index)}
            style={[
              styles.button,
              isSelected && styles.selected,
              isFirst && styles.first,
              isLast && styles.last,
            ]}
          >
            <Text
              style={[styles.text, isSelected && styles.selectedText]}
            >{`${option.charAt(0).toUpperCase()}${option.slice(1)}`}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyleSheet = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderWidth: 2,
      borderRadius: 8,
      borderColor: theme === "dark" ? colors.dark.border : colors.light.border,
      padding: 4,
    },
    button: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: theme === "dark" ? colors.dark.surface : colors.light.surface,
    },
    selected: {
      backgroundColor:
        theme === "dark" ? colors.dark.surfaceSecondary : colors.light.surfaceSecondary,
      borderRadius: 6,
    },
    first: {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },
    last: {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
    text: {
      fontSize: 16,
      color: theme === "dark" ? colors.dark.text : colors.light.text,
    },
    selectedText: {
      fontWeight: "bold",
      color: theme === "dark" ? colors.dark.primary : colors.light.primary,
    },
  });
