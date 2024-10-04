import { text } from "@fortawesome/fontawesome-svg-core";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from 'react';



export default function Distance({distance, onChangeDistance}) {


    return (
    
      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDistance}
        value={distance}
        placeholder="Distance"
        keyboardType="numeric"
      />
    </View>
    
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
