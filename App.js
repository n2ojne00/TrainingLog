import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './Navigation';




export default function App() {
  return (
    <View style={styles.container}>
   
     <NavigationBar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1
  },
});
