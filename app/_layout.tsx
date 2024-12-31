import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="(onboarding)/firstScreen/index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)/firstScreen/index" />
      <Stack.Screen name="(onboarding)/secondScreen/index" />
      <Stack.Screen name="(onboarding)/thirdScreen/index" />
    </Stack>
  );
}
