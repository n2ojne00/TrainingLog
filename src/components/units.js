import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Converter from './unitConverter';

export default function SetUnits() {

    const [selectedUnit, setSelectedUnit] = useState('1');

    return (

    <View style={styles.container}>
     <Text  style={styles.text}>Change unit</Text>
            <View style={styles.radio}>
                <RadioGroup
                    radioButtons={[
                        { id: '1', label: 'Kilometers', value: 'kilometers' },
                        { id: '2', label: 'Miles', value: 'miles' },
                    ]}
                    onPress={setSelectedUnit}
                    selectedId={selectedUnit}
                />
            </View>

            <Text>HERE</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 200,
        borderWidth: 1,     
    }
});