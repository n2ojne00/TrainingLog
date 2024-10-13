import { View, StyleSheet, TextInput } from "react-native";
import React from 'react';
import { styles } from "../styles/styles";

export default function Duration({ duration, onChangeDuration }) {
  
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDuration}
        value={duration}
        placeholder="Duration"
        keyboardType="numeric"
      />
    </View>

  );
}


