import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetSkill from './components/setSkill';
import Distance from './components/distance';
import Duration from './components/time';
import ChooseDate from './components/calendar';
import SetUnits from './components/units';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Training app</Text>

      <SetSkill/>
      <Distance/>
      <Duration/>
      <ChooseDate/>

      <SetUnits/>



      
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
