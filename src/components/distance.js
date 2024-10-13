import { TextInput, View } from "react-native";
import React from 'react';
import { styles } from "../styles/styles";



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


