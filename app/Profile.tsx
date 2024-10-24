import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Link href="/Home">
        <Text style={{ color: 'blue' }}>Back to Home</Text>
      </Link>
    </View>
  );
}
