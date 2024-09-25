import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';


//import TrainingLog from './src/screens/traininglog';
//import Settings from './src/screens/settings';

/**
 *     <TrainingLog/>
     <Settings/>
     <FrontPage/>

 */

export default function App() {
  return (
    <View style={styles.container}>
   <Text>HI</Text>
     <Navigation/>
      
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
