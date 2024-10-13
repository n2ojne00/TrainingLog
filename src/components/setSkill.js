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
    setSelectedLogo({ logo, name });
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
      {/* Ski Button */}
      <TouchableOpacity
        onPress={() => handlePress(1, skiIcon, 'Skiing')}
        style={[
          styles.logobutton,
          { borderColor: selectedButton === 1 ? '#55e00a' : '#697268' },
        ]}
      >
        {skiIcon}
        <Text>SKIING</Text> 
      </TouchableOpacity>

      {/* Run Button */}
      <TouchableOpacity
        onPress={() => handlePress(2, runIcon, 'Running')}
        style={[
          styles.logobutton,
          { borderColor: selectedButton === 2 ? '#55e00a': '#697268' },
        ]}
      >
        {runIcon}
        <Text>RUNNING</Text>
      </TouchableOpacity>

      {/* Swim Button */}
      <TouchableOpacity
        onPress={() => handlePress(3, swimIcon, 'Swimming')}
        style={[
          styles.logobutton, 
          { borderColor: selectedButton === 3 ? '#55e00a' : '#697268' },
        ]}
      >
        {swimIcon}
        <Text>SWIMMING</Text>
      </TouchableOpacity>
    </View>
  );
}
