import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Converter() {
    const [selectedUnit, setSelectedUnit] = useState('1');  // Unit selection: '1' for kilometers to miles, '2' for miles to kilometers
    const [unitName, setUnitName] = useState('Kilometers');  // State to track the selected unit

    // Function to handle unit change
    const handleUnitChange = (value) => {
        if (value === '1') {
            setUnitName('Miles');  // Set the unit name based on selection
        } else if (value === '2') {
            setUnitName('Kilometers');
        }
    };

    // Function to render custom radio buttons
    const RadioButton = ({ label, value }) => {
        return (
            <TouchableOpacity
                style={styles.radioContainer}
                onPress={() => {
                    setSelectedUnit(value);
                    handleUnitChange(value); // Update unit name based on selection
                }}
            >
                <View style={styles.outerCircle}>
                    {selectedUnit === value && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.radioText}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Unit:</Text>
            <RadioButton label="Kilometers to Miles" value="1" />
            <RadioButton label="Miles to Kilometers" value="2" />
            <Text style={styles.result}>Selected Unit: {unitName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
    },
    radioText: {
        fontSize: 16,
    },
    result: {
        fontSize: 20,
        marginTop: 10,
    },
});
