import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { ICONS } from '../styles/icons';
import { styles } from '../styles/styles';

export default function SetSkill({ setSelectedLogo }) { 

  const [selectedButton, setSelectedButton] = useState(null);
  
  const skiIcon = ICONS.find(icon => icon.logoname === 'skiing').logo;
  const runIcon = ICONS.find(icon => icon.logoname === 'running').logo;
  const swimIcon = ICONS.find(icon => icon.logoname === 'swimming').logo;

  const handlePress = (buttonIndex, logo, name) => {
    setSelectedButton(buttonIndex);
    setSelectedLogo({ logo, name }); // Pass both the icon and the name to UserForm
    console.log(`Button ${name} is selected`);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
      {/* Ski Button */}
      <TouchableOpacity
        onPress={() => handlePress(1, skiIcon, 'Ski')}
        style={[
          styles.logobutton,
          { borderColor: selectedButton === 1 ? '#ff5176' : '#697268' },
        ]}
      >
        {skiIcon}
        <Text>SKI</Text> 
      </TouchableOpacity>

      {/* Run Button */}
      <TouchableOpacity
        onPress={() => handlePress(2, runIcon, 'Run')}
        style={[
          styles.logobutton,
          { borderColor: selectedButton === 2 ? '#ff5176' : '#697268' },
        ]}
      >
        {runIcon}
        <Text>RUN</Text>
      </TouchableOpacity>

      {/* Swim Button */}
      <TouchableOpacity
        onPress={() => handlePress(3, swimIcon, 'Swim')}
        style={[
          styles.logobutton, 
          { borderColor: selectedButton === 3 ? '#ff5176' : '#697268' },
        ]}
      >
        {swimIcon}
        <Text>SWIM</Text>
      </TouchableOpacity>
    </View>
  );
}
