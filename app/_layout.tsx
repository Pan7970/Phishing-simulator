import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="sms" />
        <Stack.Screen name="email" />
        <Stack.Screen name="phishing" />
        <Stack.Screen name="warning" />
        <Stack.Screen name="debit" />
        <Stack.Screen name="quiz" />
        <Stack.Screen name="tips" />
      </Stack>
    </>
  );
}