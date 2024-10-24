import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const randomId = Math.floor(Math.random() * 100);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => router.push('/Profile')} />
      <Button 
        title={`Go to Id Screen with ID ${randomId}`} 
        onPress={() => router.push(`/Id?id=${randomId}`)} 
      />
    </View>
  );
}
