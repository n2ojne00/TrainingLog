import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "../styles/styles";

export default function Converter() {
    const [selectedUnit, setSelectedUnit] = useState('kilometers');
    const [distance, setDistance] = useState('');
    const [convertedDistance, setConvertedDistance] = useState('');

    // Function to handle unit change
    const handleUnitChange = (value) => {
        setSelectedUnit(value);
        setDistance('');
        setConvertedDistance('');
    };

    // Function to handle distance unitInput
    const handleDistanceChange = (value) => {
        const numValue = parseFloat(value);
        setDistance(value);

        if (!isNaN(numValue)) {
            // Convert based on the selected unit
            if (selectedUnit === 'kilometers') {
                setConvertedDistance(numValue / 0.621371);
            } else if (selectedUnit === 'miles') {
                setConvertedDistance(numValue * 0.621371);
            }
        } else {
            setConvertedDistance(''); // Clear if unitInput is not a valid number
        }
    };

    // Function to render custom radio buttons
    const RadioButton = ({ label, value }) => {
        return (
            <TouchableOpacity
                style={styles.radioContainer}
                onPress={() => handleUnitChange(value)}
            >
                <View style={styles.outerCircle}>
                    {selectedUnit === value && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.radioText}>{label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.unitcontainer}>
            <Text style={styles.label}>Select Unit:</Text>
            <RadioButton label="to Kilometers" value="kilometers" />
            <RadioButton label="to Miles" value="miles" />

            <TextInput
                style={styles.unitInput}
                placeholder={`Enter distance in ${selectedUnit}`}
                value={distance}
                onChangeText={handleDistanceChange}
                keyboardType="numeric"
            />

            <Text style={styles.unitResult}>
                {convertedDistance !== '' ? `Converted Distance: ${convertedDistance.toFixed(2)} ${selectedUnit === 'kilometers' ? 'km' : 'miles'}` : ''}
            </Text>
        </View>
    );
}
