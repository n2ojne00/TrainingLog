import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';


export default function SetSkill({ setSelectedLogo }) { 

  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (buttonIndex, logo) => {
    setSelectedButton(buttonIndex);
    setSelectedLogo(logo); // Pass the selected logo to UserForm
    console.log(`Button ${logo} is selected`);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
      {/* Ski Button */}
      <TouchableOpacity
        onPress={() => handlePress(1, 'Ski')}
        style={[
          { padding: 10, borderWidth: 1, borderColor: selectedButton === 1 ? 'blue' : 'gray' },
        ]}
      >
        <MaterialIcons name="downhill-skiing" size={24} color="black" />
        <Text>SKI</Text>
      </TouchableOpacity>

      {/* Run Button */}
      <TouchableOpacity
        onPress={() => handlePress(2, 'Run')}
        style={[
          { padding: 10, borderWidth: 1, borderColor: selectedButton === 2 ? 'blue' : 'gray' },
        ]}
      >
        <MaterialCommunityIcons name="run-fast" size={24} color="black" />
        <Text>RUN</Text>
      </TouchableOpacity>

      {/* Swim Button */}
      <TouchableOpacity
        onPress={() => handlePress(3, 'Swim')}
        style={[
          { padding: 10, borderWidth: 1, borderColor: selectedButton === 3 ? 'blue' : 'gray' },
        ]}
      >
        <FontAwesome6 name="person-swimming" size={24} color="black" />
        <Text>SWIM</Text>
      </TouchableOpacity>
    </View>
  );
}

