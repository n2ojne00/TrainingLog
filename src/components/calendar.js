import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ChooseDate() {

    const [calendarVisible, setCalendarVisible] = useState(false);
    const [date, setDate] = useState();

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

        <View>
        <Pressable onPress={() => setCalendarVisible(true)} style={styles.setTime}>
            
            <Text style={{fontSize: 24}} >
                <FontAwesome name="calendar" size={24} color="black"/>
                {date? date.dateString : ' Select date'}
            </Text>

        </Pressable>           
        </View>

    </View>
    )
};

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
        borderWidth: 2,
        padding: 10,
        width: 200,
        alignItems: 'center'
    }
});