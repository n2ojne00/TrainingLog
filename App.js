import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetSkill from './components/setSkill';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Training app</Text>

      <SetSkill/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
