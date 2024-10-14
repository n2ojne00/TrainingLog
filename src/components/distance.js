import { TextInput, View } from "react-native";
import React from 'react';
import { styles } from "../styles/styles";

export default function Distance({ distance, onChangeDistance }) {

  const handleChange = (text) => {

    const numericValue = parseFloat(text);
    
    if (!isNaN(numericValue) && numericValue >= 0) {
      onChangeDistance(text);
    } else if (text === '') {
      onChangeDistance(text);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}  
        value={distance}
        placeholder="Distance"
        keyboardType="numeric"
      />
    </View>
  );
}
