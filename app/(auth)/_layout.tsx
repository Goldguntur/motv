// import stack screen from expo router
import { Stack } from "expo-router";

// create root layout for auth
const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="sign-up" options={{ headerShown: true }} />
    </Stack>
  );
};
export default AuthLayout;
