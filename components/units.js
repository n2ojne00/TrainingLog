import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function SetUnits() {

    const setUnit = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Kilometers',
            value: 'kilometers'
        },
        {
            id: '2',
            label: 'Miles',
            value: 'miles'
        }
    ]), []);

    const [selectedUnit, setSelectedUnit] = useState();

    return (

    <View style={styles.container}>
     <Text>Change unit</Text>       
        <RadioGroup style={styles.radio}
            radioButtons={setUnit} 
            onPress={setSelectedUnit}
            selectedId={selectedUnit}
        />
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        borderWidth: 1,
        alignItems: 'flex-start', // Aligns all child components to the left
    },
    radio: {
        alignSelf: 'flex-start', // Ensures RadioGroup is aligned to the left
    },
});