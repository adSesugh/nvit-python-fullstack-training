import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { container, appText } = styles
  return (
    <View style={container}>
      <Text style={appText}>Hi Lab 5</Text>
      <View style={{ flex: 0.5, borderColor: 'white', borderRadius: 25, borderWidth: 5, height: '20vh', padding: 15, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white'}}>Godwin</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    color: 'white',
    marginTop: 32
  },
  appText: {
    fontSize: 30,
    color: 'white',
  }
});
