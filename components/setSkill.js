import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

export default function SetSkill() {

    const [count, setCount] = useState(0); 
    const onPress = () => setCount(prevCount => prevCount + 1);




    return(
        <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
            
      <Text>Count: {count}</Text>

    <TouchableOpacity title ='RUN'
      onPress={onPress}
       style={{flex: 1, backgroundColor: 'blue'}}>
     <MaterialIcons name="downhill-skiing" size={24} color="black" />
     </TouchableOpacity>


      <TouchableOpacity title ='RUN'
      onPress={() => console.log("button pressed")}
       style={{flex: 2, backgroundColor: 'blue'}}>
     <MaterialIcons name="downhill-skiing" size={24} color="black" />
     </TouchableOpacity>


      <TouchableOpacity title ='RUN'
      onPress={() => console.log("button pressed")}
       style={{flex: 3, backgroundColor: 'blue'}}>
     <MaterialIcons name="downhill-skiing" size={24} color="black" />
     </TouchableOpacity>
       
       
        
      </View>
  
    )

}
const styles = StyleSheet.create({
    container: {
     
      padding: 20,
      
    },
  });
