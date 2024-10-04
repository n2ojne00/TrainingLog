import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ChooseDate from '../components/calendar';
import SetSkill from '../components/setSkill';
import Duration from '../components/duration'; 
import Distance from '../components/distance';

const UserForm = () => {
    const [userData, setUserData] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [duration, setDuration] = useState(''); 
    const [distance, setDistance] = useState(''); 
    const [showTimePicker, setShowTimePicker] = useState(false);

    const addUser = () => {
        if (selectedLogo && selectedDate && selectedTime && duration && distance) {
            const newUser = {
                id: userData.length + 1,
                logo: selectedLogo,
                date: selectedDate.toDateString(),
                time: selectedTime.toLocaleTimeString(),
                duration: duration,
                distance: distance
            };

            setUserData([...userData, newUser]);
            setSelectedLogo(null);
            setSelectedDate(new Date());
            setSelectedTime(new Date());
            setDuration('');
            setDistance('');
        } else {
            Alert.alert('Error', 'Please fill out all fields');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Add New Training</Text>

            {/* Time Selection */}
            <Button title="Select starting time" onPress={() => setShowTimePicker(true)} />
            {showTimePicker ? (
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
            ) : null}
            
            <Text style={{ marginBottom: 10 }}>
                Selected starting time: {selectedTime.toLocaleTimeString()}
            </Text>

            {/* Logo Selection */}
            <SetSkill setSelectedLogo={setSelectedLogo} />

            {/* Duration Input */}
            <Duration duration={duration} onChangeDuration={setDuration} />

            {/** Distance Input */}
            <Distance distance={distance} onChangeDistance={setDistance} />

            {/* Date Selection */}
            <ChooseDate setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

            {/* Add new training Button */}
            <Button title="Add new training" onPress={addUser} />

            {/* List of Trainings */}
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Previous trainings</Text>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    // This must be inside <Text> to avoid the "Text strings must be rendered..." error
                    <Text>{`Logo: ${item.logo}, Date: ${item.date}, Time: ${item.time}, Duration: ${item.duration} hours, Distance: ${item.distance} `}</Text>
                )}
            />
        </View>
    );
};

export default UserForm;
