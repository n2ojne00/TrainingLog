import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker'; // Ensure you import DateTimePicker
import ChooseDate from '../components/calendar';
import SetSkill from '../components/setSkill';

const UserForm = () => {
    const [userData, setUserData] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState(null); // State for selected logo

    // State for new user input fields
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [duration, setDuration] = useState('');

    // For showing TimePicker
    const [showTimePicker, setShowTimePicker] = useState(false);

    // Function to choose the logo
    const chooseLogo = (logo) => {
        setSelectedLogo(logo);
    };

    // Function to add new user
    const addUser = () => {
        if (selectedLogo && selectedDate && selectedTime && duration) {
            const newUser = {
                id: userData.length + 1, // Auto-increment the ID based on the array length
                logo: selectedLogo,
                date: selectedDate.toDateString(), // Convert to readable format
                time: selectedTime.toLocaleTimeString(), // Convert to readable time format
                duration: duration // Add duration
            };

            setUserData([...userData, newUser]);
            // Reset the inputs after adding the user
            setSelectedLogo(null);
            setSelectedDate(new Date());
            setSelectedTime(new Date());
            setDuration('');
        } else {
            Alert.alert('Error', 'Please fill out all fields, select a logo, date, time, and duration');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Add New Training</Text>

            {/* Time Selection */}
            <Button title="Select starting time" onPress={() => setShowTimePicker(true)} />
            {showTimePicker && (
                <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    display="default"
                    onChange={(event, selectedTime) => {
                        const currentTime = selectedTime || selectedTime;
                        setShowTimePicker(false);
                        setSelectedTime(currentTime);
                    }}
                />
            )}
            <Text style={{ marginBottom: 10 }}>Selected starting time: {selectedTime.toLocaleTimeString()}</Text>

            {/* Logo Selection */}
            <SetSkill setSelectedLogo={setSelectedLogo} />

            {/* Duration Input */}
            <TextInput
                placeholder="Duration (in hours)"
                keyboardType="numeric"
                value={duration}
                onChangeText={(text) => setDuration(text)}
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />

            {/* Date Selection using ChooseDate component */}
            <ChooseDate setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

            {/* Add User Button */}
            <Button title="Add User" onPress={addUser} />

            {/* List of Users */}
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Previous trainings</Text>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{` Logo: ${item.logo}, Date: ${item.date}, Time: ${item.time}, Duration: ${item.duration} hours`}</Text>
                )}
            />
        </View>
    );
};

export default UserForm;
