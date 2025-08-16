import { Stack } from "expo-router";

export default function RootGroupLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
    </Stack>
  );
}
