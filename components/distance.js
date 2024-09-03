import { text } from "@fortawesome/fontawesome-svg-core";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import React from 'react';



export default function Distance() {

        const [number, onChangeNumber] = React.useState('');
    
  
    return (
    
    <SafeAreaView>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="distance"
        keyboardType="numeric"
      />
    </SafeAreaView>

    
    );

};

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});