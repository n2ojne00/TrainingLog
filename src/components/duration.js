import { View, StyleSheet,TextInput } from "react-native";
import React from 'react';

export default function Duration() { // Receive props from parent

    const [duration, onChangeDuration] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDuration} // Update parent component's state with input
        value={duration} // Display the current duration value from parent
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
