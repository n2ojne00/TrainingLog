import { text } from "@fortawesome/fontawesome-svg-core";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import React from 'react';



export default function Distance() {

        const [dist_number, onChangeDistance] = React.useState('');

    return (
    
    <SafeAreaView>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeDistance}
        value={dist_number}
        placeholder="Distance"
        keyboardType="numeric"
      />
      
    </SafeAreaView>

    
    );

};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
