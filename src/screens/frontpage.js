import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FrontPage() {
    return (

        <View style={[styles.container, { flexDirection: 'row' }]}>
        <Pressable style={styles.box} ><Text>NEW TRAINING</Text></Pressable>
        <Pressable style={styles.box}><Text>MY HISTORY</Text></Pressable>
        <Pressable style={styles.box}><Text>SETTINGS</Text></Pressable>
        </View>


    );
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        width: '90%',
        justifyContent: 'center'
    },
    box: {
        borderWidth: 2,
        borderColor: '#5f6d26',
        margin: '5%',
        padding: 10
    }
})