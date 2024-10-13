import { useState } from "react";
import { Button, Modal, Pressable, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { styles } from "../styles/styles";
import { ICONS } from "../styles/icons";

export default function ChooseDate({ setSelectedDate, selectedDate }) {

    const calendarIcon = ICONS.find(icon => icon.logoname === 'calendar').logo;

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
                        color='#ff6d8d'
                    />
                </View>
            </Modal>

            <Pressable onPress={() => setCalendarVisible(true)} style={styles.setTime}>
                
                <Text style={{ fontSize: 20 }}>
                {calendarIcon} {selectedDate ? selectedDate.toDateString() : ' Select date'}
                </Text>
            </Pressable>
        </View>
    );
}
