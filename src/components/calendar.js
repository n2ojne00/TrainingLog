import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ChooseDate({ onDateChange, selectedDate }) { // Receive props from parent

    const [calendarVisible, setCalendarVisible] = useState(false);

    function dateSelected(day) {
        setCalendarVisible(false);
        onDateChange(day); // Pass selected date to parent component
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
                        onDayPress={dateSelected} // Trigger date selection
                    />

                    <Button
                        title="Close calendar"
                        onPress={() => setCalendarVisible(false)}
                    />
                </View>
            </Modal>

            <View>
                <Pressable onPress={() => setCalendarVisible(true)} style={styles.setTime}>

                    <Text style={{ fontSize: 24 }}>
                        <FontAwesome name="calendar" size={24} color="black" />
                        {selectedDate ? selectedDate.dateString : ' Select date'} {/* Display selected date */}
                    </Text>

                </Pressable>
            </View>

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
