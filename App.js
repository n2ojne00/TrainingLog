import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FrontPage from './src/screens/frontpage';

//import TrainingLog from './src/screens/traininglog';
//import Settings from './src/screens/settings';

/**
 *     <TrainingLog/>
     <Settings/>

 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Training app</Text>

     <FrontPage/>


      
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
