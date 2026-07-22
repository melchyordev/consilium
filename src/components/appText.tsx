import { Text, TextProps } from "react-native";

import { colors } from "@/lib/colors";
import { useTheme } from "@/lib/themeContext";

type AppTextProps = TextProps & { variant?: "secondary" | "subtext" };

export default function AppText({ variant, style, ...props }: AppTextProps) {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? colors.dark.text : colors.light.text;
  const secondaryColor = theme === "dark" ? colors.dark.secondary : colors.light.secondary;
  const subtextColor = theme === "dark" ? colors.dark.subtext : colors.light.subtext;

  const color =
    variant === "secondary" ? secondaryColor : variant === "subtext" ? subtextColor : textColor;

  return <Text style={[{ color, fontSize: 16 }, style]} {...props} />;
}
