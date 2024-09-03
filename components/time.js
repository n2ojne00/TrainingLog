import { text } from "@fortawesome/fontawesome-svg-core";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import React from 'react';



export default function Duration() {

        const [timerNumber, onChangeTimer] = React.useState('');
    
  
    return (
    
    <SafeAreaView>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeTimer}
        value={timerNumber}
        placeholder="Duration"
        keyboardType="numeric"
      />
      
    </SafeAreaView>

    
    );

};

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});