import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppText from "@/components/appText";

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.title}>Sign In</AppText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
