import { Text, TextProps } from "react-native";

import { useTheme } from "@/lib/themeContext";

type AppTextProps = TextProps & { variant?: "secondary" | "subtext" };

export default function AppText({ variant, style, ...props }: AppTextProps) {
  const { colors } = useTheme();

  const color =
    variant === "secondary"
      ? colors.secondary
      : variant === "subtext"
        ? colors.subtext
        : colors.text;

  return <Text style={[{ color, fontSize: 16 }, style]} {...props} />;
}
