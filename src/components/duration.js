import { View, StyleSheet, TextInput } from "react-native";
import React from 'react';

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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
