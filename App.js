import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SetSkill from './src/components/setSkill';
import Distance from './src/components/distance';
import Duration from './src/components/time';
import ChooseDate from './src/components/calendar';
import SetUnits from './src/components/units';

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
