import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FrontPage() {
    return (

        <View style={[styles.container, { flexDirection: 'row' }]}>
            <Text>
                Welcome for our sport tracking app. 
                Here you can add your trainings and check history.
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
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