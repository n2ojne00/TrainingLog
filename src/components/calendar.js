import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ChooseDate() {

    const [calendarVisible, setCalendarVisible] = useState(false);
    const [date, setDate] = useState();

    //const [chosenDate, setChosenDate] = useState(new Date());
    function dateSelected(day) {
        setCalendarVisible(false);
        setDate(day);
    }

    return (
    <View>

        <Modal
        animationType="none"
        transparent={true}
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(!calendarVisible)}
        >
        <Calendar style={styles.calendar} onDayPress={dateSelected}/>
            <View style={styles.calendarContests}>
                <View style={styles.calendarButton}>
                    <Button title="Close calendar" onPress={() => setCalendarVisible(false)}/> 
                </View>
            </View>

        </Modal>

        <View>
        <Pressable onPress={() => setCalendarVisible(true)} style={styles.setTime}>
            <FontAwesome name="calendar" size={24} color="black" />
            <Text style={{fontSize: 24}} >{date? date.dateString : 'Select date'}</Text>
        </Pressable>
       
            
        </View>

        </View>
    )
};

const styles = StyleSheet.create({
    calendarContests: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#24ffdd",

    },
    calendarButton: {
        width: '80%',
        height: '50%',
        backgroundColor: "#148d7b",
        alignItems: 'center',
        justifyContent: 'center'

    },
    calendar: { 
        borderWidth: 2,
    },
    setTime: {
        borderWidth: 2,
        padding: 10,
        width: 200,
        alignItems: 'center'
    }
});