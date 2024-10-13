import React, { useState } from 'react';
import { View, Text, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import ChooseDate from '../components/calendar';
import SetSkill from '../components/setSkill';
import Duration from '../components/duration';
import Distance from '../components/distance';
import { styles } from '../styles/styles';

const UserForm = () => {
    const [userData, setUserData] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');


    const addUser = () => {
        if (selectedLogo && selectedDate && duration && distance) {
            const newUser = {
                id: userData.length + 1,
                logo: selectedLogo.logo,
                name: selectedLogo.name,  
                date: selectedDate.toDateString(),
                duration: duration,
                distance: distance
            };

            setUserData([...userData, newUser]);
            setSelectedLogo(null);
            setSelectedDate(new Date());
            setDuration('');
            setDistance('');
        } else {
            Alert.alert('Error', 'Please fill out all fields');
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Add New Training</Text>

            {/* Logo Selection */}
            <SetSkill setSelectedLogo={setSelectedLogo} />

            {/* Duration Input */}
            <Duration duration={duration} onChangeDuration={setDuration} />

            {/* Distance Input */}
            <Distance distance={distance} onChangeDistance={setDistance} />

            {/* Date Selection */}
            <ChooseDate setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

            {/* Add new training Button */}
            <TouchableOpacity style={styles.addTrainingButton} onPress={addUser}>
                <Text style={styles.buttonText}>Add new training</Text>
            </TouchableOpacity>

            {/* List of Trainings */}
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Previous trainings</Text>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        {/* Left Column - Logo */}
                        <View style={styles.logoContainer}>
                            {/* Render the logo */}
                            {item.logo}
                            <Text style={styles.nameText}>{item.name}</Text>
                        </View>

                        {/* Middle Column - Date and Duration */}
                        <View style={styles.middleColumn}>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Text style={styles.durationText}>{item.duration} hours</Text>
                        </View>

                        {/* Right Column - Distance */}
                        <View style={styles.rightColumn}>
                            <Text style={styles.distanceText}>{item.distance}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default UserForm;
