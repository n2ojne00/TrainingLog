import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ChooseDate({ setSelectedDate, selectedDate }) {
    const [calendarVisible, setCalendarVisible] = useState(false);

    function dateSelected(day) {
        setSelectedDate(new Date(day.dateString)); // Set selected date in UserForm
        setCalendarVisible(false);
    }

    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={calendarVisible}
                onRequestClose={() => setCalendarVisible(!calendarVisible)}
            >
                <View style={styles.calendarButton}>
                    <Calendar
                        style={styles.calendar}
                        onDayPress={dateSelected}
                    />
                    <Button
                        title="Close calendar"
                        onPress={() => setCalendarVisible(false)}
                    />
                </View>
            </Modal>

            <Pressable onPress={() => setCalendarVisible(true)} style={styles.setTime}>
                <Text style={{ fontSize: 24 }}>
                    <FontAwesome name="calendar" size={24} color="black" />
                    {selectedDate ? selectedDate.toDateString() : ' Select date'}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    calendarButton: {
        height: '100%',
        backgroundColor: "#473729a4",
        justifyContent: 'center'
    },
    calendar: {
        borderWidth: 2,
    },
    setTime: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});
