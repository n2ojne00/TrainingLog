import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

export default function SetSkill() {

    /*const [count, setCount] = useState(0); 
    const onPress = () => setCount(prevCount => prevCount + 1);
    console.log({count})
    */

const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    console.log(`Button ${buttonIndex} is selected`);
  };

  return (
    <View style={[styles.container, { flexDirection: 'row' }]}>
      
      <TouchableOpacity 
        onPress={() => handlePress(1)}
        style={[
          styles.button,
          selectedButton === 1 && styles.selectedButton
        ]}
      >
        <MaterialIcons name="downhill-skiing" size={24} color="black" />
        <Text style={styles.buttonText}>SKI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress(2)}
        style={[
          styles.button,
          selectedButton === 2 && styles.selectedButton
        ]}
      >
        <MaterialCommunityIcons name="run-fast" size={24} color="black" />
        <Text style={styles.buttonText}>RUN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress(3)}
        style={[
          styles.button,
          selectedButton === 3 && styles.selectedButton
        ]}
      >
        <FontAwesome6 name="person-swimming" size={24} color="black" />
        <Text style={styles.buttonText}>SWIM</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 7,
    },
    button: {
      flex: 2,
      backgroundColor: '#8f765f80',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#352b23a6' 
    
    },
    selectedButton: {
      backgroundColor: '#584839a6', // Change this color as per your design
    },
    buttonText: {
      marginTop: 5,
      color: 'black',
    },
  });