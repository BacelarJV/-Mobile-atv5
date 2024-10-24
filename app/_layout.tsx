import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'purple' }, 
        headerTintColor: 'yellow',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          title: 'Home Page',
        }}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: 'User Profile',
        }}
      />
       <Stack.Screen
        name = "Id"
        options={{title: 'Id Page'}} 
      />
      </Stack>
  );
}