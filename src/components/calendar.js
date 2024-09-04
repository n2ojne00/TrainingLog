import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";


export default function ChooseDate() {

    const [calendarVisible, setCalendarVisible] = useState(false);
    const [date, setDate] = useState();

    //const [chosenDate, setChosenDate] = useState(new Date());
    

    return (
    <View>

        <Modal
        animationType="none"
        transparent={true}
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(!calendarVisible)}
        >
            <View style={styles.calendarContests}>
                <View style={styles.calendar}>
                    <Button title="Close calendar" onPress={() => setCalendarVisible(false)}/> 
                </View>
            </View>

        </Modal>

        <View>
        <Button title='choose date' onPress={() => setCalendarVisible(true)}/>
            
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
    calendar: {
        width: '80%',
        height: '50%',
        backgroundColor: "#148d7b",
        alignItems: 'center',
        justifyContent: 'center'

    }
});