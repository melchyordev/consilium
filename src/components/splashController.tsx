import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function SplashController() {
  // TODO: replace with auth provider loading state
  const isLoading = false;

  if (!isLoading) {
    SplashScreen.hide();
  }

  return null;
}
