import React, { useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import ChooseDate from '../components/calendar';
import SetSkill from '../components/setSkill';
import Duration from '../components/duration';
import Distance from '../components/distance';


const SportForm = () => {
    const [sportData, setSportData] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');

    const newSportAdded = () => {
        if (selectedLogo && selectedDate && duration && distance) {
            const addNewSport = {
                id: sportData.length + 1,
                logo: selectedLogo.logo,
                name: selectedLogo.name,
                date: selectedDate.toDateString(),
                duration: duration,
                distance: distance
            };

            setSportData([...sportData, addNewSport]);
            setSelectedLogo(null);
            setSelectedDate(new Date());
            setDuration('');
            setDistance('');
        } else {
            Alert.alert('Error', 'Please fill out all fields');
        }
    };

    const calculateTotalDistance = (skill) => {
        const totalDistance = sportData
            .filter((sport) => sport.name === skill)
            .reduce((total, sport) => total + parseFloat(sport.distance), 0);
        return totalDistance.toFixed(2);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 24, marginBottom: 10 }}>Add New Training</Text>

                {/* Logo Selection */}
                <SetSkill setSelectedLogo={setSelectedLogo} />

                {/* Duration Input */}
                <Text style={styles.inputdesc}>Duration</Text>
                <Duration duration={duration} onChangeDuration={setDuration} />

                {/* Distance Input */}
                <Text style={styles.inputdesc}>Distance</Text>
                <Distance distance={distance} onChangeDistance={setDistance} />

                {/* Date Selection */}
                <Text style={styles.inputdesc}>Date</Text>
                <ChooseDate setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

                {/* Add new training Button */}
                <TouchableOpacity style={styles.addTrainingButton} onPress={newSportAdded}>
                    <Text style={styles.buttonText}>Add new training</Text>
                </TouchableOpacity>

                {/* Total Distances Display */}
                <View style={styles.totalDistances}>
                    <Text style={styles.totalTitle}>Total Distances:</Text>
                    <Text style={styles.totalText}>Skiing: {calculateTotalDistance('Skiing')} km</Text>
                    <Text style={styles.totalText}>Running: {calculateTotalDistance('Running')} km</Text>
                    <Text style={styles.totalText}>Swimming: {calculateTotalDistance('Swimming')} km</Text>
                </View>

                {/* List of Trainings */}
                <Text style={{ fontSize: 20, marginVertical: 10 }}>Training history</Text>
                <FlatList
                    data={sportData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            {/* Left Column - Logo */}
                            <View style={styles.logoContainer}>
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
                                <Text style={styles.distanceText}>{item.distance} km</Text>
                            </View>
                        </View>
                    )}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
};

export default SportForm;
