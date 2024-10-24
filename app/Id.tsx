import { View, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';

export default function Id() {
  const { id } = useGlobalSearchParams(); 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Id Screen </Text>
      <Text> ID: {id} </Text>
    </View>
  );
}
