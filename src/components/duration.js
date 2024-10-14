import { View, StyleSheet, TextInput } from "react-native";
import React from 'react';
import { styles } from "../styles/styles";

export default function Duration({ duration, onChangeDuration }) {
  // A function to handle changes in the TextInput
  const handleChange = (text) => {
    // Parse the text input to a number
    const numericValue = parseFloat(text);
    
    // Check if the numeric value is non-negative
    if (!isNaN(numericValue) && numericValue >= 0) {
      // If valid, call the onChangeDuration function with the new value
      onChangeDuration(text);
    } else if (text === '') {
      // Allow empty string to clear the input
      onChangeDuration(text);
    }
    // If the value is negative, do nothing (or you could show an alert or feedback)
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}  // Use the new handleChange function
        value={duration}
        placeholder="Duration"
        keyboardType="numeric"
      />
    </View>
  );
}
