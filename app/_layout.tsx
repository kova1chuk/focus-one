import '@/lib/theme'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#000000' },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="add-task"
          options={{
            presentation: 'modal',
            headerShown: true,
            headerTitle: 'New Task',
            headerStyle: { backgroundColor: '#1C1C1E' },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  )
}
