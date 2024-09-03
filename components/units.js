import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function SetUnits() {

    const [selectedUnit, setSelectedUnit] = useState();

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
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 200,
        borderWidth: 1,     
    },

    radio: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'red'
    }

});