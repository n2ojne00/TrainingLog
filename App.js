import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import NavigationBar from './Navigation';




export default function App() {

  const image = {}

  return (
    <View style={styles.container}>
      <ImageBackground source={('./assets/forest.jpg')}></ImageBackground>
   
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
